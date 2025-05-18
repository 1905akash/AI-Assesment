import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { questionBank } from './QuestionBank';
import logo from '../assets/logo.jpg';
import AssessmentComplete from './AssessmentComplete';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface AssessmentState {
  skillLevel: string;
  userName: string;
  userEmail: string;
  subLevel: 'Easy' | 'Medium' | 'Hard';
}

export const QuestionPaper: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as AssessmentState;

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  // Remove this line
  // const subLevel = 'Easy';

  useEffect(() => {
    if (!state?.skillLevel || !state?.userName || !state?.userEmail) {
      navigate('/', { replace: true });
      return;
    }

    const questionSet = questionBank[state.skillLevel as keyof typeof questionBank]?.[state.subLevel];
    if (questionSet) {
      // Shuffle function
      const shuffle = <T,>(array: T[]): T[] => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      };

      // Shuffle questions and their options
      const shuffledQuestions = questionSet.map(q => {
        const shuffledOptions = shuffle(q.options);
        // Find the new index of the correct answer after shuffling
        const newCorrectAnswerIndex = shuffledOptions.indexOf(q.correctAnswer);
        return {
          ...q,
          id: crypto.randomUUID(),
          options: shuffledOptions,
          correctAnswer: shuffledOptions[newCorrectAnswerIndex]
        };
      });

      // Shuffle the questions themselves
      setQuestions(shuffle(shuffledQuestions));
    }
  }, [state, navigate]);

  const calculateTimeSpent = (): number => {
    const endTime = new Date();
    return Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
  };

  const resetTimer = () => {
    setStartTime(new Date());
  };

  const saveProgress = async (questionData: { questionId: string; answer: string; timeSpent: number }) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5001/api/assessment/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...questionData,
          userName: state.userName,
          userEmail: state.userEmail,
          skillLevel: state.skillLevel,
          subLevel: state.subLevel,
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to save progress: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Progress saved:', data);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setError(errorMessage);
      console.error('Error saving progress:', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Remove the saveProgress function and its calls
  const handleAnswerSelect = (answer: string) => {
    if (currentQuestion >= 0 && currentQuestion < questions.length) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = answer;
      setAnswers(newAnswers);
    }
  };

  const saveAssessmentResults = async (retryCount = 3) => {
      setLoading(true);
      try {
        // Create date in IST
        const now = new Date();
        const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000)); // Add 5 hours 30 minutes
        
        const response = await fetch('http://localhost:5001/api/assessment/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: state.userName,
            userEmail: state.userEmail,
            skillLevel: state.skillLevel,
            subLevel: state.subLevel,
            score: calculateScore(),
            totalQuestions: questions.length,
            completedAt: istTime.toISOString(), // This will now be in IST
            timeSpent: calculateTimeSpent()
          })
        });
  
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
  
        const data = await response.json();
        console.log('Assessment saved:', data);
      } catch (error) {
        if (retryCount > 0) {
          console.log(`Retrying... ${retryCount} attempts left`);
          setTimeout(() => saveAssessmentResults(retryCount - 1), 1000);
          return;
        }
        const errorMessage = error instanceof Error ? error.message : 'Connection failed';
        setError(errorMessage);
        console.error('Error:', errorMessage);
      } finally {
        setLoading(false);
      }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      resetTimer();
    } else {
      setShowScore(true);
      saveAssessmentResults();
    }
  };

  const calculateScore = (): number => {
    return questions.reduce((score, question, index) => {
      return score + (question.correctAnswer === answers[index] ? 1 : 0);
    }, 0);
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowScore(false);
    resetTimer();
  };

  const handleExit = () => {
    if (window.confirm('Are you sure you want to exit? Your progress will be lost.')) {
      navigate('/', { replace: true });
    }
  };

  if (!state?.userName || !state?.userEmail || !state?.skillLevel) {
    return null;
  }

  if (loading) {
    return <div className="saving-indicator">Saving your progress...</div>;
  }

  if (error) {
    return (
      <div className="error-message">
        {error}
        <button onClick={() => setError('')}>Dismiss</button>
      </div>
    );
  }

  if (showScore) {
    return (
      <AssessmentComplete
        skillLevel={state.skillLevel}
        subLevel={state.subLevel}
        userName={state.userName}
        userEmail={state.userEmail}
        score={calculateScore()}
        totalQuestions={questions.length}
        onRetake={handleRetake}
        answers={answers}
      />
    );
  }

  return (
    <div className="question-paper">
      <div className="logo-container">
        <img src={logo} alt="Assessment Logo" className="assessment-logo" />
        <h1 className="assessment-title">AI-Driven Assessment</h1>
      </div>
      <button className="exit-button" onClick={handleExit}>
        Exit
      </button>
      <div className="question-container">
        <h2>{state.skillLevel} Level - {state.subLevel}</h2>
        <h3>Question {currentQuestion + 1} of {questions.length}</h3>
        {questions[currentQuestion] && (
          <>
            <p>{questions[currentQuestion].question}</p>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={`option ${answers[currentQuestion] === option ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
            <button
              className="next-button"
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
            >
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionPaper;
import { useState, useEffect } from 'react';
import { questionBank } from './QuestionBank';
import logo from '../assets/logo.jpg';
import { useNavigate, useLocation } from 'react-router-dom';
import AssessmentComplete from './AssessmentComplete';

export const QuestionPaper: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { skillLevel: initialSkillLevel, userName, userEmail } = location.state || {};
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showScore, setShowScore] = useState(false);
  const subLevel = 'Easy';

  // If no skillLevel or user info is provided in location state, redirect back to home
  useEffect(() => {
    if (!initialSkillLevel || !userName || !userEmail) {
      navigate('/', { replace: true });
    }
  }, [initialSkillLevel, userName, userEmail, navigate]);

  const questions = questionBank[initialSkillLevel as keyof typeof questionBank][subLevel as 'Easy' | 'Medium' | 'Hard'];

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowScore(true);
      // Save assessment results to MongoDB
      saveAssessmentResults();
    }
  };

  const saveAssessmentResults = async () => {
    try {
      const response = await fetch('/api/assessment/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: userName,
          userEmail: userEmail,
          skillLevel: initialSkillLevel,
          subLevel: subLevel,
          score: calculateScore(),
          totalQuestions: questions.length,
          answers: answers,
          completedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Failed to save assessment results');
      }
    } catch (error) {
      console.error('Error saving assessment results:', error);
    }
  };

  const handleExit = () => {
    if (window.confirm('Are you sure you want to exit? Your progress will be lost.')) {
      navigate('/', { replace: true });
    }
  };

  const calculateScore = () => {
    return questions.reduce((score, question, index) => {
      return score + (question.correctAnswer === answers[index] ? 1 : 0);
    }, 0);
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowScore(false);
  };

  if (showScore) {
    return (
      <AssessmentComplete
        skillLevel={initialSkillLevel}
        subLevel={subLevel}
        userName={userName}
        userEmail={userEmail}
        score={calculateScore()}
        totalQuestions={questions.length}
        onRetake={handleRetake}
        answers={answers}  // Add this line to pass the answers
      />
    );
  }

  // If no user info, return null while redirecting
  if (!userName || !userEmail || !initialSkillLevel) {
    return null;
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
        <h2>{initialSkillLevel} Level - {subLevel}</h2>
        <h3>Question {currentQuestion + 1} of {questions.length}</h3>
        <p>{questions[currentQuestion].question}</p>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <div 
              key={index}
              className={`option ${answers[currentQuestion] === option ? 'selected' : ''}`}
            >
              <input
                type="radio"
                id={`option${index}`}
                name="answer"
                value={option}
                checked={answers[currentQuestion] === option}
                onChange={() => handleAnswerSelect(option)}
              />
              <label htmlFor={`option${index}`}>{option}</label>
            </div>
          ))}
        </div>
        <button 
          onClick={handleNext}
          disabled={!answers[currentQuestion]}
        >
          {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};
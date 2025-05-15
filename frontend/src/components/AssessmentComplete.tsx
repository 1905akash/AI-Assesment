import React from 'react';
import { useNavigate } from 'react-router-dom';

interface AssessmentCompleteProps {
  score: number;
  totalQuestions: number;
  onRetake: () => void;
  skillLevel: string;
  subLevel: string;
  userName: string;
  userEmail: string;
  answers: string[];  // Add this line
}

const AssessmentComplete: React.FC<AssessmentCompleteProps> = ({ 
  score, 
  totalQuestions, 
  onRetake,
  skillLevel,
  subLevel,
  userName,
  userEmail,
  answers  // Add this line
}) => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/', { replace: true });
  };

  React.useEffect(() => {
    console.log('Submitting assessment with data:', {
      skillLevel,
      subLevel,
      score,
      totalQuestions,
      answers,
      name: userName,
      email: userEmail
    });
    submitAssessment({
      skillLevel,
      subLevel,
      score,
      totalQuestions,
      answers,  // Use the actual answers array
      name: userName,
      email: userEmail
    });
  }, []);

  const submitAssessment = async (assessmentData: {
    skillLevel: string;
    subLevel: string;
    score: number;
    totalQuestions: number;
    answers: string[];
    name: string;
    email: string;
  }) => {
    try {
      const response = await fetch('http://localhost:5001/api/assessment/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        credentials: 'include',
        body: JSON.stringify({
          userId: Date.now().toString(),
          name: assessmentData.name,
          email: assessmentData.email,
          skillLevel: assessmentData.skillLevel,
          subLevel: assessmentData.subLevel,
          score: assessmentData.score,
          totalQuestions: assessmentData.totalQuestions,
          answers: assessmentData.answers,
          completedAt: new Date().toISOString()
        })
      });
      
      const data = await response.json();
      if (data.success) {
        console.log('Assessment submitted successfully');
      } else {
        console.error('Failed to submit assessment:', data.message);
      }
    } catch (error) {
      console.error('Error submitting assessment:', error);
    }
  }

  return (
    <div className="score-container">
      <button 
        className="exit-button"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          backgroundColor: '#dc3545',
          color: 'white',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
        onClick={handleExit}
      >
        Exit
      </button>
      <h2 className="assessment-title">Assessment Complete!</h2>
      <p>Your Score: {score} out of {totalQuestions}</p>
      <button 
        className="take-test-again"
        onClick={onRetake}
      >
        Take Test Again
      </button>
    </div>
  );
};

export default AssessmentComplete;
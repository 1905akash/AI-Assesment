import { useState } from 'react';
// Remove this unused import
// import { QuestionPaper } from './QuestionPaper';
import { useNavigate } from 'react-router-dom';

const AssessmentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skill: ''
  });
  // Remove this line as it's no longer needed
  // const [showQuestions, setShowQuestions] = useState(false);

  const difficultyLevels = [
    {
      level: 'Beginner',
      description: 'Perfect for those just starting their journey in programming',
      subLevels: [
        { name: 'Easy', description: 'Basic concepts and fundamentals' },
        { name: 'Medium', description: 'Simple problem-solving tasks' },
        { name: 'Hard', description: 'Challenging beginner concepts' }
      ]
    },
    {
      level: 'Intermediate',
      description: 'For developers with some experience in coding',
      subLevels: [
        { name: 'Easy', description: 'Standard programming patterns' },
        { name: 'Medium', description: 'Complex problem-solving' },
        { name: 'Hard', description: 'Advanced programming concepts' }
      ]
    },
    {
      level: 'Advanced',
      description: 'Challenging questions for experienced developers',
      subLevels: [
        { name: 'Easy', description: 'Advanced concepts basics' },
        { name: 'Medium', description: 'System design and optimization' },
        { name: 'Hard', description: 'Expert-level challenges' }
      ]
    }
  ];

  const [selectedSubLevel, setSelectedSubLevel] = useState('');

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate('/assessment', { 
      state: { 
        skillLevel: formData.skill,
        subLevel: selectedSubLevel,
        userName: formData.name,    // Add this
        userEmail: formData.email   // Add this
      }
    });
  };

  const selectDifficulty = (level: string) => {
    setFormData(prev => ({
      ...prev,
      skill: level
    }));
    setSelectedSubLevel('');
  };

  const handleSubLevelSelect = (subLevel: string) => {
    setSelectedSubLevel(subLevel);
  };
  return (
    <div className="assessment-container">
      <header>
        <h1>AI-Driven Assessment</h1>
        <p>Test your skills with our adaptive assessment platform</p>
      </header>

      <form id="assessment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label>Select Difficulty Level</label>
          <div className="difficulty-cards">
            {difficultyLevels.map(({ level, description, subLevels }) => (
              <div 
                key={level}
                className={`difficulty-card ${formData.skill === level ? 'selected' : ''}`}
                onClick={() => selectDifficulty(level)}
              >
                <h3>{level}</h3>
                <p>{description}</p>
                {formData.skill === level && (
                  <div className="sub-levels">
                    {subLevels.map(sub => (
                      <div
                        key={sub.name}
                        className={`sub-level ${selectedSubLevel === sub.name ? 'selected' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSubLevelSelect(sub.name);
                        }}
                      >
                        <h4>{sub.name}</h4>
                        <p>{sub.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button 
          type="submit"
          disabled={!formData.name || !formData.email || !formData.skill || !selectedSubLevel}
        >
          Start Assessment
        </button>
      </form>

      <footer>
        <p>&copy; 2025 AI-Driven Assessments. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AssessmentForm;
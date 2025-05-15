
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuestionPaper } from './components/QuestionPaper';
import AssessmentForm from './components/AssessmentForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AssessmentForm />} />
          <Route path="/assessment" element={<QuestionPaper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
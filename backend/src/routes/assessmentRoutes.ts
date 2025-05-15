import express from 'express';
import { submitAssessment, getAssessmentHistory } from '../controllers/assessmentController';

const router = express.Router();

router.post('/submit', submitAssessment);
router.get('/history/:email', getAssessmentHistory);

export default router;
import { Request, Response } from 'express';
import { AssessmentResult, IAssessmentResult } from '../models/Assessment';

export const submitAssessment = async (req: Request, res: Response) => {
  try {
    const assessmentData: IAssessmentResult = req.body;
    const result = await AssessmentResult.create(assessmentData);
    res.status(201).json({
      success: true,
      message: 'Assessment submitted successfully',
      data: result
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error submitting assessment',
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    });
  }
};

export const getAssessmentHistory = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const history = await AssessmentResult.find({ email }).sort({ completedAt: -1 });
    res.status(200).json({
      success: true,
      data: history
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error fetching assessment history',
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    });
  }
};
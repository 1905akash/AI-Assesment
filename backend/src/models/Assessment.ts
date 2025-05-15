import mongoose, { Schema, Document } from 'mongoose';

interface IAssessmentResult extends Document {
  userId: string;
  name: string;
  email: string;
  skillLevel: string;
  subLevel: string;
  score: number;
  totalQuestions: number;
  completedAt: Date;
  answers: {
    questionId: number;
    selectedAnswer: string;
    isCorrect: boolean;
  }[];
}

const AssessmentResultSchema = new Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  skillLevel: { type: String, required: true },
  subLevel: { type: String, required: true },
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  completedAt: { type: Date, default: Date.now },
  answers: [{
    questionId: { type: Number, required: true },
    selectedAnswer: { type: String, required: true },
    isCorrect: { type: Boolean, required: true }
  }]
});

const AssessmentResult = mongoose.model<IAssessmentResult>('AssessmentResult', AssessmentResultSchema);

export { AssessmentResult, IAssessmentResult };
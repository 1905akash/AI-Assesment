import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import assessmentRoutes from './routes/assessmentRoutes';

const app = express();
const port = 5001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Assessment API is running');
});
app.use('/api/assessment', assessmentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import apartmentRoutes from './routes/apartmentRoutes';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all origins
app.use(helmet()); // Use Helmet for security best practices
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/apartments';
// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define Base API route
app.use('/api/apartments', apartmentRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unexpected error:', err.stack);
  res.status(500).json({ message: err.message || 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
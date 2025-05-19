import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './route/userControllerRoute.js';
import mail from './route/mailRoute.js';
import budget from './route/budgetRoute.js';


// Load environment variables first
dotenv.config();

const app = express();

// Enhanced CORS configuration
// app.use(cors({
//   origin: ['http://localhost:5173', 'https://construction-44rn.vercel.app'],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://construction-44rn.vercel.app',
    'https://construction-44rn-asa0jfqhq-md-gulfams-projects.vercel.app',
    'https://construction-2-e7tf.onrender.com',
    'https://mdrabbancontractor.in', // ✅ Add your custom domain here
    'https://www.mdrabbancontractor.in'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Handle preflight OPTIONS requests
// app.options('*', cors());


// Middleware
app.use(express.json());
// Root route for browser
app.get('/', (req, res) => {
  res.send('Welcome to the Construction Backend API');
});
app.use(cors()); // handles all preflight requests already


// Routes
app.use('/api/user', userRouter);
app.use('/api/contact',mail);
app.use('/api/budget',budget);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Start server
const PORT = process.env.PORT || 4000;
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Could not start server:", err.message);
    process.exit(1);
  }
};

startServer();
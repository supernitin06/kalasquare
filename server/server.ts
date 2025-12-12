import express from 'express';
import cors from 'cors';
import userRoutes from './modules/user/user.route.js'; // important: .js after compilation
import adminRoutes from './modules/admin/admin.route.js';
import songRoute from './modules/landing/song/song.route.js'
import cookieParser from "cookie-parser";
const app = express();

app.use(cookieParser());
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(
  cors({
    origin: '*', // allow all origins; replace with your frontend URL in production
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Allow cookies to be sent
  })
);

// Routes
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/landing', songRoute);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});

export default app;

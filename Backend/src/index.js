import express from 'express';
import 'dotenv/config';
import authRoutes from './routes/authRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import {connectDB} from './config/db.js';

connectDB();

const port = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

app.use('/course', courseRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
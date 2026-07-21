import express from 'express';
import 'dotenv/config';
import authRoutes from './routes/authRoutes.js';
import courseRoutes from './routes/courseRoutes.js';

const port = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

app.use('/courses', courseRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
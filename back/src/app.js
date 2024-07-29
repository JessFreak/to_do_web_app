import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import ideasRouter from './routes/ideas.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  res.send('Backend for extrums');
});

app.use('/ideas', ideasRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

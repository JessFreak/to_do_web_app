import express from 'express';
import dotenv from 'dotenv';
import ideasRouter from './routes/ideas.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

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

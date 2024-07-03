import express from 'express';
import { PrismaClient } from '@prisma/client';
import { IdeaDTO } from '../models/IdeaDTO.js';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', IdeaDTO, async (req, res) => {
  const { title, type, isCompleted } = req.body;
  try {
    const newIdea = await prisma.idea.create({
      data: {
        title,
        type,
        isCompleted,
      },
    });
    res.status(201).json(newIdea);
  } catch (error) {
    console.error('Error creating idea:', error);
    res.status(500).json({ error: 'Failed to create idea' });
  }
});

router.get('/', async (req, res) => {
  const { isCompleted } = req.query;
  const filter = {};

  if (isCompleted !== undefined) {
    filter.isCompleted = isCompleted === 'true';
  }

  try {
    const ideas = await prisma.idea.findMany({
      where: filter,
    });
    res.json(ideas);
  } catch (error) {
    console.error('Error fetching ideas:', error);
    res.status(400).json({ error: 'Bad request' });
  }
});

export default router;

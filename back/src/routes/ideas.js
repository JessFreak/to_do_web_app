import express from 'express';
import { PrismaClient } from '@prisma/client';
import { IdeasDTO } from '../models/IdeaDTO.js';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', IdeasDTO, async (req, res) => {
  const ideas = req.body;

  try {
    const createdIdeas = await prisma.idea.createMany({
      data: ideas,
    });
    res.status(201).json(createdIdeas);
  } catch (error) {
    console.error('Error creating ideas:', error);
    res.status(500).json({ error: 'Failed to create ideas' });
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

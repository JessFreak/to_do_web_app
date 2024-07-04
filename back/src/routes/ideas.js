import express from 'express';
import { PrismaClient } from '@prisma/client';
import { IdeasDTO } from '../models/IdeasDTO.js';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', IdeasDTO, async (req, res) => {
  const ideas = req.body;

  try {
    const resultPromise = ideas.map(idea =>
      prisma.idea.upsert({
        where: { id: idea.id || 0 },
        update: {
          when: idea.when,
          isCompleted: idea.isCompleted,
        },
        create: {
          title: idea.title,
          type: idea.type,
        },
      })
    );

    const result = await Promise.all(resultPromise);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error processing ideas:', error);
    res.status(500).json({ error: 'Failed to process ideas' });
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

import express from 'express';
import { PrismaClient } from '@prisma/client';
import { IdeasDTO } from '../models/IdeasDTO.js';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', IdeasDTO, async (req, res) => {
  const ideas = req.body;
  const ideasToCreate = ideas.filter(idea => !idea.id);
  const ideasToUpdate = ideas.filter(idea => idea.id);

  try {
    const createdIdeas = await prisma.idea.createMany({
      data: ideasToCreate,
    });

    const updatedIdeasPromises = ideasToUpdate.map(idea =>
      prisma.idea.update({
        where: { id: idea.id },
        data: {
          title: idea.title,
          type: idea.type,
          isCompleted: idea.isCompleted,
          when: idea.when,
        },
      })
    );

    const updatedIdeas = await Promise.all(updatedIdeasPromises);

    res.status(201).json({
      createdIdeas: createdIdeas.count,
      updatedIdeas: updatedIdeas.length,
    });
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

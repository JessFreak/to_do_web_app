import { body, validationResult } from 'express-validator';

export const IdeasDTO = [
  body().isArray(),
  body('*.title').isString().notEmpty(),
  body('*.type').isString().notEmpty(),
  body('*.isCompleted').isBoolean().optional(),
  body('*.when').isISO8601().optional({ nullable: true }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
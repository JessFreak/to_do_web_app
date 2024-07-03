import { body, validationResult } from 'express-validator';

export const IdeasDTO = [
  body().isArray(),
  body('*.title').isString().notEmpty(),
  body('*.type').isString().optional(),
  body('*.isCompleted').isBoolean().optional(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
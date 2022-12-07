// Types Express
import { Request, Response } from 'express';

// Model
import { Category } from '../../app/models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const category = await Category.create({ name });

    res.status(201).json(category);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

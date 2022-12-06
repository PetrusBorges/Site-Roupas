// PathNode
import path from 'node:path';

// express
import express from 'express';

// mongoose
import mongoose from 'mongoose';

// routes
import { router } from './router';

// cors
import { cors } from './app/middlewares/cors';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(cors);
    app.use(router);

    app.listen(3001, () => console.log('✨ Connected at http://localhost:3001'));
  })
  .catch(() => console.log('Failed to connect'));

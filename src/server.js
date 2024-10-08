import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import logger from './middlewares/logger.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { env } from './utils/env.js';
import cookieParser from 'cookie-parser';
import { UPLOAD_DIR } from './constans/index.js';

const PORT = Number(env('PORT', '4000'));

export const setupServer = () => {
  const app = express();

  app.use(logger);
  app.use(cors());
  app.use('/uploads', express.static(UPLOAD_DIR));
  app.use(cookieParser());
  app.use(
    express.json({
      type: ['application/json', 'application/vnd.api+json'],
      limit: '100kb',
    }),
  );

  app.use(router);

  app.use('*', notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

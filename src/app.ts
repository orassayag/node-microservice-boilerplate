import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import useragent from 'express-useragent';
import log from './logger';
import redisClient from './redis/connect';
import dogsRoutes from './modules/dog/routes/dogs-routes';
import commonRoutes from './modules/common/routes/common-routes';
import errorHandler from './middlewares/error-handling-middleware';
import { healthCheck } from './modules/common/controllers/health-check-controller';
import ENV from '../config/env';

setInterval((): void => {
  void healthCheck();
}, 1000 * 5);

const corsOptions = {
  credentials: true,
  origin: true,
};

dotenv.config();

const app: Express = express();

const { port, host } = ENV.server;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));
// Request logger here.
app.use(useragent.express());
// Other calculations middlewares here.
app.use('/', commonRoutes);
app.use('/', dogsRoutes);
app.use(errorHandler); // Always finish middleware.

app.listen(port, () => {
  log.info(`[server]: Server is running at https://${host}:${+port}`);
  void redisClient.connect();
});

export default app;

import { Request, Response, NextFunction, Router } from 'express';
import { healthCheck } from '../controllers/health-check-controller';

const router = Router();

router.get(
  '/healthcheck',
  (req: Request, res: Response, next: NextFunction) => {
    try {
      void healthCheck();
      return res.sendStatus(200);
    } catch (error: Error | any) {
      return next(error);
    }
  }
);

export default router;

import { Request, Response, NextFunction, Router } from 'express';
import { getDogs, setDog } from '../controllers/dogs-controller';
import log from '../../../logger';

const router = Router();

router.get('/getDogs', (req: Request, res: Response, next: NextFunction) => {
  try {
    void getDogs(req, res, next);
  } catch (error: Error | any) {
    log.error(error);
    next(error);
  }
});
router.get('/setDog', (req: Request, res: Response, next: NextFunction) => {
  try {
    void setDog(req, res, next);
  } catch (error: Error | any) {
    log.error(error);
    next(error);
  }
});

export default router;

import { NextFunction, Request, Response } from 'express';
declare const getDogs: (req: Request, res: Response, _next: NextFunction) => Promise<Response>;
declare const setDog: (req: Request, res: Response, _next: NextFunction) => Promise<Response>;
export { getDogs, setDog };

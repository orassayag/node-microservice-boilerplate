import { NextFunction, Request, Response } from 'express';
import CustomError from '../error/custom-error';
export default function (err: Error | CustomError, req: Request, res: Response, _next: NextFunction): Response;

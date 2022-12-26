import { NextFunction, Request, Response } from 'express';
import log from '../logger/index';
import CustomError from '../error/custom-error';

export default function (
  err: Error | CustomError,
  req: Request,
  res: Response,
  _next: NextFunction
): Response {
  log.error(
    `URL-${req.url} | METHOD-${req.method} | BODY-${JSON.stringify(
      req.body
    )} | QUERY-${JSON.stringify(req.query)} | ERR MESSAGE-${err.message}`
  );
  log.error(err.stack);
  return res
    .status(err instanceof CustomError ? err?.status : 500)
    .json(err.message ?? 'Unexpecting Error');
}

import { NextFunction, Request, Response } from 'express';
import redisClient from '../../../redis/connect';
import ENV from '../../../../config/env';

const expirationTime: number | string = ENV.redis.expiration;

const getDogs = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<Response> => {
  const data = {
    dogs: {},
  };
  const { hash } = req;
  // Get all collected dogs by hash, using HGETALL
  data.dogs = await redisClient.hGetAll(hash);
  return res.json(data);
};

const setDog = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<Response> => {
  const dog: string = req.query?.dog as string;
  const dogId: string = req.query?.dogId as string;
  const { hash } = req;
  // Set dogs Ids by hash, using HSET.
  await redisClient.hSet(hash, dog, dogId);
  await redisClient.expire(hash, +expirationTime);
  return res.end();
};

export { getDogs, setDog };

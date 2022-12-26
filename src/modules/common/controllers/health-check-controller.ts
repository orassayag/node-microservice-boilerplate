import redisClient from '../../../redis/connect';
import log from '../../../logger';

const healthCheckKey = 'healthCheck';

const healthCheck = async (): Promise<any> => {
  log.warn('Redis healthCheck start');
  try {
    await redisClient.hSet(healthCheckKey, healthCheckKey, healthCheckKey);
    const res = await redisClient.hDel(healthCheckKey, healthCheckKey);
    log.warn(
      `Redis healthCheck end ${res !== 0 ? 'successfully' : 'with error'}`
    );
  } catch (error: any | unknown) {
    log.error('Redis healthCheck end with Error');
  }
};

export { healthCheck };

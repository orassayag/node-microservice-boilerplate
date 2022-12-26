// eslint-disable-next-line import/extensions
import configJson from './env.json';

interface Config {
  server: {
    port: number | string;
    host: string;
  };
  redis: {
    port: number | string;
    host: string;
    expiration: number | string;
  };
}

const config: Config = {
  server: {
    port: process.env.PORT ?? configJson.server.port,
    host: process.env.HOST ?? configJson.server.host,
  },
  redis: {
    host: process.env.REDIS_HOST ?? configJson.redis.host,
    port: process.env.REDIS_PORT ?? configJson.redis.port,
    expiration: process.env.REDIS_EXPIRATION ?? configJson.redis.expiration,
  },
};

export default config;

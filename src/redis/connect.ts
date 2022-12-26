import { createClient } from 'redis';
import log from '../logger';
import ENV from '../../config/env';

const { port, host } = ENV.redis;

const client = createClient({
  socket: {
    host,
    port: +port,
    connectTimeout: 3000,
    reconnectStrategy: (_retryAttempt: number): number | Error => 3000,
  },
})
  .on('connect', () => {
    log.info(`Redis: Client has connected to: ${host} on port: ${port}`);
  })
  .on('ready', () => {
    log.info('Redis: Server is ready to receive commands');
  })
  .on('error', (err: Error) => {
    log.error('Redis Client Error', err);
  })
  .on('close', () => {
    log.info(
      'Redis: Server connection has closed (Called if connection was refused too)'
    );
  })
  .on('reconnecting', () => {
    log.info('Redis: Client reconnecting');
  })
  .on('disconnect', () => {
    log.info('Redis: Client has disconnect');
  })
  .on('quit', () => {
    log.info('Redis: Client has quit');
  })
  .on('end', () => {
    log.info('Redis: Client has terminated');
  });

export default client;

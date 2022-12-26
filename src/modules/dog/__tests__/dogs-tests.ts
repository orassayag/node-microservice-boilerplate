import supertest from 'supertest';
import crypto from 'crypto';
import conf from '../../../../config/env';
import redisClient from '../../../redis/connect';

interface Mock {
  dog: string;
  dogId: string;
  userAgent: string;
  ip: string;
  hash: string;
}

const API = supertest(`${conf.server.host}:${conf.server.port}`);

const mock: Mock = {
  dog: 'testDog',
  dogId: 'testDogId',
  userAgent:
    'Mozilla/5.0 (X11; U; Linux armv7l like Android; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/533.2+ Kindle/3.0+',
  ip: '127.0.0.1',
  hash: '',
};
mock.hash = crypto
  .createHash('md5')
  .update(mock.ip + mock.userAgent)
  .digest('hex');

beforeAll(async () => {});

describe('Dog test', () => {
  it('Set Dog - should return 200', async () => {
    const res = await API.get(`/setdog?dog=${mock.dog}&dogId=${mock.dogId}`)
      .set('User-Agent', mock.userAgent)
      .set('X-Forwarded-For', mock.ip);
    expect(res.status).toEqual(200);
  });

  it('Get Dogs - should return 200 and Dogs', async () => {
    const res = await API.get('/getdogs')
      .set('User-Agent', mock.userAgent)
      .set('X-Forwarded-For', mock.ip);
    expect(res.status).toEqual(200);
    expect(res.body.dogs[mock.dog]).toEqual(mock.dogId);
  });
});

afterAll(async () => {
  await redisClient.connect();
  await redisClient.hDel(mock.hash, mock.dog);
  await redisClient.quit();
});

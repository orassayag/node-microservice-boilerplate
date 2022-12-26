import supertest from 'supertest';
import conf from '../../../../config/env';

const API = supertest(`${conf.server.host}:${conf.server.port}`);

describe('Common tests', () => {
  it('Health check - should return 200', async () => {
    const res = await API.get('/healthcheck');
    expect(res.status).toEqual(200);
  });
});

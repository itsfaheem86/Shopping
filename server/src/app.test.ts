import request from 'supertest';
import app from './app';

describe('GET /', () => {
  it('should response with 200 and env type', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({env: 'test'});
  });
});

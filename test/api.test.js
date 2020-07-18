const assert = require('assert');
const request = require('supertest');
const { server } = require('../src/server');

describe('Testing basic endpoints', () => {
  it('should test echo endpoint', async () => {
    const res = await request(server)
      .get('/echo')
      .send();
    assert.equal(res.status, 200);
    assert.equal(res.text, '');
  });
  it('should test /', async () => {
    const res = await request(server)
      .get('/')
      .send();
    assert.equal(res.status, 404);
    assert.equal(res.text.match(/Cannot GET \//).length, 1);
  });
  after(async () => {
    server.close();
  });
});

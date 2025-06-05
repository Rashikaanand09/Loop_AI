const request = require('supertest');
const app = require('./app');

describe('Ingestion API', () => {
  it('should create an ingestion and return an ingestion_id', async () => {
    const res = await request(app)
      .post('/ingest')
      .send({ ids: [1,2,3], priority: 'HIGH' });
    expect(res.body).toHaveProperty('ingestion_id');
  });

  // Add more tests for batching, priority, status, rate limiting...
});

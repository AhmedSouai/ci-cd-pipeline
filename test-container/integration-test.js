// integration-test.js
const request = require('supertest');
const { expect } = require('chai'); // Ajout de Chai pour les assertions

describe('Backend Integration Tests', () => {
  it('GET /api/users should return user list', async () => {
    const res = await request('http://backend:3000').get('/api/users');

    // Remplacement des assertions Jest par celles de Chai
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body[0]).to.have.property('id');
    expect(res.body[0]).to.have.property('name');
  });
});

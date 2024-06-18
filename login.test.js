// login test 
const request = require('supertest');
const app = require('./app');

describe('POST /login', () => {
    it('répond avec 200 OK et un token valide pour des informations d\'identification correctes', async () => {
        const response = await request(app)
            .post('/login')
            .send({ username: 'user', password: 'pass' });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token', 'xyz');
    });

    it('répond avec 401 Unauthorized pour des informations d\'identification incorrectes', async () => {
        const response = await request(app)
            .post('/login')
            .send({ username: 'user', password: 'wrongpass' });
        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('error', 'Unauthorized');
    });

    it('répond avec 400 Bad Request pour des payloads malformés', async () => {
        const response = await request(app)
            .post('/login')
            .send({ username: 'user' }); 
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error', 'Bad Request');
    });
});

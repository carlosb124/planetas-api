const request = require('supertest');
const app = require('../app');
describe('Validación API', () => {
    test('Debe haber 4 planetas y Marte debe ser Rocoso', async () => {
        const res = await request(app).get('/planetas');
        expect(res.body.length).toBe(4);
        const marte = res.body.find(p => p.nombre === 'Marte');
        expect(marte.tipo).toBe('Rocoso');
    });
});


import app from '../app';
import supertest from 'supertest';

const request = supertest(app);

describe('#Get /direction', () => {

    it('should return json object with direction', async () => {
        let url = '/direction?heading=310&target=75';
        let response = await request.get(url);
        expect(JSON.stringify(response.body)).toEqual(JSON.stringify({ direction: 'right' }));
    });

    it('should return json object with error message', async () => {
        let url = '/direction?heading=xyz&target=75';
        let response = await request.get(url);
        expect(response.body.status).toEqual('Error');
    });

});
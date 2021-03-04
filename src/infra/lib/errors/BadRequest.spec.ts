import BadRequest from './BadRequest';

describe('#BadRequest', () => {
    let badRequestError = new BadRequest('input is missing');
    it('should be instance of BadRequest', () => {
        expect(badRequestError instanceof Error).toEqual(true);
        expect(badRequestError.name).toEqual('BadRequest');
    });

    it('should return 400', () => {
        expect(badRequestError.statusCode).toEqual(400);
    });
})
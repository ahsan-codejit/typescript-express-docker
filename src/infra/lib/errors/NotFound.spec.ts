import NotFound from './NotFound';

describe('#NotFound', () => {
    let notFoundError = new NotFound('input is missing');

    it('should be instance of NotFound', () => {
        expect(notFoundError instanceof Error).toEqual(true);
        expect(notFoundError.name).toEqual('NotFound');
    });

    it('should return 400', () => {
        expect(notFoundError.statusCode).toEqual(404);
    })
})
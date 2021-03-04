
import GetDirection from './GetDirection';
describe('#GetDirectionController', () => {
    let getDirectionController = new GetDirection();

    it('should have method findDirection', () => {
        expect(typeof getDirectionController.findDirection).toEqual('function');
    });
});
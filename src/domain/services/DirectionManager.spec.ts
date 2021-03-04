import DirectionManager from './DirectionManager';
import { Directions as DirectionsEnum } from '../types/enum';

describe(`#Directiion Manager`, () => {
    let heading = 310, target = 75;
    let clockWiseAngle = 125;
    let antyClockWiseAngle = 235;
    let directionManager = new DirectionManager(heading, target);
    it('should be an object of DirectionManger', () => {
        expect(directionManager instanceof DirectionManager).toEqual(true);
        expect(directionManager.heading).toEqual(heading);
        expect(directionManager.target).toEqual(target);
    });

    it(`getDirection should return direction "left" for 310 and 75`, () => {
        let direction: DirectionsEnum = directionManager.getDirection();
        expect(direction).toEqual(DirectionsEnum.Right);
    });

    it('getDirection should return direction "left" for 90, 300', () => {
        let directionManager = new DirectionManager(90, 300);
        let direction: DirectionsEnum = directionManager.getDirection();
        expect(direction).toEqual(DirectionsEnum.Left);
    });

    it('getDirection should return direction "straight"', () => {
        let directionManager = new DirectionManager(90, 90);
        let direction: DirectionsEnum = directionManager.getDirection();
        expect(direction).toEqual(DirectionsEnum.Forward);
    });

    it('getDirection should return direction "left"', () => {
        let directionManager = new DirectionManager(0, 359);
        let direction: DirectionsEnum = directionManager.getDirection();
        expect(direction).toEqual(DirectionsEnum.Left);
    });

});

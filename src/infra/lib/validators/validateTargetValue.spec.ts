import validateTargetValue from "./validateTargetValue";

describe('#validatTargetValue', () => {
    it('should return true', () => {
        expect(validateTargetValue('310')).toEqual(true);
        expect(validateTargetValue('0')).toEqual(true);
    });

});
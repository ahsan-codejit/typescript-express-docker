import BadRequest from "../errors/BadRequest";
import validateHeadingValue from "./validateHeadingValue";

describe('#validateHeadingValue', () => {
    it('should return true', () => {
        expect(validateHeadingValue('310')).toEqual(true);
        expect(validateHeadingValue('0')).toEqual(true);
    });
});
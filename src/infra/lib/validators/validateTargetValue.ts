import BadRequest from "../errors/BadRequest";

/**
 * it's better to have validation logics in ValueObject
 * as it's very simple I kept it here
 * later we can move these validation logic to ValueObject so that we
 * can validate when valueobject is created.
 */
export default (target: string) => {
    if (!target) throw new BadRequest('target is required');
    let targetValue: number = Number(target);
    if (isNaN(targetValue) ||
        !isTargetInCorrectRange(targetValue)) throw new BadRequest('target is invalid')

    return true;
}

let isTargetInCorrectRange = (target: number): boolean => {
    return target >= 0 && target < 360;
}
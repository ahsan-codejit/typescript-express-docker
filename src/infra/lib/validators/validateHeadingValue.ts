import BadRequest from "../errors/BadRequest";

export default (heading: string) => {
    if (!heading) throw new BadRequest('heading is required');
    let headingValue: number = Number(heading);
    if (isNaN(headingValue) ||
        !isHeadingInCorrectRange(headingValue)) throw new BadRequest('heading is invalid');
    return true;
}

let isHeadingInCorrectRange = (heading: number): boolean => {
    return heading >= 0 && heading < 360;
}
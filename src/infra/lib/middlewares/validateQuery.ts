import { NextFunction, Request, Response } from "express";
import validateHeadingValue from "../validators/validateHeadingValue";
import validateTargetValue from "../validators/validateTargetValue";

export default (req: Request, res: Response, next: NextFunction) => {
    let query: any = req.query;
    validateHeadingValue(query.heading);
    validateTargetValue(query.target)
    next();
}
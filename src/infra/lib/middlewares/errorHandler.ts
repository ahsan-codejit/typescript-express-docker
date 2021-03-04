import { NextFunction, Request, Response } from "express";

export default (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
        status: 'Error',
        message: err.message
    });
}
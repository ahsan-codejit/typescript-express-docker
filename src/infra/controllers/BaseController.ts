import { Response } from "express";
/**
 * I can imporve this abstract to make controllers look better and readable
 */
export default abstract class BaseController {
    protected success(res: Response, data: any) {
        return res.status(200).json(data);
    }

    protected fail404(res: Response, message: string) {
        return res.status(404).json({ message });
    }

    protected fail500(res: Response, error: Error) {
        return res.status(500).json({ message: error.toString() });
    }
}
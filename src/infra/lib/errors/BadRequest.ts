export default class BadRequest extends Error {
    public statusCode: number;
    constructor(message: any) {
        super(message);
        this.name = 'BadRequest';
        this.statusCode = 400;
    }
}

export default class NotFound extends Error {
    public statusCode: number;
    constructor(message: any) {
        super(message);
        this.name = 'NotFound';
        this.statusCode = 404;
    }
}
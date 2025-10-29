export class HttpException extends Error {
    constructor(public status: number, message: string) {
        super(message);
    }

    toResponse() {
        return Response.json({
            status: this.status,
            message: this.message
        }, {
            status: this.status
        })
    }
}
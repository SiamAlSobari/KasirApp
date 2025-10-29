export class ApiResponse<T> {
    constructor(
        public status: number,
        public message: string,
        public data: T
    ){}

    toResponse(){
        return Response.json({
            status: this.status,
            message: this.message,
            data: this.data
        }, {
            status: this.status
        })
    }
}
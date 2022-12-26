declare class ApiError extends Error {
    status: number;
    constructor(status: number, message: string);
    static badRequest(message: string): ApiError;
    static internal(message: string): ApiError;
    static forbidden(message: string): ApiError;
}
export default ApiError;

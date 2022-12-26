declare class CustomError extends Error {
    status: number;
    message: string;
    constructor({ message, status }: {
        message?: string | undefined;
        status?: number | undefined;
    });
}
export default CustomError;

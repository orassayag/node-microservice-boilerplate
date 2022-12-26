class CustomError extends Error {
  status: number;

  message: string;

  constructor({ message = 'Error Occurred', status = 400 }) {
    super(message);
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default CustomError;

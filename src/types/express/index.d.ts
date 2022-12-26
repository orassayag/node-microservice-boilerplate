export {};

declare global {
  namespace Express {
    export interface Request {
      hash: string;
      useragent?: UserAgent;
    }
  }
}

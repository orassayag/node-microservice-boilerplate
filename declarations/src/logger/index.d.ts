declare const log: import('pino').Logger<{
    transport: {
        target: string;
        options: {
            colorize: boolean;
        };
    };
}>;
export default log;

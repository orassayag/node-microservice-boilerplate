interface Config {
    server: {
        port: number | string;
        host: string;
    };
    redis: {
        port: number | string;
        host: string;
        expiration: number | string;
    };
}
declare const config: Config;
export default config;

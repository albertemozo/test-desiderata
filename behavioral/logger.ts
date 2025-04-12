export interface Logger {
    log(message: string): void;
}

export class SlowLogger implements Logger {
    log(message: string): void {
        const waitTill = new Date(new Date().getTime() + 10000);
        while (waitTill > new Date()) { }
    }
}

export class FastLogger implements Logger {
    log(message: string): void {}
}
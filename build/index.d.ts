declare class AbortableFetch {
    private ctrl;
    private _native;
    constructor(uri: Request | string, options?: RequestInit);
    then<T>(fn: (res: Response) => any): AbortableFetch;
    catch(fn: (err: Error) => any): AbortableFetch;
    finally(fn: () => void): AbortableFetch;
    abort(): void;
}
export default function abortableFetch(uri: Request | string, options?: RequestInit): AbortableFetch;
export {};

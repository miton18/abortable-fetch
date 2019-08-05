
class AbortableFetch {

    private ctrl: AbortController
    private _native: Promise<Response>

    constructor(uri: Request | string, options?: RequestInit) {
        this.ctrl = new AbortController()

        this._native = window.fetch(uri, {
            ...options || {},
            signal: this.ctrl.signal
        })
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    then<T>(fn: (res: Response) => any): AbortableFetch {
        this._native = this._native.then(fn)
        return this
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    catch(fn: (err: Error) => any): AbortableFetch {
        this._native = this._native.catch((err): any => {
            if (err.name !== 'AbortError') {
                return fn(err)
            }
        })
        return this
    }

    finally(fn: () => void): AbortableFetch {
        this._native = this._native.finally(fn)
        return this
    }

    abort(): void {
        this.ctrl.abort()
    }
}

export default function abortableFetch(uri: Request | string, options?: RequestInit): AbortableFetch {
    return new AbortableFetch(uri, options)
}
class AbortableFetch {
    constructor(uri, options) {
        this.ctrl = new AbortController();
        this._native = window.fetch(uri, Object.assign({}, options || {}, { signal: this.ctrl.signal }));
    }
    then(fn) {
        this._native = this._native.then(fn);
        return this;
    }
    catch(fn) {
        this._native = this._native.catch((err) => {
            if (err.name !== 'AbortError') {
                return fn(err);
            }
        });
        return this;
    }
    finally(fn) {
        this._native = this._native.finally(fn);
        return this;
    }
    abort() {
        this.ctrl.abort();
    }
}
export default function abortableFetch(uri, options) {
    return new AbortableFetch(uri, options);
}
//# sourceMappingURL=index.js.map
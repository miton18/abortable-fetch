import fetch from './index'

const req = fetch('https://google.fr', {})
    .then(res => {
        if (res.ok) {
            throw new Error(`invalid response: ${res.statusText}`)
        }
        return res.json()
    })
    .then(o => console.log('json', o))
    .catch(err => console.error(err))
    .finally(() => console.info('END'))

req.abort()
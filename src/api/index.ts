interface CreateRequestOptions {
    method: string
    path: string
    payload?: any
}

const url = 'http://localhost:3000/'

const makeRequest = (options: CreateRequestOptions) => {
    return fetch(url + options.path, {
        method: options.method,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: options.payload ? JSON.stringify(options.payload) : undefined,
    })
        .then(async response => {
            if (response.ok) {
                return response.json();
            }
            
            throw await response.json();
        })
}

interface Api {
    login: (payload: {username: string, password: string}) => Promise<{}>
}

const api: Api = {
    login(payload) {
        return makeRequest({
            method: 'POST',
            payload: payload,
            path: 'login',
        })
    }
}

export { api };

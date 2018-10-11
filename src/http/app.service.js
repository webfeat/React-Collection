
import 'whatwg-fetch'
import 'es6-promise'

const HttpParams = (data) => {
    let urls = [];
    for (let e in data) {
        let options = [];
        options.push(e, data[e]);
        urls.push(options.join('='));
    }
    return urls.join('&');
}

const get = (url, data) => {
    let result = fetch(url + HttpParams(data), {
        credentails: 'include',
        mode: "cors",
        Headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    return result;
}

const post = (url, data) => {
    let result = fetch(url, {
        method: 'post',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: HttpParams(data)
    });
    return result;
}

const http = {
    get: get,
    post:post
}

export default http;
import http from './http';
import apis from './api';

console.log('apis', apis);

export function login(params = {}) {
    return http.get(apis.login, params);
}
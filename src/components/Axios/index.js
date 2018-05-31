import http from './http';
import apis from './api';

export function login(params = {}) {
    return http.get(apis.login, params);
}
import request from "superagent-bluebird-promise";

import config from "../../config";

export function loadUsers() {
    console.log("loadUsers()");
    return request
        .get(`${config.server}/rest/v3/users`)
        .auth(config.username, config.password)
        .then(res => res.body.data);
}

export function loadUser(id) {
    console.log(`loadUser(${id})`);
    return request
        .get(`${config.server}/rest/v3/users/${id}`)
        .auth(config.username, config.password)
        .then(res => res.body);
}

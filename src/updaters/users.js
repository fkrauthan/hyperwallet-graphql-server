import request from "superagent-bluebird-promise";

import config from "../../config";

export default function updateUser(id, data) {
    console.log(`updateUser(${id})`, data);
    return request
        .put(`${config.server}/rest/v3/users/${id}`)
        .auth(config.username, config.password)
        .send(data)
        .then(res => res.body);
}

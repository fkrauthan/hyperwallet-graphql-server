import request from "superagent-bluebird-promise";

import config from "../../config";

export default function updateBankAccount(id, userId, data) {
    console.log(`updateBankAccount(${id}, ${userId})`, data);
    return request
        .put(`${config.server}/rest/v3/users/${userId}/bank-accounts/${id}`)
        .auth(config.username, config.password)
        .send(data)
        .then(res => res.body);
}

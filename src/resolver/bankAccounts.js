import request from "superagent-bluebird-promise";

import config from "../../config";

export function loadBankAccounts(userId) {
    console.log(`loadBankAccounts(${userId})`);
    return request
        .get(`${config.server}/rest/v3/users/${userId}/bank-accounts`)
        .auth(config.username, config.password)
        .then(res => (res.body.data || []).map(body => ({ ...body, userId })));
}

export function loadBankAccount(userId, id) {
    console.log(`loadBankAccount(${userId}, ${id})`);
    return request
        .get(`${config.server}/rest/v3/users/${userId}/bank-accounts/${id}`)
        .auth(config.username, config.password)
        .then(res => ({ ...res.body, userId }));
}

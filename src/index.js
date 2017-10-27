const fetch = require('node-fetch');

const Accounts = require('./accounts');

const baseUrl = 'https://www.workable.com/spi/v3/accounts';

class Client {
  constructor(accessToken) {
    this.accessToken = accessToken;
  }
  async fetch({ endpoint, url, body, method = 'GET', headers = {} }) {
    const fetchedUrl = endpoint ? `${baseUrl}${endpoint}` : url;
    return fetch(fetchedUrl, {
      method,
      headers: Object.assign({ Authorization: `Bearer ${this.accessToken}` }, headers),
      body: body && JSON.stringify(body),
    }).then(response => response.json());
  }
  get({ endpoint, url }) {
    return this.fetch({ endpoint, url });
  }
  post({ endpoint, url, body }) {
    return this.fetch({
      endpoint,
      url,
      body,
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
  }
  accounts(subdomain) {
    return new Accounts({ client: this, subdomain });
  }
}

module.exports = Client;

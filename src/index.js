import fetch from 'node-fetch';
import Accounts from './Accounts';

const Workable = {
  client(accessToken) {
    return Object.assign(Object.create(this), { accessToken });
  },
  async fetch({ endpoint, url, body, method, headers = {} }) {
    const fetchedUrl = endpoint ? `${this.baseUrl}${endpoint}` : url;
    return fetch(fetchedUrl, {
      method,
      headers: Object.assign({ Authorization: `Bearer ${this.accessToken}` }, headers),
      body: body && JSON.stringify(body),
    }).then(response => response.json());
  },
  get({ endpoint, url }) {
    return this.fetch({ endpoint, url, method: 'GET' });
  },
  post({ endpoint, url, body }) {
    return this.fetch({
      endpoint,
      url,
      body,
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
  },
  accounts(subdomain) {
    return Accounts.new({ client: this, subdomain });
  },
  //
  baseUrl: 'https://www.workable.com/spi/v3/accounts',
};

export default Workable;

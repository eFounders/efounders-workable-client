import fetch from 'node-fetch';
import Accounts from './Accounts';

const Workable = {
  client(accessToken) {
    return Object.assign(Object.create(this), { accessToken });
  },
  async fetch({ endpoint, url, body, method, headers = {} }) {
    try {
      const fetchedUrl = endpoint ? `${this.baseUrl}${endpoint}` : url;
      const response = await fetch(fetchedUrl, {
        method,
        headers: Object.assign({ Authorization: `Bearer ${this.accessToken}` }, headers),
        body: body && JSON.stringify(body),
      });
      return response.json();
    } catch (exception) {
      console.error('Workable.fetch', exception);
      throw exception;
    }
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

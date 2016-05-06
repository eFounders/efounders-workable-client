import Accounts from './Accounts';

/* Workable API

workable.accounts().list()
workable.accounts(subdomain).info()
workable.accounts(subdomain).members().list()
workable.accounts(subdomain).recruiters().list()
workable.accounts(subdomain).stages().list()
workable.accounts(subdomain).jobs().list()
workable.accounts(subdomain).jobs().listAll()
workable.accounts(subdomain).jobs(shortcode).info()
workable.accounts(subdomain).jobs(shortcode).questions().list()
workable.accounts(subdomain).jobs(shortcode).members().list()
workable.accounts(subdomain).jobs(shortcode).recruiters().list()
workable.accounts(subdomain).jobs(shortcode).candidates().list()
workable.accounts(subdomain).jobs(shortcode).candidates().listAll()
workable.accounts(subdomain).jobs(shortcode).candidates(id).info()
workable.accounts(subdomain).jobs(shortcode).candidates().create()

*/

const Workable = {
  new(accessToken) {
    return Object.assign(Object.create(this), { accessToken });
  },
  async fetch({ endpoint, url, body, headers = {}, method }) {
    try {
      const fetchedUrl = endpoint ? `${this.baseUrl}${endpoint}` : url;
      const response = await fetch(fetchedUrl, {
        method,
        headers: Object.assign({
          Authorization: `Bearer ${this.accessToken}`,
        }, headers),
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
    return Accounts.new(subdomain, this);
  },
  //
  baseUrl: 'https://www.workable.com/spi/v3/accounts',
};

export default Workable;

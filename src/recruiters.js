class Recruiters {
  constructor({ client, subdomain }) {
    this.client = client;
    this.subdomain = subdomain;
  }
  list() {
    const { client, subdomain, shortcode } = this;
    const job = shortcode ? `/jobs/${shortcode}` : '';
    const endpoint = `/${subdomain}${job}/recruiters`;
    return client.get({ endpoint });
  }
}

module.exports = Recruiters;

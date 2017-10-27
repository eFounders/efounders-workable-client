class Members {
  constructor({ client, subdomain, shortcode }) {
    this.client = client;
    this.subdomain = subdomain;
    this.shortcode = shortcode;
  }
  list() {
    const { client, subdomain, shortcode } = this;
    const job = shortcode ? `/jobs/${shortcode}` : '';
    const endpoint = `/${subdomain}${job}/members`;
    return client.get({ endpoint });
  }
}

module.exports = Members;

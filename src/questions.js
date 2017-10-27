class Questions {
  constructor({ client, subdomain, shortcode }) {
    this.client = client;
    this.subdomain = subdomain;
    this.shortcode = shortcode;
  }
  list() {
    const { client, subdomain, shortcode } = this;
    const endpoint = `/${subdomain}/jobs/${shortcode}/questions`;
    return client.get({ endpoint });
  }
}

module.exports = Questions;

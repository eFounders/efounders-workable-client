class ApplicationForm {
  constructor({ client, subdomain, shortcode }) {
    this.client = client;
    this.subdomain = subdomain;
    this.shortcode = shortcode;
  }
  info() {
    const { client, subdomain, shortcode } = this;
    const endpoint = `/${subdomain}/jobs/${shortcode}/application_form`;
    return client.get({ endpoint });
  }
}

module.exports = ApplicationForm;

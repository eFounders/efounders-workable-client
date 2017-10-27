class Stages {
  constructor({ client, subdomain }) {
    this.client = client;
    this.subdomain = subdomain;
  }
  list() {
    const { client, subdomain } = this;
    const endpoint = `/${subdomain}/stages`;
    return client.get({ endpoint });
  }
}

module.exports = Stages;

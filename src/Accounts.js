const Members = require('./members');
const Recruiters = require('./recruiters');
const Stages = require('./stages');
const Jobs = require('./jobs');

class Accounts {
  constructor({ client, subdomain }) {
    this.client = client;
    this.subdomain = subdomain;
  }
  // endpoint exists but not listed in the official docs
  /* info() {
    const { client, subdomain } = this;
    const endpoint = `/${subdomain}`;
    return client.get({ endpoint });
  }, */
  list() {
    const { client } = this;
    const endpoint = '/';
    return client.get({ endpoint });
  }
  members() {
    const { client, subdomain } = this;
    return new Members({ client, subdomain });
  }
  recruiters() {
    const { client, subdomain } = this;
    return new Recruiters({ client, subdomain });
  }
  stages() {
    const { client, subdomain } = this;
    return new Stages({ client, subdomain });
  }
  jobs(shortcode) {
    const { client, subdomain } = this;
    return new Jobs({ client, subdomain, shortcode });
  }
}

module.exports = Accounts;

const { stringify } = require('querystring');

const Questions = require('./questions');
const Members = require('./members');
const Recruiters = require('./recruiters');
const Candidates = require('./candidates');
const ApplicationForm = require('./application-form');

class Jobs {
  constructor({ client, subdomain, shortcode }) {
    this.client = client;
    this.subdomain = subdomain;
    this.shortcode = shortcode;
  }
  info() {
    const { client, subdomain, shortcode } = this;
    const endpoint = `/${subdomain}/jobs/${shortcode}`;
    return client.get({ endpoint });
  }
  list(options = {}) {
    const { client, subdomain } = this;
    const optionsQueryString = stringify(options);
    const queryString = optionsQueryString.length ? `?${optionsQueryString}` : '';
    const endpoint = `/${subdomain}/jobs${queryString}`;
    return client.get({ endpoint });
  }
  async listAll(options = {}) {
    Object.assign(options, { limit: 100 });
    const { jobs: firstJobs, paging: firstPaging } = await this.list(options);
    let result = firstJobs;
    let nextUrl = firstPaging && firstPaging.next;
    while (nextUrl) {
      // eslint-disable-next-line no-await-in-loop
      const { jobs, paging } = await this.client.get({ url: nextUrl });
      result = result.concat(jobs);
      nextUrl = paging && paging.next;
    }
    return { jobs: result };
  }
  questions() {
    const { client, subdomain, shortcode } = this;
    return new Questions({ client, subdomain, shortcode });
  }
  members() {
    const { client, subdomain, shortcode } = this;
    return new Members({ client, subdomain, shortcode });
  }
  recruiters() {
    const { client, subdomain, shortcode } = this;
    return new Recruiters({ client, subdomain, shortcode });
  }
  candidates(id) {
    const { client, subdomain, shortcode } = this;
    return new Candidates({ client, subdomain, shortcode, id });
  }
  applicationForm() {
    const { client, subdomain, shortcode } = this;
    return new ApplicationForm({ client, subdomain, shortcode });
  }
}

module.exports = Jobs;

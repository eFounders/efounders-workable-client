import querystring from 'querystring';
import Questions from './Questions';
import Members from './Members';
import Recruiters from './Recruiters';
import Candidates from './Candidates';

const Jobs = {
  new(params) {
    return Object.assign(Object.create(this), params);
  },
  info() {
    const { client, subdomain, shortcode } = this;
    const endpoint = `/${subdomain}/jobs/${shortcode}`;
    return client.get({ endpoint });
  },
  list(options = {}) {
    const { client, subdomain } = this;
    const optionsQueryString = querystring.stringify(options);
    const queryString = optionsQueryString.length ? `?${optionsQueryString}` : '';
    const endpoint = `/${subdomain}/jobs${queryString}`;
    return client.get({ endpoint });
  },
  async listAll(options = {}) {
    const { client } = this;
    Object.assign(options, { limit: 100 });
    const { jobs: firstJobs, paging: firstPaging } = await this.list(options);
    let result = firstJobs;
    let nextUrl = firstPaging && firstPaging.next;
    while (nextUrl) {
      const { jobs, paging } = await client.get({ url: nextUrl });
      result = result.concat(jobs);
      nextUrl = paging && paging.next;
    }
    return { jobs: result };
  },
  questions() {
    const { client, subdomain, shortcode } = this;
    return Questions.new({ client, subdomain, shortcode });
  },
  members() {
    const { client, subdomain, shortcode } = this;
    return Members.new({ client, subdomain, shortcode });
  },
  recruiters() {
    const { client, subdomain, shortcode } = this;
    return Recruiters.new({ client, subdomain, shortcode });
  },
  candidates(id) {
    const { client, subdomain, shortcode } = this;
    return Candidates.new({ client, subdomain, shortcode, id });
  },
};

export default Jobs;

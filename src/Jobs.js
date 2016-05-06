import querystring from 'querystring';
import Questions from './Questions';
import Members from './Members';
import Recruiters from './Recruiters';
import Candidates from './Candidates';

const Jobs = {
  new(subdomain, shortcode, workable) {
    return Object.assign(Object.create(this), { subdomain, shortcode, workable });
  },
  info() {
    return this.workable.get({ endpoint: `/${this.subdomain}/jobs/${this.shortcode}` });
  },
  list(options = {}) {
    const optionsQueryString = querystring.stringify(options);
    const queryString = optionsQueryString.length ? `?${optionsQueryString}` : '';
    const endpoint = `/${this.subdomain}/jobs${queryString}`;
    return this.workable.get({ endpoint });
  },
  async listAll(options = {}) {
    try {
      Object.assign(options, { limit: 100 });
      const { jobs: firstJobs, paging: firstPaging } = await this.list(options);
      let result = firstJobs;
      let nextUrl = firstPaging && firstPaging.next;
      while (nextUrl) {
        const { jobs, paging } = await this.workable.get({ url: nextUrl });
        result = result.concat(jobs);
        nextUrl = paging && paging.next;
      }
      return { jobs: result };
    } catch (exception) {
      console.error('Jobs.listAll', exception);
      throw exception;
    }
  },
  questions() {
    return Questions.new(this.subdomain, this.shortcode, this.workable);
  },
  members() {
    return Members.new(this.subdomain, this.shortcode, this.workable);
  },
  recruiters() {
    return Recruiters.new(this.subdomain, this.shortcode, this.workable);
  },
  candidates(id) {
    return Candidates.new(this.subdomain, this.shortcode, id, this.workable);
  },
};

export default Jobs;

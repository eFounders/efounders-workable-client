import querystring from 'querystring';

const Candidates = {
  new(subdomain, shortcode, id, workable) {
    return Object.assign(Object.create(this), { subdomain, shortcode, id, workable });
  },
  info() {
    const endpoint = `/${this.subdomain}/jobs/${this.shortcode}/candidates/${this.id}`;
    return this.workable.get({ endpoint });
  },
  list(options = {}) {
    const optionsQueryString = querystring.stringify(options);
    const queryString = optionsQueryString.length ? `?${optionsQueryString}` : '';
    const endpoint = `/${this.subdomain}/jobs/${this.shortcode}/candidates${queryString}`;
    return this.workable.get({ endpoint });
  },
  async listAll(options = {}) {
    try {
      Object.assign(options, { limit: 100 });
      const { candidates: firstCandidates, paging: firstPaging } = await this.list(options);
      let result = firstCandidates;
      let nextUrl = firstPaging && firstPaging.next;
      while (nextUrl) {
        const { candidates, paging } = await this.workable.get({ url: nextUrl });
        result = result.concat(candidates);
        nextUrl = paging && paging.next;
      }
      return { candidates: result };
    } catch (exception) {
      console.error('Candidates.listAll', exception);
      throw exception;
    }
  },
  create(candidate, stage) {
    const stageQueryString = querystring.stringify({ stage });
    const queryString = stage ? `?${stageQueryString}` : '';
    const endpoint = `/${this.subdomain}/jobs/${this.shortcode}/candidates${queryString}`;
    return this.workable.post({ endpoint, body: candidate });
  },
};

export default Candidates;

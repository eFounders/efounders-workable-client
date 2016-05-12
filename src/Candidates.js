import querystring from 'querystring';

const Candidates = {
  new(params) {
    return Object.assign(Object.create(this), params);
  },
  info() {
    const { client, subdomain, shortcode, id } = this;
    const endpoint = `/${subdomain}/jobs/${shortcode}/candidates/${id}`;
    return client.get({ endpoint });
  },
  list(options = {}) {
    const { client, subdomain, shortcode } = this;
    const optionsQueryString = querystring.stringify(options);
    const queryString = optionsQueryString.length ? `?${optionsQueryString}` : '';
    const endpoint = `/${subdomain}/jobs/${shortcode}/candidates${queryString}`;
    return client.get({ endpoint });
  },
  async listAll(options = {}) {
    const { client } = this;
    Object.assign(options, { limit: 100 });
    const { candidates: firstCandidates, paging: firstPaging } = await this.list(options);
    let result = firstCandidates;
    let nextUrl = firstPaging && firstPaging.next;
    while (nextUrl) {
      const { candidates, paging } = await client.get({ url: nextUrl });
      result = result.concat(candidates);
      nextUrl = paging && paging.next;
    }
    return { candidates: result };
  },
  create(candidate, stage) {
    const { client, subdomain, shortcode } = this;
    const stageQueryString = querystring.stringify({ stage });
    const queryString = stage ? `?${stageQueryString}` : '';
    const endpoint = `/${subdomain}/jobs/${shortcode}/candidates${queryString}`;
    return client.post({ endpoint, body: candidate });
  },
};

export default Candidates;

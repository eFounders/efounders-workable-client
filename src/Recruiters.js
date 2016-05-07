const Recruiters = {
  new(params) {
    return Object.assign(Object.create(this), params);
  },
  list() {
    const { client, subdomain, shortcode } = this;
    const job = shortcode ? `/jobs/${shortcode}` : '';
    const endpoint = `/${subdomain}${job}/recruiters`;
    return client.get({ endpoint });
  },
};

export default Recruiters;

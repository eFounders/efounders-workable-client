const Questions = {
  new(params) {
    return Object.assign(Object.create(this), params);
  },
  list() {
    const { client, subdomain, shortcode } = this;
    const endpoint = `/${subdomain}/jobs/${shortcode}/questions`;
    return client.get({ endpoint });
  },
};

export default Questions;

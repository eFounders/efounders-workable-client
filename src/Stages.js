const Stages = {
  new(params) {
    return Object.assign(Object.create(this), params);
  },
  list() {
    const { client, subdomain } = this;
    const endpoint = `/${subdomain}/stages`;
    return client.get({ endpoint });
  },
};

export default Stages;

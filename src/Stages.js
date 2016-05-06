const Stages = {
  new(subdomain, workable) {
    return Object.assign(Object.create(this), { subdomain, workable });
  },
  list() {
    return this.workable.get({ endpoint: `/${this.subdomain}/stages` });
  },
};

export default Stages;

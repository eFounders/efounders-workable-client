const Recruiters = {
  new(subdomain, shortcode, workable) {
    return Object.assign(Object.create(this), { subdomain, shortcode, workable });
  },
  list() {
    const job = this.shortcode ? `/jobs/${this.shortcode}` : '';
    return this.workable.get({ endpoint: `/${this.subdomain}${job}/recruiters` });
  },
};

export default Recruiters;

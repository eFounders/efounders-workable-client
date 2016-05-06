const Questions = {
  new(subdomain, shortcode, workable) {
    return Object.assign(Object.create(this), { subdomain, shortcode, workable });
  },
  list() {
    return this.workable.get({ endpoint: `/${this.subdomain}/jobs/${this.shortcode}/questions` });
  },
};

export default Questions;

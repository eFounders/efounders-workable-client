const ApplicationForm = {
  new(params) {
    return Object.assign(Object.create(this), params);
  },
  info() {
    const { client, subdomain, shortcode } = this;
    const endpoint = `/${subdomain}/jobs/${shortcode}/application_form`;
    return client.get({ endpoint });
  },
};

export default ApplicationForm;

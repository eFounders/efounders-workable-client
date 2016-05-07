import Members from './Members';
import Recruiters from './Recruiters';
import Stages from './Stages';
import Jobs from './Jobs';

const Accounts = {
  new(params) {
    return Object.assign(Object.create(this), params);
  },
  info() {
    const { workable, subdomain } = this;
    return workable.get({ endpoint: `/${subdomain}` });
  },
  list() {
    const { workable } = this;
    return workable.get({ endpoint: '/' });
  },
  members() {
    return Members.new(this.subdomain, null, this.workable);
  },
  recruiters() {
    return Recruiters.new(this.subdomain, null, this.workable);
  },
  stages() {
    return Stages.new(this.subdomain, this.workable);
  },
  jobs(shortcode) {
    return Jobs.new(this.subdomain, shortcode, this.workable);
  },
};

export default Accounts;

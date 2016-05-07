import Members from './Members';
import Recruiters from './Recruiters';
import Stages from './Stages';
import Jobs from './Jobs';

const Accounts = {
  new(subdomain, workable) {
    return Object.assign(Object.create(this), { subdomain, workable });
  },
  info() {
    return this.workable.get({ endpoint: `/${this.subdomain}` });
  },
  list() {
    return this.workable.get({ endpoint: '/' });
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

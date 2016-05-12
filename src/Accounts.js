import Members from './Members';
import Recruiters from './Recruiters';
import Stages from './Stages';
import Jobs from './Jobs';

const Accounts = {
  new(params) {
    return Object.assign(Object.create(this), params);
  },
  // endpoint exists but not listed in the official docs
  /* info() {
    const { client, subdomain } = this;
    const endpoint = `/${subdomain}`;
    return client.get({ endpoint });
  },*/
  list() {
    const { client } = this;
    const endpoint = '/';
    return client.get({ endpoint });
  },
  members() {
    const { client, subdomain } = this;
    return Members.new({ client, subdomain });
  },
  recruiters() {
    const { client, subdomain } = this;
    return Recruiters.new({ client, subdomain });
  },
  stages() {
    const { client, subdomain } = this;
    return Stages.new({ client, subdomain });
  },
  jobs(shortcode) {
    const { client, subdomain } = this;
    return Jobs.new({ client, subdomain, shortcode });
  },
};

export default Accounts;

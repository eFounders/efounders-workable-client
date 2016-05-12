# Workable API Client

## Motivation

This is a simple wrapper around the [Workable API v3](https://workable.readme.io/v3/docs).

## Installation

```bashp
npm install @efounders/workable-client --save
```

## Quick start

```javascript
import Workable from '@efounders/workable-client';
// not using ES2015 ?
// const Workable = require('@efounders/workable-client').default;

// provide your workable access token to instantiate a workable client
const workable = Workable.client(process.env.WORKABLE_ACCESS_TOKEN);
// lists all the accounts you have access to
workable.accounts().list().then(({ accounts }) => {
  const [{ subdomain }] = accounts;
  const account = workable.accounts(subdomain);
  // lists every members of the first account
  account.members().list().then(({ members }) => {
    members.forEach((member) => console.log(member.name));
  });
});
```

## Running the example

```bashp
git clone https://github.com/eFounders/efounders-workable-client.git
cd efounders-workable-client/example
npm install
WORKABLE_ACCESS_TOKEN=YOUR_TOKEN npm start
```

## Usage overview

Every API endpoint maps to a method on the workable client.
Each method returns a `Promise` that resolves to the JSON parsed from the response.
For paginated responses such as jobs listing or candidates listing, there's also an additional helper method to handle pagination and return all results in a single call.

## Methods list

`workable.accounts().list()`

* [Returns a collection of all the accounts you have access to.](https://workable.readme.io/docs/accounts)

`workable.accounts(subdomain).members().list()`

* [Returns a collection of your account members.](https://workable.readme.io/docs/members)

`workable.accounts(subdomain).recruiters().list()`

* [Returns a collection of your account external recruiters.](https://workable.readme.io/docs/recruiters)

`workable.accounts(subdomain).stages().list()`

* [Returns a collection of your recruitment pipeline stages.](https://workable.readme.io/docs/stages)

`workable.accounts(subdomain).jobs().list()`

`workable.accounts(subdomain).jobs().listAll()`

* [Returns a collection of your account jobs](https://workable.readme.io/docs/jobs)

`workable.accounts(subdomain).jobs(shortcode).info()`

* [Returns the full job JSON object.](https://workable.readme.io/docs/jobsshortcode)

`workable.accounts(subdomain).jobs(shortcode).questions().list()`

* [Returns a JSON array of the job's questions.](https://workable.readme.io/docs/job-questions)

`workable.accounts(subdomain).jobs(shortcode).members().list()`

* [Returns an array with the job's members.](https://workable.readme.io/docs/jobs-members)

`workable.accounts(subdomain).jobs(shortcode).recruiters().list()`

* [returns a collection of the job's external recruiters.](https://workable.readme.io/docs/jobs-recruiters)

`workable.accounts(subdomain).jobs(shortcode).candidates().list()`

`workable.accounts(subdomain).jobs(shortcode).candidates().listAll()`

* [Returns a collection of the job's candidates.](https://workable.readme.io/docs/job-candidates-index)

`workable.accounts(subdomain).jobs(shortcode).candidates(id).info()`

* [Returns the full job JSON object of a specific candidate.](https://workable.readme.io/docs/job-candidates-show)

`workable.accounts(subdomain).jobs(shortcode).candidates().create()`

* [Creates a new candidate for the job.](https://workable.readme.io/docs/job-candidates-create)

## Copyright

Copyright &copy; eFounders MIT License; see LICENSE for further details.

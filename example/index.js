require('dotenv').config();
// const Client = require('@efounders/workable-client');

const Workable = require('../src');

const startup = async () => {
  const workable = new Workable(process.env.WORKABLE_ACCESS_TOKEN);
  const { accounts } = await workable.accounts().list();
  const [{ subdomain }] = accounts;
  const account = workable.accounts(subdomain);
  const members = await account.members().list();
  console.log({ members });
  const recruiters = await account.recruiters().list();
  console.log({ recruiters });
  const stages = await account.stages().list();
  console.log({ stages });
  const { jobs: allJobs } = await account.jobs().listAll();
  console.log({ allJobs });
  const { jobs } = await account.jobs().list();
  console.log({ jobs });
  const [{ shortcode }] = jobs;
  const job = account.jobs(shortcode);
  const jobInfo = await job.info();
  console.log({ jobInfo });
  const { questions: jobQuestions } = await job.questions().list();
  console.log({ jobQuestions });
  const { members: jobMembers } = await job.members().list();
  console.log({ jobMembers });
  const { recruiters: jobRecruiters } = await job.recruiters().list();
  console.log({ jobRecruiters });
  const { candidates: allCandidates } = await job.candidates().listAll();
  console.log({ allCandidates });
  const { candidates } = await job.candidates().list({ limit: 1 });
  console.log({ candidates });
  const [{ id }] = candidates;
  const candidate = job.candidates(id);
  const candidateInfo = await candidate.info();
  console.log({ candidateInfo });
  const { form_fields, questions } = await job.applicationForm().info();
  console.log({ form_fields, questions });
};

startup();

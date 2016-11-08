import Workable from '@efounders/workable-client';

const workable = Workable.client(process.env.WORKABLE_ACCESS_TOKEN);
workable.accounts().list().then(({ accounts }) => {
  console.log({ accounts });
  const [{ subdomain }] = accounts;
  const account = workable.accounts(subdomain);
  account.members().list().then(({ members }) => {
    console.log({ members });
  });
  account.recruiters().list().then(({ recruiters }) => {
    console.log({ recruiters });
  });
  account.stages().list().then(({ stages }) => {
    console.log({ stages });
  });
  account.jobs().listAll(({ jobs: allJobs }) => {
    console.log({ allJobs });
  });
  account.jobs().list().then(({ jobs }) => {
    console.log({ jobs });
    const [{ shortcode }] = jobs;
    const job = account.jobs(shortcode);
    job.info().then((jobInfo) => {
      console.log({ jobInfo });
    });
    job.questions().list().then(({ questions: jobQuestions }) => {
      console.log({ jobQuestions });
    });
    job.members().list().then(({ members: jobMembers }) => {
      console.log({ jobMembers });
    });
    job.recruiters().list().then(({ recruiters: jobRecruiters }) => {
      console.log({ jobRecruiters });
    });
    job.candidates().listAll().then(({ candidates: allCandidates }) => {
      console.log({ allCandidates });
    });
    job.candidates().list({ limit: 1 }).then(({ candidates }) => {
      console.log({ candidates });
      const [{ id }] = candidates;
      const candidate = job.candidates(id);
      candidate.info().then((candidateInfo) => {
        console.log({ candidateInfo });
      });
    });
    job.applicationForm().info().then(({ form_fields, questions }) => {
      console.log({ form_fields, questions });
    });
  });
});

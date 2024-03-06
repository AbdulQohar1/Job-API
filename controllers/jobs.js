const getAllJobs = async (req, res) => {
  res.send(`Get all user's job`);
};

const getJob = async (req, res) => {
  res.send('user job');
};

const createJob = async (req, res) => {
  res.send('Job created');
};

const updateJob = async (req, res) => {
  res.send('Job Updated');
};
const deleteJob = async (req, res) => {
  res.send('Job deleted');
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
}
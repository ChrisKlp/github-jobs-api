import axios from 'axios';

const API_URL =
  'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions';

export const getJobs = (description, location, full_time, page) =>
  axios.get(`${API_URL}.json`, {
    params: {
      description,
      location,
      full_time,
      page,
    },
  });

export const getJob = id => axios.get(`${API_URL}/${id}.json`);

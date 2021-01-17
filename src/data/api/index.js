import axios from 'axios';
// https://cors-anywhere.herokuapp.com/
const API_URL =
  'https://jobs.github.com/positions';

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

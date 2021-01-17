import Job from './JobCard/JobCard';
import { Wrapper } from './JobsList.css';

const JobsList = ({jobs}) => {

  const jobsListItems = jobs.map(item => <Job key={item.id} data={item} />);

  return <Wrapper>{jobsListItems}</Wrapper>;
};

export default JobsList;

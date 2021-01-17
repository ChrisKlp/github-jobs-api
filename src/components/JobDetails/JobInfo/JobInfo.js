import moment from 'moment';
import { Time, Spacer, Title, Locations } from './JobInfo.css';

const JobHeader = ({ data }) => {
  return (
    <div>
      <Time>
        <p>{moment(new Date(data.created_at)).fromNow()}</p>
        <Spacer />
        <p>{data.type}</p>
      </Time>
      <Title as="h1">{data.title}</Title>
      <Locations>{data.location}</Locations>
    </div>
  );
};

export default JobHeader;

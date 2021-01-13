import styled from 'styled-components';
import Heading from '../../Heading/Heading';
import moment from 'moment';

const Wrapper = styled.div``;

const Time = styled.div`
  display: flex;
  align-items: baseline;

  p {
    line-height: 1.6rem;
  }
`;

const Spacer = styled.div`
  margin: 0 1.2rem;
  width: 0.4rem;
  height: 0.4rem;
  background: ${({ theme }) => theme.colorText};
  border-radius: 50%;
`;

const Title = styled(Heading)`
  margin: 1.1rem 0 1.2rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin: 1.1rem 0 1.4rem;
  }
`;

const Locations = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.colorPrimary};
`;

const JobHeader = ({ data }) => {
  return (
    <Wrapper>
      <Time>
        <p>{moment(new Date(data.created_at)).fromNow()}</p>
        <Spacer />
        <p>{data.type}</p>
      </Time>
      <Title as="h1">{data.title}</Title>
      <Locations>{data.location}</Locations>
    </Wrapper>
  );
};

export default JobHeader;

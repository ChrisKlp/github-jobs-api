import styled from 'styled-components';
import bgImage from '../../assets/desktop/CompanyLogo.png';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  padding: 4.9rem 0.9rem 3.2rem 3.2rem;
  height: 100%;
  background: ${({ theme }) => theme.colorCardBg};
  border-radius: 0.6rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 4.9rem 2.1rem 3.2rem 3.2rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    padding: 4.9rem 3.2rem 3.2rem;
  }
`;

const Logo = styled.div`
  position: absolute;
  top: -2.5rem;
  left: 3.2rem;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  background: hsl(0, 0%, 100%);
  border-radius: 15px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
  }
`;

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

const Title = styled.a`
  display: block;
  margin: 1.6rem 0 1.7rem;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colorHeading};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colorText};
  }
`;

const CompanyName = styled.p`
  margin-bottom: 2.6rem;
  line-height: 2rem;
`;

const Locations = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.colorPrimary};
`;

const JobCard = ({ data }) => {
  return (
    <Wrapper>
      <Logo>
        <img src={data.company_logo ? data.company_logo : bgImage} alt="Copany Logo" />
      </Logo>
      <Content>
        <Time>
          <p>{moment(new Date(data.created_at)).fromNow()}</p>
          <Spacer />
          <p>{data.type}</p>
        </Time>
        <Title as={Link} to={`/job/${data.id}`}>
          {data.title}
        </Title>
        <CompanyName>{data.company}</CompanyName>
        <Locations>{data.location}</Locations>
      </Content>
    </Wrapper>
  );
};

export default JobCard;

import styled from 'styled-components';
import bgImage from '../../assets/desktop/CompanyLogo.png';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 2.4rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-bottom: 3.2rem;
  }
`;

const Content = styled.div`
  padding: 4.9rem 2.4rem 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colorCardBg};
  border-radius: 0.6rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 0 4rem 0 18rem;
    height: 14rem;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const Logo = styled.div`
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  place-items: center;
  width: 5rem;
  height: 5rem;
  background: hsl(0, 0%, 100%);
  border-radius: 1.5rem;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    top: 0;
    left: 0;
    transform: translateX(0);
    width: 14rem;
    height: 14rem;
    border-radius: 0 0 0 0.6rem;
  }
`;

const CompanyName = styled(Heading)`
  margin-bottom: 1.3rem;
`;

const CompanyUrl = styled.p`
  margin-bottom: 2.7rem;
  line-height: 1.6rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-bottom: 0;
  }
`;

const JobIntro = ({ data }) => {
  return (
    <Wrapper>
      <Logo>
        <img src={data.company_logo ? data.company_logo : bgImage} alt="Company logotype" />
      </Logo>
      <Content>
        <div>
          <CompanyName as="h2" h2>
            {data.company}
          </CompanyName>
          <CompanyUrl>{data.company_url}</CompanyUrl>
        </div>
        <Button as="a" href={data.company_url} target="_blank" secondary>
          Company Site
        </Button>
      </Content>
    </Wrapper>
  );
};

export default JobIntro;

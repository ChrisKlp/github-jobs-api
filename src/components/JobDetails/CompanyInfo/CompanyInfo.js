import bgImage from '../../../assets/desktop/CompanyLogo.png';
import Button from '../../Button/Button';
import {
  Wrapper,
  Logo,
  Content,
  CompanyName,
  CompanyUrl,
} from './CompanyInfo.css';

const JobIntro = ({ data }) => {
  return (
    <Wrapper>
      <Logo>
        <img
          src={data.company_logo ? data.company_logo : bgImage}
          alt="Company logotype"
        />
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

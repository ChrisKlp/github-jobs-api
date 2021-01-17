import {
  Wrapper,
  StyledContainer,
  Content,
  StyledHeading,
  ApplyButton,
} from './JobFooter.css';

const Footer = ({ data }) => {
  return (
    <Wrapper>
      <StyledContainer>
        <Content>
          <StyledHeading as="h3" h3>
            {data.title}
          </StyledHeading>
          <p>{data.company}</p>
        </Content>
        <ApplyButton>Apply Now</ApplyButton>
      </StyledContainer>
    </Wrapper>
  );
};

export default Footer;

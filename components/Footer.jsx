import styled from "styled-components";
import Link  from "next/link";

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: hsl(210,8%,60%);
  margin: 0.3rem;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

const Container = styled.header`
    margin-top: 1rem;
    display: flex;
    padding: 1rem;
    justify-content: space-around;
    background-color: hsl(210,8%,15%);
    @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
  `;
  const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    @media (max-width: 768px) {
    flex-direction: row;
    width: auto;
  }
    `;
  const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: auto;
  }
  `;
  const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 1rem;
    width: auto;
  }
  `;
  const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    align-items: center;
    margin-top: 1rem;
    width: auto;
  }
  `;
const Heading = styled.h5`
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  color:hsl(210,8%,75%)
`;

  const SocialContainer = styled.div`
  display: flex;
  `;
  const Tagline = styled.p`
  text-align: center;
  font-size: 0.8rem;
  color: hsl(210,8%,60%);
  @media (max-width: 768px) {
    margin-top: 1rem;
    width: auto;
  }
  `
function Footer() {
  return (
    <Container>
      <Left>
        <Heading>
            HINDALYA
          </Heading>
        <LinkContainer>
          
          <StyledLink>Questions</StyledLink>
          <StyledLink>Help</StyledLink>
        </LinkContainer>
      </Left>

      <Center>
      <Heading>COMPANY</Heading>
        <LinkContainer>
          <StyledLink>About</StyledLink>
          <StyledLink>Press</StyledLink>
          <StyledLink>Work Here</StyledLink>
          <StyledLink>Legal</StyledLink>
          <StyledLink>Privacy Policy</StyledLink>
          <StyledLink>Term of Services</StyledLink>
          <StyledLink to="/contact">Contact Us</StyledLink>
          <StyledLink>Cookies Settings</StyledLink>
          <StyledLink>Cookie Policy</StyledLink>
        </LinkContainer>
      </Center>
      <Center>
      <Heading>HINDALYA NETWORK</Heading>
        <LinkContainer>
          <StyledLink>Technology</StyledLink>
          <StyledLink>Culture & recreation</StyledLink>
          <StyledLink>Life & arts</StyledLink>
          <StyledLink>Science</StyledLink>
          <StyledLink>Professional</StyledLink>
          <StyledLink>Business</StyledLink>
          <StyledLink>API</StyledLink>
          <StyledLink>Data</StyledLink>
        </LinkContainer>
      </Center>
      <Right>
      <SocialContainer>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink>Facebook</StyledLink>
        <StyledLink>Twitter</StyledLink>
        <StyledLink>LinkedIn</StyledLink>
        <StyledLink>Instagram</StyledLink>
      </SocialContainer> 
        <Tagline>Site design / logo © 2023 Hindalya Inc; user contributions licensed under CC BY-SA. rev 2023.3.30.43364</Tagline>
      </Right>
    </Container>
  )
}

export default Footer

import styled from 'styled-components';
import Cards from '../../components/Cards';
import Languages from '../../components/Languages';
import Link  from "next/link";
import { Divider } from '@mui/material';

const StyledLink = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5rem;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
  `;
  const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
  `;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
`;

const Home = () => {
  return (
    <div>
    <Wrapper>
    <Left>
      <Title>Welcome to your professional developer community</Title>
      <Subtitle>Let's Spread The Knowledge And Kindness Everywhere</Subtitle>
        <Link href="/courses">
          <Button>Get Started</Button>
        </Link>
      </Left>

      <Right>
        <Image 
        src={`/assets/images/LandingPageImage.jpeg`}
        alt="CoverImage" />
      </Right>

    </Wrapper>
      <Divider />
    <Languages/>
      <Divider />
    <Cards/>
    </div>
  )
}

export default Home

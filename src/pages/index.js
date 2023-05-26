import styled from 'styled-components';
import Cards from '../components/projects/Cards';
import Languages from '../components/courses';
import Link  from "next/link";
import { Divider } from '@mui/material';
import Image from 'next/image';

const StyledLink = styled.li`
  color: black;
  list-style: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5rem 0 0 0;

  @media (min-width: 768px) {
    height: 100vh;
  }

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction:column-reverse;
    margin-bottom: 2rem;

  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  @media (max-width: 768px) {
    margin:0 2.5rem;
  }
  `;
  const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
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
    <>
    <Wrapper>
      <Left>
        <Title>Welcome to our professional community of humanity.</Title>
        <Subtitle>Let's Spread The Knowledge And Kindness Everywhere</Subtitle>
          <Link href="/courses">
            <Button>Get Started</Button>
          </Link>
      </Left>

      <Right>
        <Image
        src={`/assets/images/LandingPageImage.jpeg`}
        alt="CoverImage" 
        width={500}
        height={500}
        loading='lazy'
        />
        
      </Right>

    </Wrapper>
      <Divider />
    <Languages/>
      <Divider />
    <Cards/>
    </>
  )
}

export default Home

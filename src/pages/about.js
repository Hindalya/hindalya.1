import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top:6rem;
  margin:0 1rem 3rem 1rem;
`;


const Title = styled.h1`
font-size: 1.6rem;
margin-bottom: 0.5rem;
text-transform: uppercase;
font-weight: bold;
color:hsl(100,70%,50%)
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  margin-top:1rem;
  margin-bottom: 0.2rem;
  text-transform: uppercase;
  font-weight: bold;
  color:hsl(100,70%,50%)
`;
  
const  Text = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  margin: 0.5rem;
  width: 80%;
  line-height: 1.2;
  letter-spacing: .002rem;
  `;

const HighLight = styled.span`
  color: #f00;
  background-color: yellow;`;

const About = () => {
  return (
    <Wrapper>
      <Title>About Us</Title>
      <Text>Welcome to Hindalya, a place where creativity, innovation, and academic excellence thrive.
       We are a leading institution of higher learning that offers a wide range of undergraduate and graduate programs to 
       students from around the world.</Text>
      <Text>Our mission is to provide a rigorous and inspiring academic environment that prepares students for success in their chosen fields. 
      We are committed to fostering a diverse and inclusive community that values scholarship, research, and service.</Text>

      <Heading>Our History</Heading>
      <Text>Hindalya was imagind in 2009 by a group of visionary students who sought to create a new kind of University/Institution. 
      Where they learned to think critically, solve complex problems, and make a positive impact on the world after their each mistake.
      From our humble beginnings, we have grown into a world-renowned institution that attracts some of the brightest minds in academia.</Text>

      <Heading>Our Campus</Heading>
      <Text>Our campus is located in the heart of the virtual world, with easy access to public and a wide range of cultural 
      and recreational activities. We boast state-of-the-art facilities, including cutting-edge laboratories, a modern library, and 
      high-tech classrooms.</Text>

      <Heading>Our Faculty</Heading>
      <Text>Our faculty members are experts in their fields who are dedicated to teaching, research, and mentorship. They are committed to providing students with a challenging and supportive learning environment that fosters intellectual curiosity and creativity.and the fun fact is: <HighLight> it's a  fictional character that will be made by us in future.</HighLight></Text>
      <Heading>Our Students</Heading>
      <Text>Our students come from all walks of life and from all corners of the globe. They are passionate, driven, and committed to making a difference in the world. They are leaders in their communities and in their fields, and they bring a wealth of experience and diversity to our site.</Text>
      <Heading>Our Alumni</Heading>
      <Text>Our alumni are leaders in their fields, making an impact in their communities and around the world. They are entrepreneurs, innovators, and change-makers who have gone on to accomplish great things in a wide range of industries.</Text>
      <Text>Thank you for your interest in Hindalya. We invite you to explore our website and learn more about our programs, and our students.</Text>
    </Wrapper>
  )
}

export default About

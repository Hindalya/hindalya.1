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
      <Text>Hindalya is an innovative web application designed to revolutionize the way students and professionals access academic resources and receive mentorship. The platform aims to empower individuals by providing free access to a vast range of educational materials, including projects, assignments, courses, and blogs. Hindalya serves as a comprehensive learning hub that caters to diverse educational needs and fosters continuous growth.</Text>
      <Text>In addition to the abundant academic resources, Hindalya offers an affordable mentorship program that connects learners with experienced professionals in their respective fields. The mentorship program is designed to provide personalized guidance, allowing individuals to receive expert advice, career insights, and tailored learning paths. By bridging the gap between mentors and mentees, Hindalya aims to foster meaningful connections and inspire learners to achieve their educational and professional goals.</Text>

      <Text>The platform is built with a user-centric approach, focusing on intuitive navigation and an engaging user interface. Users can create personalized profiles to track their progress, bookmark favorite resources, and receive recommendations based on their interests and learning objectives. Hindalya's search and recommendation engine employs advanced algorithms to deliver targeted and relevant content, enhancing the overall learning experience.
      </Text>
      <Text>With Hindalya, students and professionals no longer face barriers to accessing high-quality educational resources and mentorship. The platform opens doors to new opportunities, encourages lifelong learning, and nurtures a vibrant community of knowledge seekers. Hindalya is poised to transform the educational landscape by empowering individuals to unlock their full potential and excel in their academic and professional endeavors.</Text>

      <Text>Through Hindalya, the future of learning is within reach, offering a seamless, inclusive, and accessible platform that propels individuals towards success in their educational journeys.</Text>
      
    </Wrapper>
  )
}

export default About

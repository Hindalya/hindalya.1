import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Link  from "next/link";
import Image from 'next/image';
import { useRouter } from 'next/router';

const StyledLink = styled(Link)`
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `

const ImageContaioner = styled.div`
  
  width: 40px;
  height: 50px;
`;

const Span = styled.p`
  margin-top: auto;
  position: relative;
`;

const Courses = ({item}) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault()
    router.push(`courses/${item.name}`)
  }
  return (
    <Grid item xs={2} sm={2} md={2}>
      <Container>
        <ImageContaioner>
        <Image 
            src={item.image}
            alt='item.name' 
            width={30}
            height={30}
        />
        </ImageContaioner>
        <StyledLink href={`courses/${item.name}`} onClick={handleClick}><Span>{item.name}</Span></StyledLink>
        </Container>
    </Grid>
  )
}

export default Courses

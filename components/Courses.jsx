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
  height: 3rem;
`;

const StyledImage = styled(Image)`
    object-fit: contain;
    width: 3rem;
    height: 3rem;
`;

const Span = styled.p`
  margin-top: 1rem;
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
        <StyledImage 
            src={item.image}
            alt='item.name' 
            width={50}
            height={50}
        />
        </ImageContaioner>
        <StyledLink href={`courses/${item.name}`} onClick={handleClick}><Span>{item.name}</Span></StyledLink>
        </Container>
    </Grid>
  )
}

export default Courses

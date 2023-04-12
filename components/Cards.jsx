import styled from 'styled-components';
import Card from "../components/Card.jsx";
import Grid from '@mui/material/Grid';

const LatestProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;
const Title = styled.h1`
  margin-bottom: 20px;;
  font-weight:500;
  font-size: 2rem;
`;
const Cards = () => {
  let arr = [1, 2, 3, 4, 5, 6];
  return (
    <LatestProjects>
      <Title>Latest Projects</Title>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {arr.map((item) => (
          <Grid key={item} item xs={4}>
          <Card/>
      </Grid>
        ))}
      </Grid>
    </LatestProjects>
  )
}

export default Cards

import styled from 'styled-components'
import Cards from '../components/projects/Cards'
const Wrapper = styled.div`
  padding-top:5rem;
`;
const Projects = () => {
  return (
    <Wrapper>
        <Cards/>
    </Wrapper>
  )
}

export default Projects

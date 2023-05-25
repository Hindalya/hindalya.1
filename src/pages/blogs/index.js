import styled from "styled-components";
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from "next/link";

const Wrapper = styled(InfiniteScroll)`
  padding-top:5rem;
  text-align:center;
`;
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align:left;
  `;
const Text = styled.p`
  font-size: 1rem;
  color:gray;
  `
const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  color:hsl(100,70%,50%)
`;
const Button = styled.button`
color:hsl(210,80%,65%)
`

const Blogs = ({data}) => {
  return (
    <Wrapper
    dataLength={data.length}
    hasMore={1 !== data.length}
    loader={<h4>Loading...</h4>}
    endMessage={
      <p>
        <b>Yay! You have seen it all</b>
      </p>
    }
    >
    {
      data.map((ele) =>{
        return <Container id={ele.id}>
          <Heading>{ele.id+1}.{ele.title}</Heading>
          <Text>{ele.content.p1}...</Text>
          <Link href={`/blogs/${ele.title}`}><Button>Read More</Button></Link>
      </Container>
      })
    }
    </Wrapper>
  )
}

export default Blogs
 
// This gets called on every request
 export async function getStaticProps() {
  // Fetch data from external API
  try {
    const {blog} = await import('/data/data.json');
    // console.log(blog);
    // Pass data to the page via props
    return { 
      props: { 
        data :blog,
      } ,
    };
  } catch (error) {
    console.log(error);
  }  
}
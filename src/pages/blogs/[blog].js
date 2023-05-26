import React from 'react'
import styled from 'styled-components';
import Head from 'next/head'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top:6rem;
  margin:0 1rem 3rem 1rem;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;

`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align:center;
  padding-bottom: 1rem;
`
const Subheading = styled.h3`
  font-size: 2rem;
  font-weight: bold;
`
const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.7rem;
  color: #333;
  text-align: justify;
  margin-bottom: 1rem;
  margin: 0.5rem;
  letter-spacing: .005rem;
`

const Blog = ({data}) => {
  return (
    <>
    {
      data.map(ele => <Wrapper key={ele.title}>
        <Head>
          <title>{ele.title}</title>
        </Head>
        <Title>{ele.title}</Title>
        <Container>
          <Subheading>Introduction</Subheading>
          <Content>{ele.intro}</Content>
          <Subheading>Description</Subheading>
          <Content>{ele.description}</Content>
          <Subheading>Content</Subheading>
          <Content>{ele.content.p1}</Content>
          <Content>{ele.content.p2}</Content>
          <Content>{ele.content.p3}</Content>
          <Subheading>Conclusion</Subheading>
          <Content>{ele.Conclusion}</Content>
          <Content>Thank you for reading!</Content>
          <Content><span><b>Note:</b></span> {ele.Note}</Content>
        </Container>
      </Wrapper>)
    }
    </>
  )
}

export default Blog

// This gets called on every request
export async function getStaticProps(context) {
  // Fetch data from external API
  try {
    const {blog} = await import('/data/data.json');
    const id = context?.params.blog;
    // Pass data to the page via props
    const data = blog.filter((ele)=> ele.title === id);
    return { 
      props: { data } ,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  // if (process.env.SKIP_BUILD_STATIC_GENERATION) {
  //   return {
  //     paths: [],
  //     fallback: 'blocking',
  //   };
  // }
 
  // Call an external API endpoint to get posts
  const {blog} = await import('/data/data.json');
 
  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = blog.map((post) => ({
    params: { blog: post.title.toString() },
  }));
//  console.log(paths);
  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}
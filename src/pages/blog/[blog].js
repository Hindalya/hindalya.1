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
  text-align: center;
  margin-bottom: 2rem;
`

const Content = styled.div`
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: #333;
`

const Blog = () => {
  return (
    <Wrapper>
      <Head>
        <title>Micro finance</title>
      </Head>
      <Container>
        <Title>Micro finance</Title>
        <Content>
      Microfinance has become an important tool for inclusive and sustainable growth in India.The concept of microfinance originated from Self 
      help Group Bank Linkage Programme (SHG-BLP) that emerged as a result of an action research project conducted by MYRADA in 1989, commissioned by NABARD. 
      <br/>
<b>State of Microfinance in India</b>- It contributes about 1.3 crore jobs and 2% of our GVA as per a NCAER study. RBI recently defined microfinance as collateral free loans given to household "having annual income upto 3 lakhs.
<br/>
<b>How can it contribute to India in the emergence of Economic Superpower-</b>
<br/>
1. Boosting Entrepreneurship
<br/>
2. Financial Indusion
<br/>
3. Poverty Reduction
<br/>
4. Empowering Women
<br/>
5. Supporting Real Development 
<br/>
<b>Challenges with microfinance in India.</b>
<br/>
1.Over-Indebtedness - One of the major challenges
is over-indebtedness, where Borrow-are unable to repay the loans taken from different microfinance companies.
<br/>
2. Lack of financial Literacy - It makes difficult for them to understand the terms of Conditions of loans.
<br/>
3. Inflanters Problems - michefinance companies operate in hemente es rural areas, these areas Jack infra- Structure life hoods, communication sete. This leads to difficulties in transportation and accessing financial services.
<br/>
4. High Interest Rates - MFIS charge high interest rates due to high cost of delivery. This make them. difficult to pay back.
<br/>
5. External Shocks - People in rural areas are vulnerable to pandemic, natural disaster etc. These impacts their ability to pay loans back,
<br/>
<b>Solutions-</b> <br/>
1. Make regulatory frameworks strong - RBI should consider introducing regulation to address high- interest rate challenge.<br/>

2. Promote financial Literacy - mf Is should organise Financial seducation program teaching them about nowing, inventing and insurance. <br/>
3. Address the issue of over-indebtedness - there is a need to develop credit information system that prevento them -taking loans beyond their capacity to bay back.<br/>

4. Encouraging Partnerships - Government, michefinane Institutes and banks should come together and work together to solve the challenges being facce by this sector.<br/>

<b>Conclusion</b> - Microfinance would help Indo becoming a economic 1 superpower by working on challenges faced by this sector.</Content>
      </Container>
    </Wrapper>
  )
}

export default Blog
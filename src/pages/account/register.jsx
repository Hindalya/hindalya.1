import { Divider } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

  const Wrapper = styled.div`
  padding:8rem 0 0 0;
`;
  const Div = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
    `;
  const Container = styled.form`
  Display:flex;
  min-width: 22rem;
  flex-direction:column;
  justify-content:left;
   @media (max-width: 768px) {
    min-width: auto;
   }
  `;

  const Title = styled.h6`
  margin-bottom: 0.8rem;
  font-size: .98rem;
  line-height: 1.2;
  font-weight: bold;
  `;
  
  const Input = styled.div`
    width: 100%;
    border: 1px solid #1c1d1f;
    height: 3.2rem;
    margin-bottom: 0.8rem;
`;

  const Button = styled.button`
    margin-bottom: 0.8rem;
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center; 
    padding: 0 1rem;
    color: #1c1d1f;
    background-color: transparent;
    border: 1px solid #1c1d1f;
    height: 2.8rem;
    cursor: pointer;
    &:hover {
      background-color: Beige;
    }
    `;
    const IMG = styled.img`
        width: 2rem;
        height: 2rem;
        margin-right: 0.6rem;
        `;
    const Span = styled.span`
        font-size: 1rem; 
        font-weight: bold;
        cursor: pointer;
        `
    const Inputtag = styled.input`
        width: 100%;
        height: 100%;
        border: none;
        padding: 0 1rem;
        background-color: transparent;
        outline: none;
        &:focus {
          border: none;
        }
        &::placeholder {
          color: #1c1d1f;
          font-size: 1rem;
          font-weight: 500;
        }
    `;
    const Pera = styled.p`
    font-size: .9rem;
    margin-bottom: 0.8rem;
    `;

    const LoginButton = styled.button`
    margin-top: 0.4rem;
    margin-bottom: 0.8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    padding: 0 1rem;
    color: #1c1d1f;
    border: 1px solid #1c1d1f;
    height: 2.8rem;
    background:#1B1F22;
    color:white;
    cursor: pointer;
    &:hover {
      background-color:#08090A;
    }
    `;

const Signup = () => {
  return (
    <Wrapper>
      <Div>
        <Container id="loginForm">
          <Title>Resgister yourself with Hindalya</Title>
          <Input>
          <Inputtag name="fullName" placeholder="Enter Your full Name" minLength={6} maxLength={30} required type="text"/>
          </Input>
          <Input>
          <Inputtag name="email" placeholder="Email" minLength={7} maxLength={64} required type="email"/>
          </Input>
          <Input>
          <Inputtag name="password" placeholder="Password" minLength={4} maxLength={64} required type="password"/>
          </Input>
          <Input>
          <Inputtag name="password" placeholder="Confirm Password" minLength={4} maxLength={64} required type="password"/>
          </Input>
          <LoginButton><Span>Sign in</Span></LoginButton>
        </Container>
        <Pera>or <Span style={{color:'blue'}}>Forgot Password</Span></Pera>
        <Divider/>
        <Pera>Do you have an account? 
          <Link href="./login">
            <Span style={{color:'blue'}}>Log in</Span>
          </Link>
        </Pera>
      </Div>
    </Wrapper>
  )
}

export default Signup;

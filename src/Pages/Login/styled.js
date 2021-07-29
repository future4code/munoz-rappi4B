import styled from "styled-components";

export const LoginContainer = styled.main`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 58px;
  
`;

export const Title = styled.div`
 display: flex;
 align-items: center;
 text-align: center;
 padding-top: 20px;
 
 >h1{
  font-family: Roboto;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
 }

`


export const LoginInputs = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95vw;
  >form {
    display: flex;
    flex-direction: column;
    input,
    button {
      width: 100%;
    }
  >button {
      margin-top: 16px;
    }
  }
`;


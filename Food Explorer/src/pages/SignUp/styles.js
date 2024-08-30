import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  height: 100vh;
  padding-top: 15.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1{
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 3.7rem;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    margin-bottom: 7.2rem;
  }

  @media (max-height: ${DEVICE_BREAKPOINTS.MD}){
    padding-top: 8rem;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
    flex-direction: row;
    justify-content: space-around;
    padding-top: 0;
  }
`;

export const Form = styled.form`
  width: 31.6rem;
  display: flex;
  flex-direction: column;

  > h2{
    display: none;
    font-size: 3.2rem;
    line-height: 140%;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    margin-bottom: 4rem;
  }
  label{
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
  }
  .input-wrapper{
    display: flex;
    flex-direction: column;
    gap: .8rem;
  }
  .input-wrapper + .input-wrapper{
    margin-top: 3.2rem;
  }
  button{
    margin-top: 3.2rem;
  }
  > a{
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-weight: medium;
    font-size: 1.4rem;
    line-height: 2.4rem;
    align-self: center;
    margin-top: 3.2rem;
  }

  @media (max-height: ${DEVICE_BREAKPOINTS.SM}){
    > h1{
      margin-bottom: 4rem;
    }

    > a{
      margin-top: 2.2rem;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
    width: 47.6rem;
    padding: 4rem;
    background: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.6rem;
    
    > h2{
      display: block;
      align-self: center;
    }
  }
  @media (width > ${DEVICE_BREAKPOINTS.XXL}){
    padding: 6.4rem;
  }

`;
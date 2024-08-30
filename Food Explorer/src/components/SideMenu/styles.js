import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.aside`
  grid-area: menu;
  background: ${({ theme }) => theme.COLORS.DARK_100};
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
    grid-area: none;
    position: absolute;
    z-index: 2;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"]{
      transform: translateX(0);
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    display: none;
  }
`;

export const Header = styled.header`
  height: 11.4rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0rem 1.6rem;
  background: ${({ theme }) => theme.COLORS.DARK_700};

  > button{
    width: 4rem;
    height: 4rem;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100}; 
    font-size: 4rem;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;  
  font-size: 2.1rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-weight: 400;
  font-family: "Roboto", sans-serif;
`;

export const Nav = styled.nav`
  width: 37.2rem;
  margin: 3.6rem auto 0;
  display: flex;
  flex-direction: column;
  flex: 1;

  a {
    margin-top: 3.6rem;
  }
  a + a{
    margin-top: 0;
  }
  > a{
    font-family: "Poppins", sans-serif;
    font-size: 2.4rem;
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 2rem;
  }
  @media (width <= 390px){
    width: 32rem;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    width: 60rem;
  }
`;
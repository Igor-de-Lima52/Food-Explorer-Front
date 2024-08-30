import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.footer`
  grid: footer;
  /* position: fixed; */
  /* bottom: 0; */
  width: 100%;
  height: 7.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  background: ${({ theme }) => theme.COLORS.DARK_600};
  animation: fromBottom .5s;

  > h3{
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    display: flex;
    align-items: center;
    gap: .6rem;
  }
  > p{
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
  @media (width < 375px){
    gap: 1rem;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    gap: 54rem;
    animation: fromBottom .8s;
    img{
      width: 3rem;
    }
    > h3{
      font-size: 2.4rem;
    }
    > p{
      font-size: 1.4rem;
      line-height: 160%;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
    gap: 70rem;
  }
  @keyframes fromBottom {
    0%{
      transform: translateY(100%);
    }
  }
`;
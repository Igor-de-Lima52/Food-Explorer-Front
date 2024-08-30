import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 11.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.DARK_600};
  position: relative;
  animation: fromTop .5s;

  .orders{
    position: absolute;
    right: 2rem;
  }
  .menu{
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.4rem;
    position: absolute;
    left: 2rem;
  }
  .dishes{
    display: none;
  }
  .logout{
    display: none;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    padding: 0 2rem;
    animation: fromTop .8s;
    .menu{
      font-size: 3rem;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    padding: 0 3rem;
    gap: 6rem;
    .dishes{
      display: block;
      width: 21.6rem;
    }
    .logout{
      display: inline-block;
      font-size: 3.2rem;
      background: transparent;
      border: 0;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    .menu, .orders{
      display: none;
    }
  }
  @keyframes fromTop {
    0%{
      transform: translateY(-100%);
    }
  }
`;

export const Search = styled.div`
  display: none;

  .input:focus{
    outline: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    width: 28rem;
    display: flex;
    background: ${({ theme }) => theme.COLORS.DARK_900};
    padding-left: 2rem;
    border-radius: .5rem;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
    padding-left: 10rem;
    padding-left: 5rem;
    width: 58rem;
  }
`;
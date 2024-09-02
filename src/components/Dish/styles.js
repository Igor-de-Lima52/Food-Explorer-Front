import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  width: 21rem;
  height: 30.2rem;
  padding: 2.4rem;
  background: ${({ theme }) => theme.COLORS.DARK_200};
  position: relative;
  text-align: center;
  border-radius: .8rem;
  .favorite, .edit{
    border: 0;
    background: none;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }
  > img{
    width: 8.8rem;
    height: 8.8rem;
    margin: auto;
    border-radius: 50%;
    object-fit: cover;
  }
  > h3{
    font-size: 1.4rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 2.4rem;
    margin-top: 1.2rem;
  }
  a{
   color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
  > h6{
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    margin: 1.2rem 0;
  }
  .description{
    display: none;
  }
  .desktop{
    margin: 0 auto;
    > button{
      height: 3.2rem;
    }
  }
  .counter{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    margin: 0 0 1.6rem;

    > button{
      border: 0;
      background: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2.4rem;
    }

    > span{
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 1.6rem;
    }
  }
  @media (width < 420px){
    > h3{
      font-size: 1.2rem;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    > img{
      width: 10rem;
      height: 10rem;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
    width: 30.4rem; 
    height: 42.2rem;
    
    > img{
      width: 17.6rem;
      height: 17.6rem;
    }

    > h3{
      font-size: 1.8rem;
      font-weight: bold;
      line-height: 140%;
    }
    > h6{
      font-size: 2.4rem;
      margin-top: 0;
    }
    .description{
      display: inline-block;
      margin: 1.5rem 0;
      p{
        font-size: 1.4rem;
        line-height: 160%;
      }
    }
    .desktop{
      display: flex;
      justify-content: center;
      gap: 1.6rem;
      width: 20.8rem;
      margin-top: 1.5rem;
      > button{
        width: 9.2rem;
      }
    }
  }
`;
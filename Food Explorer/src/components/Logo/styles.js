import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  .admin{
    width: 22.4rem;
    height: 3.4rem;
    display: flex;
    align-items: center;
    gap: .8rem;
  }
  .user{
    width: 18.6rem;
    height: 3.4rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    > img, h2{
      margin-bottom: 0;
    }
  }
  img{
    width: 3rem;
  }
  span{
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200 };
  }
  h2{
    font-size: 2.1rem;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    .admin{
      width: 18.6rem;
      height: 3.9rem;
      align-items: center;
      gap: 1rem;
      position: relative;
    }
    img{
      margin-bottom: 1.4rem;
    }
    span{
      position: absolute;
      bottom: 0;
      right: 0;
    }
    h2{
      font-size: 2.4rem;
      margin-bottom: 1.4rem;
    }
  }
`;
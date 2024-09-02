import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: "header" "main" "footer";
  overflow-y: hidden;

  main{
    grid-area: main;
    overflow-y: auto;
    width: 31.6rem;
    margin: 0 auto 2rem;
    animation: opacity 1.5s;
    &::-webkit-scrollbar{
      width: 10px;
    }
    &::-webkit-scrollbar-thumb{
      width: 10px;
      background: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 1rem;
    }
    &::-webkit-scrollbar-track{
      width: 10px;
    }
  }
  .back{
    width: 11.2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 2.4rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-top: 3.6rem;
    margin-bottom: 1.6rem;
    svg{
      font-size: 3.2rem;
    }
  }
  @media (width < 400px){
    .back{
      font-size: 2rem;
      margin-top: 2rem;
      svg{
        font-size: 3rem;
      }
    }
  }
  @media (min-width: 500px){
    main{
      width: 100%;
      padding: 0 4rem;
    }
    .back{
      margin-top: 1.6rem;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    main{
      padding: 0 6rem;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    main{
      padding: 0 8rem;
    }
    .back{
      line-height: 140%;
      margin-top: 2rem;
      margin-bottom: 1.2rem;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
    main{
      padding: 0 12rem;
    }
    .back{
      margin-bottom: 4.2rem;
    }
  }
  @keyframes opacity {
    0%{
      opacity: 0%;
    }
  }
`;

export const Dish = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  > img{
    width: 26.4rem;
    height: 26.4rem;
    border-radius: 50%;
  }
  .info{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1, p{
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: center;
    line-height: 140%;
  }
  h1{
    font-size: 2.8rem;
    font-weight: 500;
    margin: 1.6rem 0 2.4rem;
  }
  p{
    font-size: 1.6rem;
  }
  .buttons{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    /* margin-bottom: 5.4rem; */

    > button{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
      line-height: 1.6rem;
      padding: 1rem 2rem;

      img{
        width: 2.2rem;
      }
    }

    .edit{
      font-size: 1.6rem;
    }
  }
  .counter{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    > button{
      border: 0;
      background: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2.7rem;
    }

    > span{
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 2.2rem;
    }
  }
  @media (width < 400px){
    h1{
      font-size: 2rem;
    }
    .buttons{
      margin-bottom: 0;
    }
    > img{
    width: 16rem;
    height: 16rem;
   } 
  }
  @media (min-width: 500px){
    h1{
      font-size: 2.4rem;
    }
    .buttons{
      margin-bottom: 0;
    }
    > img{
      width: 20rem;
      height: 20rem;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    align-items: center;
    gap: 4.8rem;

    > img{
      width: 30rem;
      height: 30rem;
    }
    h1{
      font-size: 4rem;
    }
    p{
      font-size: 2.4rem;
      line-height: 140%;
    }
    .buttons{
    justify-content: center;
    gap: 3rem;

    > button{
      width: 40rem;
      font-size: 1.6rem;
      font-weight: 400;

      img{
        width: 3rem;
      }
    }
  }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    flex-direction: row;
    gap: 4.8rem;

    .info{
      align-items: flex-start;
    }
    h1{
      font-size: 3.2rem;
    }
    p{
      font-size: 2rem;
      line-height: 140%;
      text-align: start;
    }
    .buttons{
    justify-content: flex-start;
    gap: 1.6rem;
    /* margin-bottom: 1rem; */

    > button{
      width: 30rem;
      font-size: 1.6rem;
      font-weight: 400;

      img{
        width: 2.6rem;
      }
    }
  }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
    > img{
      width: 39rem;
      height: 39rem;
    }
    h1{
      font-size: 3.6rem;
    }
    p{
      font-size: 2.4rem;
    }
  }
`;

export const Ingredients = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2.4rem;
  margin: 2.4rem 0 4.8rem;
  flex-wrap: wrap;

  @media (width < 400px){
    margin: 2.4rem 0;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    margin: 4rem 0;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    justify-content: flex-start;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
    gap: 1.2rem;
  }
`;
import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: "header" "main" "footer";
  overflow-y: hidden;
  
  .carrousel{
    width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2.4rem;
    margin: 6.2rem auto 0;
  }
  .carrousel + .carrousel{
    margin-top: 2.4rem;
  }
  main{
    grid-area: main;
    padding: 4.4rem 0;
    overflow-y: auto;
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
    
    .slide{
      align-self: flex-start;
      width: 100%;
      height: 30.2rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
    }
    .splide__slide{ 
      width: 21rem;
      height: 30.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .splide__arrow{
      height: 100%;
      width: 6rem;
      position: absolute;
      border-radius: 0;
      transition: opacity 0.3s ease;
      svg{
        fill: white;
        width: 2.4rem;
        height: 2.4rem;
      }
    }
    .splide__arrow:hover{
      opacity: 100%;
    }
    .splide__arrow--next{
      background: linear-gradient(to right, rgba(0, 10, 15, 27%), rgb(0, 10, 15));
      right: 0;
    }
    .splide__arrow--prev{
      background: linear-gradient(to right, rgb(0, 10, 15), rgba(0, 10, 15, 27%));
      left: 0;
    }
  }
  .card{
    width: 37.6rem;
    height: 12rem;
    background: linear-gradient(#091E26, #00131C);
    margin: auto;
    display: flex;
    align-items: center;
    position: relative;
    border-radius: .2rem;

    img{
      position: absolute;
      bottom: 0;
      left: -3rem;
    }
  }
  .content{
    position: absolute;
    right: 1.6rem;
    bottom: 2.8rem;
    width: 21.5rem;
    h3{
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
    p{
      margin-top: .3rem;
      font-family: "Poppins", sans-serif;
      font-size: 1.2rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }
  @media (width < 420px){
    .card{
      width: 32rem;
      height: 10rem;
      img{
        width: 14rem;
        left: -2rem;
      }
    }
    .content{
      right: -1rem;
      bottom: 2rem;
      h3{
        font-size: 1.6rem;
      }
    }
    .carrousel{
      width: 34rem;
      margin: 6.2rem auto 0;
    }
    
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.SM}){
    .carrousel{
      width: 60rem;
    }
    main{
      .slide{
        height: 30.2rem;
      }
      .splide__slide{
        height: 30.2rem;
      }
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    main{
      padding-top: 16.4rem;
    }
    .card{
      width: 62rem;
      height: 16rem;
      img{
        width: 32rem;
      }
    }
    .content{
      width: 32rem;
      right: 3rem;
      bottom: 4.6rem;
      h3{
        font-size: 2.8rem;
      }
      p{
        font-size: 1.4rem;
      }
    }
    .carrousel{
      width: 70rem;
    }
    .carrousel + .carrousel{
      margin-top: 4.8rem;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    main{
      padding-top: 16.4rem;
    }
    .card{
      width: 82rem;
    }
    .content{
      width: 42.2rem;
      right: 6rem;
      bottom: 5rem;
      h3{
        font-size: 3rem;
      }
      p{
        font-size: 1.4rem;
      }
    }
    .carrousel{
      width: 82.2rem;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
    .card{
      width: 112rem;
      height: 26rem;
      img{
        width: 50.6rem;
      }
    }
    .content{
      right: 10rem;
      bottom: 9.2rem;
      h3{
        font-size: 4rem;
      }
      p{
        margin-top: .8rem;
      }
    }
    .carrousel{
      width: 112.2rem;
    }
    main{
      .slide{
        height: 42.2rem;
      }
      .splide__slide{
        height: 42.2rem;
      }
    }
  }
`;
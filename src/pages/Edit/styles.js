import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.4rem 3.1rem auto 7.7rem;
  grid-template-areas: "header" "back" "main" "footer";
  overflow-y: hidden;

  main{
    grid-area: main;
    overflow-y: auto;
    width: 36.4rem;
    margin: 2.4rem auto;
    padding-right: 1rem;
    border-radius: .8rem;
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
  .header{
    grid-area: back;
    padding: 1rem 0 0;
    width: 36.4rem;
    margin: 0 auto;
    animation: opacity 1.5s;
  }
  .back{
    width: 7.4rem;
    display: flex;
    align-items: center;
    gap: .8rem;
    font-size: 1.6rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    animation: opacity 1.5s;
    svg{
      font-size: 3.2rem;
    }
  }
  @media (width < 380px){
    main{
      width: 32rem;
    }
    .header{
      width: 32rem;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.SM}){
    main{
      width: 60rem;
    }
    .header{
      width: 60rem;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    main{ 
      width: 70rem;
    }
    .header{
      width: 70rem;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    main{
      width: 92rem;
    }
    .header{
      width: 92rem;
    }
    .back{
      width: 9rem;
      font-size: 2rem;
      line-height: 140%;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
    main{
      width: 112rem;
    }
    .header{
      width: 112rem;
    }
  }
  @keyframes opacity {
    0%{
      opacity: 0%;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  h2{
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    line-height: 140%;
    font-weight: 500;
    margin-bottom: 2.4rem;
  }
  .input-wrapper{
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    > label{
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
      line-height: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    input{
      background: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: .8rem;
      outline: none;
    }
  }
  .input-wrapper + .input-wrapper{
    margin-top: 2.4rem;
  }
  .info-2{
    margin: 2.4rem 0;
  }
  #fileDiv{
    background: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: .8rem;
    label{
      display: flex;
      gap: .8rem;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      line-height: 2.4rem;
      font-weight: 500;
      padding: 1.2rem 3.2rem;

      svg{
        font-size: 2.4rem;
      }
    }
  }
  .file-input{
    display: none;
    width: 100%;
    padding: 1.2rem 3.2rem;
  }
  .file-name {
    margin-left: 10px;
  }
  .ingredients{
    border-radius: .8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    padding: .8rem;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    input{
      background: none;
    }
  }
  .buttons{
    width: 100%;
    display: flex;
    gap: 3.2rem;
    margin-top: 2.4rem;
  }
  .delete, .save{
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  .delete{
    background: ${({ theme }) => theme.COLORS.DARK_800};
  }
  .save{
    background: ${({ theme }) => theme.COLORS.TOMATO_400};
  }
  @media (width < 380px) {
    .buttons{
      gap: 2rem;
    }
  .delete, .save{
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 400;
  }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    .ingredients{
      justify-content: flex-start;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    position: relative;
    .info{
      display: flex;
      align-items: center;
      gap: 3.2rem;
    }
    .info .input-wrapper:nth-child(2){
      width: 100%;
    }
    .info .input-wrapper:nth-child(3){
      width: 60%;
    }
    .info-2{
      display: flex;
      align-items: center;
      gap: 3.2rem;
      margin: 3.2rem 0;
    }
    .info-2 .input-wrapper:nth-child(1){
      width: 100%;
    }
    .info-2 .input-wrapper:nth-child(2){
      width: 30%;
    }
    .input-wrapper + .input-wrapper{
      margin: 0;
    }
    #fileDiv{
      width: 25rem;
    }
    .buttons{
      width: 100%;
      display: flex;
      gap: 3.2rem;
      margin-top: 2.4rem;
      justify-content: flex-end;
    }
    .delete{
      width: 15%;
    }
    .save{
      width: 20%;
    }
  }
`;
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  border-radius: .8rem;
  padding: 0 1.2rem;
  
  > button{
    border: none;
    background: none;
  }

  .button-delete{
    color: ${({ theme }) => theme.COLORS.LIGHT_100}
  }

  .button-add{
    color: ${({ theme }) => theme.COLORS.LIGHT_500}
  }

  > input{
    height: 3.2rem;
    width: 10rem;
    font-size: 1.6rem;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;
    outline: none;
    &::placeholder{
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
  @media (width < 380px) {
    > input{
      width: 8rem;
    } 
  }
`;
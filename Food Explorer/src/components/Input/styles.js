import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: .8rem;
  > input{
    width: 100%;
    height: 4.8rem;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    padding: 1.6rem 1.4rem;

    &:placeholder{
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
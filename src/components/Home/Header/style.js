import { styled } from "styled-components";

export const HeaderComponent = styled.header`
  background-color: #6b05;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 42px;

  h1 {
    display: flex;
    gap: 20px;
    align-items: center;
    color: #00000095;
  }

  button {
    cursor: pointer;
  }

  .buttons {
    display: flex;
    gap: 10px;
  }
  .addCat {
    padding: 0 20px;
    border-radius: 10px;
  }
  .addCat:hover {
    background-color: #6b05;
  }
  .user {
    padding: 0 20px;
    border-radius: 10px;
    transition-duration: 200ms;
  }
  .user:hover {
    background-color: #6b05;
    transition-duration: 200ms;
  }
`;

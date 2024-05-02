import { styled } from "styled-components";

export const Container = styled.div`
  padding: 1rem 0;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .inputAndLabel {
      display: flex;
      flex-direction: column;

      label {
        font-weight: 600;
      }

      input {
        border: 1px solid #ddd;
        border-radius: 5px;

        &:focus {
          outline: 1px solid #d4d4d4;
        }
      }
    }

    .submitBtn {
      background: #6b05 !important;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

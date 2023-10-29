import styled from "styled-components";

export const InputContainer = styled.div`
  text-align: start;

  input {
    border-radius: 8px;
    border: 1px solid rgba(4, 7, 47, 0.4);
    height: 56px;
    width: 600px;
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
  }
  label {
    /* color: var(--Text-color, #04072f); */

    color: #04072f;
    /* Label - Medium - 18 */
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%; /* 19.8px */
  }
`;

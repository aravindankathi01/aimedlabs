import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 60%;
  height: 961px;
  height: 100%;
  flex-shrink: 0;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }

  form {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

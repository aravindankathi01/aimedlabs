import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  padding: 40px 40px 40px 142px;
  justify-content: flex-end;
  align-items: center;
  gap: 100.781px;
  width: 100vw;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5px;
  }
`;

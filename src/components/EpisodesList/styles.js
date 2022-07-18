import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 10px;
  padding: 0px 50px;
  padding-bottom: 50px;

  > h2 {
    text-align: center;
    margin-top: 40px;
    color: white;
    font-weight: 400;
    opacity: 0.4;
    font-size: 22px;
  }
`;

export const Arrow = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: white;
  opacity: 0.5;
  color: #181818;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1;
  justify-self: center;
  margin-top: 20px;
  margin-bottom: 10px;
  user-select: none;
`;

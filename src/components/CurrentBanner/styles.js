import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;
  height: max-content;
  min-height: 400px;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 35%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${(props) => props.imgUrl}) no-repeat center;
  background-size: cover;
  background-position: center, right;
  color: white;
  padding: 50px;

  h2 {
    max-width: 450px;
  }

  > p {
    max-width: 450px;
    opacity: 0.6;
    line-height: 26px;
  }
`;

export const Details = styled.section`
  display: flex;
  gap: 22px;
  align-items: center;

  p {
    font-size: 12px;
  }
`;

export const SeasonSelect = styled.select`
  background: #3d3d3d;
  min-width: max-content;
  color: white;
  width: 150px;
  border: none;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  option {
    background: #181818;
  }
`;

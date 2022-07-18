import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: url(${(props) => props.imgUrl}) no-repeat center;
    background-size: cover;
    z-index: -1;
    transition: 0.4s;
  }

  &:hover::after {
    transform: scale(1.2);
  }

  ${(props) =>
    props.isSelected &&
    css`
      border: 5px solid #fff;
    `}

  > div {
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    color: white;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    transition: 0.4s;

    &:hover {
      background: rgba(55, 0, 0, 0.5);
    }
  }
`;

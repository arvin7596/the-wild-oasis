import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.direction === "horizontal" &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `}
  ${(props) =>
    props.direction === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  direction: "vertical",
};

export default Row;

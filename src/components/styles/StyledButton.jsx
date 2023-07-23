import styled from "styled-components";

const WIDTH = 100;

export const StyledButton = styled.button`
    background: transparent;
    border: solid 1px;
    padding: 12px;
    border-radius: 5px;
    cursor: pointer;
    width: ${WIDTH}px;
    margin: ${({ $margin = 0 }) => `${$margin}px`};
    transition: background 0.3s, color 0.3s;
    color: ${({ $primary }) => ($primary ? "salmon" : "white")};

    &:hover {
        background: ${({ $primary }) => ($primary ? "salmon" : "white")};
        color: ${({ $primary }) => ($primary ? "white" : "salmon")};
    }
`;
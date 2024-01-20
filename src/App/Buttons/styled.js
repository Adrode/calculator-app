import styled, { css } from "styled-components";

export const ContainerStyled = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 10px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const Button = styled.div`
    flex-basis: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid black;
    background-color: ${({ theme }) => theme.color.darkGray};

    ${({ $size }) => $size && css`
        flex-basis: 100px;
    `};

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: none;
    }
`;
import styled from "styled-components";

export const ResultStyled = styled.div`
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.green};
    padding: 10px;
    margin-bottom: 20px;

    border-radius: 5px;
    text-align: right;

    font-family: monospace;
    font-size: 150%;
`;
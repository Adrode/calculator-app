import styled from "styled-components";

export const ResultStyled = styled.div`
    background-color: ${({ theme }) => theme.color.black};
    padding: 10px;
    margin-bottom: 20px;

    border-radius: 5px;
    text-align: right;
`;
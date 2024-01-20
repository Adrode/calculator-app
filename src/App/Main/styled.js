import styled from "styled-components";

export const MainStyled = styled.main`
    margin: 0px auto;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.grey};
    max-width: 400px;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 5px 5px 5px ${({ theme }) => theme.color.black};
`;
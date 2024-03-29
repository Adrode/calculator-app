import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    &, ::before, ::after {
        box-sizing: inherit;
    }
    
    body {
        background-color: ${({ theme }) => theme.color.teal};
        color: ${({ theme }) => theme.color.white};

        font-family: 'Roboto', sans-serif;
    }
`;
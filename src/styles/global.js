import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;

        ::-webkit-scrollbar {
            width: 7px;
        }
        
        ::-webkit-scrollbar-track {
            background: #383838;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #fff;
            border-radius: 999px;
        }
    }

    body {
        background-color: #181818;
        min-height: 100vh;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;

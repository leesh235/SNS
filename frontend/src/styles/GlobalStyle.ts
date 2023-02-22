import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *, *::before, *::after{
        box-sizing: border-box;
    }
    body {
        background-color: white;
    }
    main{
        background-color: rgb(233, 235, 238);
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    button{
        cursor: pointer;
        outline: none;
    }
    input{
        outline: none;
    }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;  
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

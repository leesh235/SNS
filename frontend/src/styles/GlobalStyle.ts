import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        margin: 0;
        padding: 0;  
    }
    body {
        box-sizing: border-box;
        background-color: white;
    }
    main{
        background-color: rgb(240, 242, 245);
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

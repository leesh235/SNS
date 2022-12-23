import styled from "../../../styles/theme-components";
import { Link } from "react-router-dom";

interface StyleProps {
    width?: string;
    height?: string;
    fontSize?: string;
    fontWeight?: number;
    fontColor?: string;
    backgroundColor?: string;
    margin?: string;
}

const Layout = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.width || "364px"};
    height: ${(props) => props.height || "48px"};
    border: none;
    border-radius: 6px;
    margin: ${(props) => props.margin || "0"};
    background-color: ${(props) =>
        props.backgroundColor || props.theme.color.seaBule};
    a {
        width: 100%;
        font-size: ${(props) => props.fontSize || "20px"};
        font-weight: ${(props) => props.fontWeight || 700};
        color: ${(props) => props.fontColor || props.theme.color.white};
        text-align: center;
        line-height: ${(props) => props.height || "48px"};
    }
`;

interface Props {
    text?: string;
    to: string;
    cssObj?: {
        width?: string;
        height?: string;
        fontSize?: string;
        fontWeight?: number;
        fontColor?: string;
        backgroundColor?: string;
        margin?: string;
    };
}

export const BagicLink = ({ to, cssObj, text = "링크" }: Props) => {
    return (
        <Layout {...cssObj}>
            <Link to={to}>{text}</Link>
        </Layout>
    );
};

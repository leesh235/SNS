import styled from "../../styles/theme-components";

const Layout = styled.label<Props>`
    width: ${(props) => `calc(${props.width} - 32px)`};
    height: ${(props) => props.height};
    padding: 0 16px;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.white};
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    line-height: ${(props) => props.height};
    color: ${(props) => props.theme.color.lightBlack};
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
    cursor: pointer;
`;

interface Props {
    width?: string;
    height?: string;
    htmlFor: string;
}

export const Label = ({ htmlFor, width = "100%", height = "32px" }: Props) => {
    return (
        <Layout width={width} height={height} htmlFor={htmlFor}>
            댓글 달기
        </Layout>
    );
};

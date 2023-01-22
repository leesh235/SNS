import styled from "../../../styles/theme-components";

const Layout = styled.button`
    width: 122px;
    height: 36px;
    border-radius: 6px;
    border: 0px;
    outline: none;
    margin: 0 10px 0 0;
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 15px;
    font-weight: 600;
    color: ${(props) => props.theme.color.white};
`;

interface Props {
    text: string;
    type?: "submit" | "button" | "reset";
    onClick: React.MouseEventHandler;
}
export const InvisibleButton = ({ text, onClick, type = "button" }: Props) => {
    return (
        <Layout type={type} onClick={onClick}>
            {text}
        </Layout>
    );
};

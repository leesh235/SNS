import styled from "../../../styles/theme-components";

const Layout = styled.span`
    width: auto;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${(props) => props.theme.color.seaBule};
    cursor: pointer;
    :hover {
        text-decoration: underline;
    }
`;

const Icon = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    border: 1px solid ${(props) => props.theme.color.seaBule};
    color: ${(props) => props.theme.color.seaBule};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Text = styled.div`
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    color: ${(props) => props.theme.color.seaBule};
    margin-left: 12px;
`;

interface Props {
    text: string;
    onClick: React.MouseEventHandler;
}

export const AddButton = ({ text, onClick }: Props) => {
    return (
        <Layout onClick={onClick}>
            <Icon></Icon>
            <Text>{text}</Text>
        </Layout>
    );
};

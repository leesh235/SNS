import styled from "../../styles/theme-components";

const Layout = styled.div`
    width: 100%;
    font-size: 12px;
    color: ${(props) => props.theme.color.red};
`;

interface Props {
    message: string;
}

export const ErrorMessage = ({ message }: Props) => {
    return <Layout>{message}</Layout>;
};

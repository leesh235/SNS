import styled from "../../styles/theme-components";

const Layout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

interface Props {
    children: React.ReactNode;
}

export const ModalLayout = ({ children }: Props) => {
    return <Layout>{children}</Layout>;
};

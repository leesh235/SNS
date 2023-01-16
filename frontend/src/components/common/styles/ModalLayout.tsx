import React from "react";
import styled from "../../../styles/theme-components";

const Layout = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 900;
`;

interface Props {
    children: React.ReactNode;
    id?: string;
    onClosClick: any;
}

export const ModalLayout = ({
    id = "_modal",
    children,
    onClosClick,
}: Props) => {
    const handleClick: React.MouseEventHandler = (e) => {
        if (e.target !== e.currentTarget) return;
        onClosClick();
    };

    return (
        <Layout id={id} onClick={handleClick}>
            {children}
        </Layout>
    );
};

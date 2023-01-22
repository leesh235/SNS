import styled from "../../styles/theme-components";
import React from "react";
import { useModal } from "../../hooks/common/useModal";

const Layout = styled.span`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const SeeMore = styled.span<{ width?: string }>`
    width: ${(props) => props.width || "344px"};
    height: auto;
    padding: 8px;
    border-radius: 6px;
    border: 0px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    position: absolute;
    top: 45px;
    right: 0px;
    z-index: 9;
`;

interface Props {
    children: React.ReactNode;
    width?: string;
    flag?: boolean;
}

export const SeeMoreLayout = ({ children, width, flag = false }: Props) => {
    const { modal, handleModal } = useModal(true);

    return (
        <Layout onClick={handleModal}>
            {React.Children.toArray(children)[0]}
            {modal && !flag && (
                <SeeMore width={width}>
                    {React.Children.toArray(children).map((child, idx) => {
                        if (idx > 0) return child;
                    })}
                </SeeMore>
            )}
        </Layout>
    );
};

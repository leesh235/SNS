import React from "react";
import styled from "../../../styles/theme-components";

const Layout = styled.button<StypeProps>`
    width: ${(props) => (props.radius ? `${props.radius * 2}px` : "36px")};
    height: ${(props) => (props.radius ? `${props.radius * 2}px` : "36px")};
    border-radius: ${(props) => (props.radius ? `${props.radius}px` : "18px")};
    border: ${(props) => (props.color ? "1px" : "0px")} solid
        ${(props) => props.theme.color.lightGray};
    background-color: ${(props) => props.color || props.theme.color.gray};
    position: absolute;
    top: 15px;
    right: 15px;
`;

interface StypeProps {
    radius?: number;
    color?: string;
}

interface Props extends StypeProps {
    onClick?: React.MouseEventHandler;
}

export const CloseButton = ({ onClick, radius, color }: Props) => {
    return (
        <Layout type="button" onClick={onClick} radius={radius} color={color}>
            X
        </Layout>
    );
};

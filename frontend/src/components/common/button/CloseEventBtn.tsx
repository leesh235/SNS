import { useEffect } from "react";
import styled from "../../../styles/theme-components";

const Wrapper = styled.div<StyleProps>`
    border-radius: 6px;
    border: 0px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    position: absolute;
    padding: 8px;

    width: ${(props) => props.width};
    height: ${(props) => props.height};
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    z-index: ${(props) => props.zIndenx};
`;

interface StyleProps {
    width?: string;
    height?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    zIndenx?: string;
}

interface Props extends StyleProps {
    closeFunc: (e: any) => void;
    children: React.ReactNode;
}

export const CloseEventBtn = ({
    closeFunc,
    children,
    width,
    height,
    top,
    bottom,
    left,
    right,
    zIndenx,
}: Props) => {
    useEffect(() => {
        window.addEventListener("click", closeFunc);
        return () => {
            window.removeEventListener("click", closeFunc);
        };
    }, []);

    return (
        <Wrapper
            width={width}
            height={height}
            top={top}
            bottom={bottom}
            left={left}
            right={right}
            zIndenx={zIndenx}
        >
            {children}
        </Wrapper>
    );
};

CloseEventBtn.defaultProps = {
    width: "328px",
    height: "36px",
};

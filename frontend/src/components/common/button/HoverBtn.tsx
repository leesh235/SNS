import styled from "../../../styles/theme-components";

const Button = styled.button<StyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 6px;
    font-size: ${(props) => props.fontSize || "12px"};
    font-weight: ${(props) => props.fontWeight || 400};
    color: ${(props) => props.fontColor};
    background-color: ${(props) => props.theme.color.white};
    :hover {
        background-color: ${(props) => props.theme.color.gray};
    }
    cursor: pointer;
`;

interface StyleProps {
    width?: string;
    height?: string;
    fontSize?: string;
    fontWeight?: number;
    fontColor?: string;
}

interface Props extends StyleProps {
    onClick?: React.MouseEventHandler;
    text: string;
    fs?: string;
    fm?: string;
}

export const HoverBtn = ({ text, onClick, width, height, fs, fm }: Props) => {
    return (
        <Button
            onClick={onClick}
            width={width}
            height={height}
            fontSize={fs}
            fontWeight={500}
        >
            {text}
        </Button>
    );
};

HoverBtn.defaultProps = {
    width: "100%",
    height: "36px",
    fs: "15px",
    fm: "0 0 0 40px",
};

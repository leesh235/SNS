import styled from "../../../styles/theme-components";
import { Text } from "../Text";

const Button = styled.div<StyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.white};
    :hover {
        background-color: ${(props) => props.theme.color.gray};
    }
    cursor: pointer;
`;

interface StyleProps {
    width?: string;
    height?: string;
}

interface Props extends StyleProps {
    onClick?: () => void;
    text: string;
    fs?: string;
    fm?: string;
}

export const HoverBtn = ({ text, onClick, width, height, fs, fm }: Props) => {
    return (
        <Button onClick={onClick} width={width} height={height}>
            <Text
                text={text}
                cssObj={{
                    fontSize: fs,
                    fontWeight: 500,
                    margin: fm,
                }}
            />
        </Button>
    );
};

HoverBtn.defaultProps = {
    width: "100%",
    height: "36px",
    fs: "15px",
    fm: "0 0 0 40px",
};

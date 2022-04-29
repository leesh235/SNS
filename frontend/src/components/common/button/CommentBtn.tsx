import styled from "../../../styles/theme-components";

const Wrapper = styled.label<StyleProps>`
    width: ${(props) => `calc(${props.width} - 32px)`};
    height: ${(props) => props.height};
    padding: 0 16px;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.white};
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    line-height: ${(props) => props.height};
    color: ${(props) => props.theme.color.lightBlack};
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
    cursor: pointer;
`;

interface StyleProps {
    width?: string;
    height?: string;
}

interface Props extends StyleProps {}

export const CommentBtn = ({ width, height }: Props) => {
    return (
        <Wrapper width={width} height={height} htmlFor="comment">
            댓글 달기
        </Wrapper>
    );
};

CommentBtn.defaultProps = {
    width: "100%",
    height: "32px",
};

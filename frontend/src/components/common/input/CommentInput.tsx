import styled from "../../../styles/theme-components";
import { Link } from "react-router-dom";
import { routes } from "../../../utils/routes";

const Wrapper = styled.form<StyleProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Icon = styled.img`
    width: 32px;
    height: 32px;
    margin: 0 6px 0 0;
    border-radius: 20px;
    cursor: pointer;
`;

const Input = styled.input`
    width: calc(100% - 24px);
    height: calc(100% - 16px);
    padding: 8px 12px;
    border: 0;
    border-radius: 50px;
    font-size: 15px;
    color: ${(props) => props.theme.color.black};
    background-color: ${(props) => props.theme.color.gray};
    ::placeholder {
        font-size: 15px;
        color: ${(props) => props.theme.color.lightBlack};
    }
`;

interface StyleProps {
    width?: string;
    height?: string;
}

interface Props extends StyleProps {
    writer: string;
    image: string;
    placeholder?: string;
    onSubmit?: any;
    defaultValue?: string;
}

export const CommentInput = ({
    width,
    height,
    placeholder,
    writer,
    image,
    onSubmit,
    defaultValue,
}: Props) => {
    return (
        <Wrapper width={width} height={height} onSubmit={onSubmit}>
            <Link
                to={{
                    pathname: `${routes.userInfo}${writer}`,
                }}
            >
                <Icon src={image} />
            </Link>
            <Input
                id="comment"
                placeholder={placeholder}
                defaultValue={defaultValue}
            />
        </Wrapper>
    );
};

CommentInput.defaultProps = {
    width: "100%",
    height: "36px",
    placeholder: "댓글을 입력하세요...",
    defaultValue: "",
};

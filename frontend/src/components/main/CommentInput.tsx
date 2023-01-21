import styled from "../../styles/theme-components";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";
import { useUserInfo } from "../../hooks/common/useUserInfo";
import { useForm } from "../../hooks/common/useForm";
import { writeCommentValidate } from "../../utils/validate";
import { useEffect } from "react";

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
    label?: string;
    placeholder?: string;
    onSubmit?: any;
    defaultValue?: string | undefined;
}

export const CommentInput = ({
    label,
    width,
    height,
    placeholder,
    onSubmit,
    defaultValue,
}: Props) => {
    const { data } = useUserInfo();

    const { errors, setOption, handleSubmit } = useForm({
        initValues: { contents: defaultValue },
        validate: writeCommentValidate,
        onSubmit: (formData: any) => {
            if (!data) {
                alert("로그인 후 이용해주세요");
                return;
            }
            onSubmit(formData);
        },
    });

    return (
        <Wrapper width={width} height={height} onSubmit={handleSubmit}>
            <Link
                to={{
                    pathname: `${routes.userInfo}${data.email}`,
                }}
            >
                <Icon src={data.profileImage} />
            </Link>
            <Input
                defaultValue={defaultValue}
                id={`${label}_comment`}
                {...setOption("contents")}
                placeholder={placeholder}
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

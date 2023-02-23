import styled from "../../../styles/theme-components";

const Label = styled.label`
    width: 100%;
    max-width: 120px;
    height: 32px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.white};
    padding: 0 16px;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    line-height: 32px;
    cursor: pointer;
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
`;

interface Props {
    htmlFor: string;
}

export const FileButton2 = ({ htmlFor }: Props) => {
    return (
        <Label
            htmlFor={htmlFor}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            사진 추가
        </Label>
    );
};

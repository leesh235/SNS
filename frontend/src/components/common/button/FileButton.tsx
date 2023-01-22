import styled from "../../../styles/theme-components";

const Label = styled.label`
    width: 330px;
    height: 36px;
    background-color: ${(props) => props.theme.color.lightSeaBlue};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
    color: ${(props) => props.theme.color.seaBule};
    :hover {
        background-color: ${(props) => props.theme.color.darkSeaBlue};
        color: ${(props) => props.theme.color.white};
    }
    cursor: pointer;
`;

interface Props {
    htmlFor: string;
}

export const FileButton = ({ htmlFor }: Props) => {
    return (
        <Label
            htmlFor={htmlFor}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            사진 업로드
        </Label>
    );
};

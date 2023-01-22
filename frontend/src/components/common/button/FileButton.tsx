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

const Input = styled.input`
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    position: fixed;
    top: -50px;
`;

interface Props {
    id: string;
    onChange: React.ChangeEventHandler;
}

export const FileButton = ({ id, onChange }: Props) => {
    return (
        <>
            <Label htmlFor={id}>사진 업로드</Label>
            <Input type="file" id={id} onChange={onChange} />
        </>
    );
};

import styled from "../../../styles/theme-components";

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

export const FileInput = ({ id, onChange }: Props) => {
    return <Input type="file" id={id} onChange={onChange} />;
};

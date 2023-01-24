import styled from "../../../styles/theme-components";
import theme from "../../../styles/theme";
import { HoverInput } from "../../common/input/HoverInput";
import { HoverButton } from "../../common/button/HoverButton";

const Layout = styled.form`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    > :nth-child(n + 2) {
        margin-top: 8px;
    }
`;

const ButtonFlexLayout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding-top: 10px;
    border-top: 1px solid ${(props) => props.theme.color.gray};

    > :nth-child(1) {
        margin-right: 5px;
    }
`;

interface Props {
    onSubmit: any;
    onClose: any;
    children?: React.ReactNode;
}

export const AddForm = ({ onSubmit, onClose, children }: Props) => {
    return (
        <Layout onSubmit={onSubmit}>
            {children}
            <ButtonFlexLayout>
                <HoverButton
                    text={"취소"}
                    cssObj={{ width: "62px" }}
                    onClick={onClose}
                />
                <HoverButton
                    text={"저장"}
                    cssObj={{
                        width: "62px",
                        fontColor: theme.color.white,
                        color: theme.color.seaBule,
                    }}
                    type={"submit"}
                />
            </ButtonFlexLayout>
        </Layout>
    );
};

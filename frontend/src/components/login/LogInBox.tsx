import styled from "../../styles/theme-components";
import theme from "../../styles/theme";
//functions
import { routes } from "../../utils/routes";
import { useModal } from "../../hooks/common/useModal";
//components
import { BagicButton } from "../common/button/BagicButton";
import { JoinForm } from "../join/JoinForm";
import { TextLink } from "../common/link/TextLink";
import { LoginForm } from "./LoginForm";
import { ModalLayout } from "../common/ModalLayout";

const Layout = styled.section`
    width: 396px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BoxLayout = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 366px;
    height: auto;
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

const Line = styled.div`
    width: 100%;
    max-width: 364px;
    border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
    margin: 0 0 20px 0;
`;

export const LogInBox = () => {
    const { modal, handleModal } = useModal();

    return (
        <>
            <Layout>
                <BoxLayout>
                    <LoginForm />
                    <Line />
                    <BagicButton
                        text={"새 계정 만들기"}
                        onClick={handleModal}
                        cssObj={{
                            width: "144px",
                            height: "48px",
                            backgroundColor: theme.color.lightGreen,
                            fontSize: "17px",
                        }}
                    />
                </BoxLayout>
            </Layout>
            {modal && (
                <ModalLayout>
                    <JoinForm onClose={handleModal} />
                </ModalLayout>
            )}
        </>
    );
};

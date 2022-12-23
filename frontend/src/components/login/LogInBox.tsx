import styled from "../../styles/theme-components";
import theme from "../../styles/theme";
//functions
import { routes } from "../../utils/routes";
import { useModal } from "../../hooks/useModal";
//components
import { BagicButton } from "../common/button/BagicButton";
import { Join } from "../modal/Join";
import { LinkText } from "../common/button/LinkText";
import { LoginForm } from "./LoginForm";

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
    const { modal, onModalClick } = useModal();

    return (
        <>
            <Layout>
                <BoxLayout>
                    <LoginForm />
                    <Line />
                    <BagicButton
                        text={"새 계정 만들기"}
                        onClick={onModalClick}
                        cssObj={{
                            width: "144px",
                            height: "48px",
                            backgroundColor: theme.color.lightGreen,
                            fontSize: "17px",
                        }}
                    />
                </BoxLayout>
                <LinkText to={routes.forget} text={"페이지 만들기."} fw={600} />
            </Layout>
            {modal && <Join onClose={onModalClick} />}
        </>
    );
};

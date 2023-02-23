import styled from "../../../styles/theme-components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
//functions
import theme from "../../../styles/theme";
import { useModal } from "../../../hooks/common/useModal";
//components
import { SelectImage } from "../../common/card/SelectImage";
import { Text } from "../../common/Text";
import { HoverButton } from "../../common/button/HoverButton";
import { ModalLayout } from "../../common/styles/ModalLayout";
import { ProfileImage } from "./ProfileImage";
import { CoverImage } from "./CoverImage";

const Layout = styled.section`
    background-color: ${(props) => props.theme.color.white};
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FlexLayout = styled.article`
    max-width: 908px;
    width: 100%;
    height: 84px;
    display: flex;
    flex-direction: row;
`;

const UserLayout = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 194px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    > :nth-child(2) {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: auto;
        > :nth-child(1) {
            margin-right: 10px;
        }
    }
`;

export const ProfileTop = () => {
    const coverImgModal = useModal();

    const { loading, data, error } = useSelector(
        (state: any) => state?.profile?.profile
    );
    const login = useSelector((state: any) => state?.profile?.simple);
    const isFriend = useSelector((state: any) => state?.friends?.isFriend);

    useEffect(() => {}, [loading]);

    return (
        <>
            <Layout>
                <CoverImage
                    data={data}
                    isYou={data?.email === login.data?.email}
                />

                <FlexLayout>
                    <ProfileImage
                        profile={data}
                        isYou={data?.email === login.data?.email}
                    />

                    <UserLayout>
                        <Text
                            text={data?.nickName}
                            tag={"span"}
                            cssObj={{
                                fontSize: " 32px",
                                fontWeight: 700,
                            }}
                        />
                    </UserLayout>
                </FlexLayout>
            </Layout>
            {coverImgModal.modal && (
                <ModalLayout onCloseClick={coverImgModal.handleModal}>
                    <SelectImage closeFunc={coverImgModal.handleModal} />
                </ModalLayout>
            )}
        </>
    );
};

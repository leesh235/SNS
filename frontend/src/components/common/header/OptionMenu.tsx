import styled from "../../../styles/theme-components";
import { useModal } from "../../../hooks/common/useModal";
import { useUserInfo } from "../../../hooks/common/useUserInfo";
import { AppIcon } from "../../../assets/icon/AppIcon";
import { ArrowDIcon } from "../../../assets/icon/ArrowDIcon";
import { BellIcon } from "../../../assets/icon/BellIcon";
import { MessageIcon } from "../../../assets/icon/MessageIcon";
import { SeeMore } from "./SeeMore";

const Layout = styled.span`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
    > :nth-child(n) {
        margin-right: 8px;
    }
    position: relative;
`;

const IconLayout = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.color.gray};
    margin: 0px;
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const rightMenuList = [
    <AppIcon />,
    <MessageIcon />,
    <BellIcon />,
    <ArrowDIcon />,
];

export const OptionMenu = () => {
    const userModal = useModal();

    const { data } = useUserInfo();

    return (
        <Layout>
            {rightMenuList.map((val, idx) => {
                if (idx === 3)
                    return (
                        <IconLayout key={idx} onClick={userModal.handleModal}>
                            {val}
                        </IconLayout>
                    );
                else return <IconLayout key={idx}>{val}</IconLayout>;
            })}
            {userModal.modal && (
                <SeeMore closeFunc={userModal.handleModal} user={data} />
            )}
        </Layout>
    );
};

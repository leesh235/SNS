import styled from "../../styles/theme-components";
import { useModal } from "../../hooks/common/useModal";
import { MoreIcon } from "../../assets/icon/MoreIcon";

const Layout = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background-color: ${(props) => props.theme.color.gray1};
    }
    cursor: pointer;
    position: relative;
`;

const SeeMore = styled.span<{ width?: string }>`
    width: ${(props) => props.width || "344px"};
    height: auto;
    padding: 8px;
    border-radius: 6px;
    border: 0px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    position: absolute;
    top: 45px;
    right: 0px;
    z-index: 9;
`;

interface Props {
    children: React.ReactNode;
    width?: string;
}

export const SeeMoreLayout = ({ children, width }: Props) => {
    const { modal, handleModal } = useModal();

    return (
        <Layout onClick={handleModal}>
            <MoreIcon />
            {modal && <SeeMore width={width}>{children}</SeeMore>}
        </Layout>
    );
};

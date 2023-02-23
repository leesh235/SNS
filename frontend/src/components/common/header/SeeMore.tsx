import styled from "../../../styles/theme-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//functions
import { logOut } from "../../../utils/authUtils";
import { authActionCreator } from "../../../modules/action/auth";
import { routes } from "../../../utils/routes";
//components
import { HoverButton } from "../button/HoverButton";
import { Text } from "../Text";

const Wrapper = styled.div`
    width: 200px;
    height: auto;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 20%);
    background-color: ${(props) => props.theme.color.white};
    position: absolute;
    top: 45px;
    display: flex;
    flex-direction: column;
    > :nth-child(1) {
        display: flex;
        align-items: center;
        column-gap: 10px;
        border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
        padding-bottom: 8px;
        margin-bottom: 8px;
    }
`;

const Icon = styled.img<{ size: string; margin?: string }>`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    margin: ${(props) => props.margin};
    border-radius: 20px;
    cursor: pointer;
`;

interface Props {
    closeFunc: any;
    user: any;
}

export const SeeMore = ({ closeFunc, user }: Props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(authActionCreator.logout());
        logOut();
    };

    useEffect(() => {
        window.addEventListener("click", closeFunc);
        return () => {
            window.removeEventListener("click", closeFunc);
        };
    }, []);

    return (
        <Wrapper>
            <Link
                to={{
                    pathname: `${routes.userInfo}${user?.userId}`,
                }}
                state={user?.userId}
            >
                <Icon size={"40px"} src={user?.profileImage} />
                <Text
                    tag="span"
                    text={`${user?.nickName}`}
                    cssObj={{
                        fontSize: "15px",
                        fontWeight: 600,
                        width: "auto",
                    }}
                />
            </Link>

            <div>
                <HoverButton text={"로그아웃"} onClick={handleClick} />
            </div>
        </Wrapper>
    );
};

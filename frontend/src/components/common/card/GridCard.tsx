import styled from "../../../styles/theme-components";
import { Link } from "react-router-dom";
import { useEffect, RefObject } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "../Image/Avatar";
import { Text } from "../Text";
import { routes } from "../../../utils/routes";

const Wrapper = styled.div`
    width: 210px;
    height: 210px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 10%);
`;

const TopWrapper = styled.div`
    width: 100%;
    height: 154px;
    cursor: pointer;
`;

const BottomWrapper = styled.div`
    width: calc(100% - 16px);
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
`;

const InfoWrapper = styled.div`
    width: calc(100% - 40px);
    height: 100%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

interface Props {
    postId: number;
    endView?: RefObject<HTMLDivElement> | undefined;
}

export const GridCard = ({ postId, endView }: Props) => {
    const user = useSelector((state: any) => state?.user?.loginInfo?.data);
    const post = useSelector(
        (state: any) => state?.post?.postDetails?.data?.[`${postId}`]
    );

    useEffect(() => {}, []);

    return (
        <Wrapper ref={endView}>
            <TopWrapper></TopWrapper>
            <BottomWrapper>
                <Link
                    to={{
                        pathname: `${routes.userInfo}${post?.userId}`,
                    }}
                    state={post?.userId}
                >
                    <Avatar radius={40} src={user?.profileImage} />
                </Link>
                <InfoWrapper>
                    <Text text={`${post?.contents?.slice(0, 43)}...`} />
                    <Text text={post?.createdAt} />
                </InfoWrapper>
            </BottomWrapper>
        </Wrapper>
    );
};

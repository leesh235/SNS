import styled from "../../../styles/theme-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "../../common/Image/Avatar";
import { Text } from "../../common/Text";
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
    post: {
        postId: number;
        userId: string;
        writer: string;
        contents: string;
        createdAt: string;
        images?: Array<String>;
        profileImage?: string;
        likequantity: number;
        commentquantity: number;
        likeStatus: boolean;
    };
}

export const PostGridCard = ({ post }: Props) => {
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector(
        (state: any) => state?.user?.loginInfo
    );

    return (
        <Wrapper>
            <TopWrapper></TopWrapper>
            <BottomWrapper>
                <Link
                    to={{
                        pathname: `${routes.userInfo}${post?.userId}`,
                    }}
                    state={post?.userId}
                >
                    <Avatar radius={40} src={data.profileImage} />
                </Link>
                <InfoWrapper>
                    <Text
                        text={`${post.contents.substr(0, 43)}${
                            post.contents.length < 43 ? "" : "..."
                        }`}
                    />
                    <Text text={post.createdAt} />
                </InfoWrapper>
            </BottomWrapper>
        </Wrapper>
    );
};

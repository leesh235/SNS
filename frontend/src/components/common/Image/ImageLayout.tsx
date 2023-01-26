import { useState } from "react";
import styled from "../../../styles/theme-components";
import theme from "../../../styles/theme";
import { Link } from "react-router-dom";
import { routes } from "../../../utils/routes";
import { Text } from "../Text";

const Layout = styled.div<{ cnt?: any }>`
    width: 100%;
    height: ${(props) => (props.cnt > 1 ? "590px" : "100%")};
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: space-between;
    position: relative;
`;

const Image = styled.img<{ cnt?: any }>`
    width: ${(props) => `calc(${99 / props.cnt}%)`};
    height: ${(props) => `calc(${99 / props.cnt}%)`};
    max-height: 500px;
`;

const Shadow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(99% / 2);
    height: calc(99% / 2);
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: rgba(96, 103, 112, 0.5);
`;

interface Props {
    post: {
        postId: number;
        images: Array<{ id: number; url: string }>;
    };
}

export const ImageLayout = ({ post }: Props) => {
    return (
        <Link
            to={{
                pathname: `${routes.detail}${post?.postId}`,
            }}
            style={{
                width: "100%",
                height: "100%",
                maxHeight: "590px",
            }}
        >
            <Layout cnt={post?.images.length}>
                {post?.images.map((val: any, idx: number) => {
                    if (idx < 4)
                        return (
                            <Image
                                key={val.id}
                                cnt={
                                    post?.images && post?.images?.length > 1
                                        ? 2
                                        : 1
                                }
                                src={`${val.url}`}
                            />
                        );
                })}
                {post?.images.length > 4 && (
                    <Shadow>
                        <Text
                            text={`+${post?.images.length - 4}장`}
                            tag={"span"}
                            cssObj={{
                                fontWeight: 550,
                                fontColor: theme.color.white,
                                fontSize: "45px",
                            }}
                        />
                    </Shadow>
                )}
            </Layout>
        </Link>
    );
};

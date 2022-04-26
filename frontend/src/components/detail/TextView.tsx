import styled from "../../styles/theme-components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Text } from "../common/Text";
import { Button2 } from "../common/button/Button2";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";
import { Input3 } from "../common/input/Input3";

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.color.white};
    display: flex;
    flex-direction: column;
`;

const Top = styled.article`
    width: 100%;
    height: 57px;
    display: flex;
    flex-direction: row;
`;

const Middle = styled.article`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${(props) => props.theme.color.lightGray};
`;

const Bottom = styled.article`
    width: calc(100% - 32px);
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 0 16px 8px 16px;
    padding-top: 8px;
    border-top: 1px solid ${(props) => props.theme.color.lightGray};
`;

const PostView = styled.div`
    padding: 16px 16px 12px 16px;
    width: calc(100% - 32px);
    min-height: 101px;
    height: auto;
    display: flex;
    flex-direction: column;
`;

const UserInfo = styled.div`
    width: 100%;
    height: 40px;
    display: grid;
    grid-template-columns: 40px auto 36px;
    grid-template-rows: repeat(2, 20px);
    column-gap: 10px;
    align-items: center;
    > :nth-child(1) {
        grid-column: 1 / span 1;
        grid-row: 1 / span 2;
    }
    > :nth-child(4) {
        grid-column: 3 / span 1;
        grid-row: 1 / span 2;
    }
`;

const Contents = styled.div`
    width: 100%;
    padding: 16px 0px 16px 0px;
    > span {
        word-break: break-all;
    }
`;

const OptionView = styled.div`
    width: 100%;
    height: 40px;
    margin-top: 6px;
    border-top: 1px solid ${(props) => props.theme.color.lightGray};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
`;

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Icon = styled.img<{ size: string; margin?: string }>`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    margin: ${(props) => props.margin};
    border-radius: 20px;
    cursor: pointer;
`;

export const TextView = () => {
    const { loading, data, error } = useSelector(
        (state: any) => state?.post?.postDetail
    );

    useEffect(() => {
        console.log(data);
    }, [loading]);

    return (
        <Wrapper>
            <Top></Top>
            <Middle>
                <PostView>
                    <UserInfo>
                        <Link
                            to={{
                                pathname: `${routes.userInfo}${data?.writer}`,
                            }}
                        >
                            <Icon size={"40px"} src={data?.profileImage} />
                        </Link>
                        <Text
                            text={`${data?.writer}`}
                            fs={"15px"}
                            fw={600}
                            lh={"20px"}
                        />
                        <FlexWrapper>
                            <Text
                                text={`${data?.createdAt}`}
                                fs={"12px"}
                                lh={"16px"}
                                tag={"span"}
                                width={"auto"}
                            />
                            <Text
                                text={"시간"}
                                fs={"12px"}
                                lh={"16px"}
                                tag={"span"}
                                width={"auto"}
                            />
                        </FlexWrapper>
                        <Text text={"목차"} fs={"12px"} lh={"16px"} />
                    </UserInfo>
                    <Contents>
                        <Text
                            tag={"span"}
                            text={data?.contents}
                            fs={"12px"}
                            lh={"16px"}
                        />
                    </Contents>
                </PostView>
                <OptionView>
                    <Button2 text={"좋아요"} width={"100%"} />
                    <Button2 text={"댓글 달기"} width={"100%"} />
                    <Button2 text={"공유하기"} width={"100%"} />
                </OptionView>
            </Middle>
            <Bottom>
                <FlexWrapper>
                    <Link
                        to={{
                            pathname: `${routes.userInfo}${data?.writer}`,
                        }}
                    >
                        <Icon
                            size={"32px"}
                            margin={"0 6px 0 0"}
                            src={data?.profileImage}
                        />
                    </Link>
                    <Input3 placeholder={"댓글을 입력하세요..."} />
                </FlexWrapper>
            </Bottom>
        </Wrapper>
    );
};

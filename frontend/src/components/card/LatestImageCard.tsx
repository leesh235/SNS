import styled from "../../styles/theme-components";
import { Link } from "react-router-dom";
import { BoxShadow } from "../styles/BoxShadow";
import { Text } from "../common/Text";
import theme from "../../styles/theme";
import { useSelector } from "react-redux";
import { routes } from "../../utils/routes";

const Wrapper = styled.article`
    width: calc(100% - 20px);
    height: calc(auto - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px;
`;

const FlexWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const ImageWrapper = styled.div`
    width: 100%;
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 5px;
`;

const Image = styled.img`
    width: 100%;
    height: 107px;
    border-radius: 6px;
`;

const UrlBtn = styled.div`
    width: 130px;
    height: 30px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background-color: ${(props) => props.theme.color.lightGray};
    }
    cursor: pointer;
`;

interface Props {
    handleUrl: any;
}

export const LatestImageCard = ({ handleUrl }: Props) => {
    const { loading, data, error } = useSelector(
        (state: any) => state?.image?.latestImage
    );
    return (
        <BoxShadow tag={"article"}>
            <Wrapper>
                <FlexWrapper>
                    <Text
                        text={"사진"}
                        fs={"20px"}
                        fw={700}
                        lh={"24px"}
                        width={"auto"}
                    />
                    <UrlBtn
                        onClick={() => {
                            handleUrl({ id: 3 });
                        }}
                    >
                        <Text
                            text={"사진 모두 보기"}
                            fs={"17px"}
                            lh={"20px"}
                            width={"auto"}
                            fc={theme.color.seaBule}
                        />
                    </UrlBtn>
                </FlexWrapper>
                <ImageWrapper>
                    {data?.map((val: string, idx: number) => {
                        return (
                            <Link
                                to={{ pathname: `${routes.detail}/:postId` }}
                                key={idx}
                            >
                                <Image src={val} />
                            </Link>
                        );
                    })}
                </ImageWrapper>
            </Wrapper>
        </BoxShadow>
    );
};

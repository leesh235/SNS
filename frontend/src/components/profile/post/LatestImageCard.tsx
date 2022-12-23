import styled from "../../../styles/theme-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//functions
import theme from "../../../styles/theme";
import { routes } from "../../../utils/routes";
//components
import { BoxShadow } from "../../common/styles/BoxShadow";
import { Text } from "../../common/Text";

const Layout = styled.article`
    width: calc(100% - 20px);
    height: calc(auto - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px;
`;

const FlexLayout = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const ImageLayout = styled.div`
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
            <Layout>
                <FlexLayout>
                    <Text
                        text={"사진"}
                        tag={"span"}
                        cssObj={{
                            fontSize: "20px",
                            fontWeight: 700,
                        }}
                    />
                    <UrlBtn
                        onClick={() => {
                            handleUrl({ id: 2 });
                        }}
                    >
                        <Text
                            text={"사진 모두 보기"}
                            tag={"span"}
                            cssObj={{
                                fontSize: "17px",
                                fontColor: theme.color.seaBule,
                            }}
                        />
                    </UrlBtn>
                </FlexLayout>
                <ImageLayout>
                    {data?.map((val: any, idx: number) => {
                        return (
                            <Link
                                to={{
                                    pathname: `${routes.detail}${val.postId}`,
                                }}
                                key={val.id}
                            >
                                <Image src={val.url} />
                            </Link>
                        );
                    })}
                </ImageLayout>
            </Layout>
        </BoxShadow>
    );
};

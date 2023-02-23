import styled from "../../../styles/theme-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//functions
import theme from "../../../styles/theme";
import { routes } from "../../../utils/routes";
import { useGetImage } from "../../../hooks/profile/useGetImage";
//components
import { BoxShadow } from "../../common/styles/BoxShadow";
import { Text } from "../../common/Text";
import { HoverButton } from "../../common/button/HoverButton";

const Layout = styled.article`
    width: 100%;
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

interface Props {
    handleUrl: any;
}

export const LatestImageCard = ({ handleUrl }: Props) => {
    const { email } = useParams();
    const { loading, data, error } = useGetImage("latest", email);
    console.log(data);
    return (
        <BoxShadow tag={"article"}>
            <Layout>
                <FlexLayout>
                    <Text
                        text={"사진"}
                        tag={"span"}
                        cssObj={{
                            width: "auto",
                            fontSize: "20px",
                            fontWeight: 700,
                        }}
                    />
                    <HoverButton
                        text="사진 모두 보기"
                        cssObj={{
                            fontColor: theme.color.seaBule,
                            width: "150px",
                            height: "30px",
                            fontWeight: 400,
                            fontSize: "17px",
                        }}
                        onClick={() => {
                            handleUrl({ id: 2 });
                        }}
                    />
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
                                <Image src={val.imageUrl} />
                            </Link>
                        );
                    })}
                </ImageLayout>
            </Layout>
        </BoxShadow>
    );
};

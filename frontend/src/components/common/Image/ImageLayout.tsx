import { MouseEventHandler, useState } from "react";
import styled from "../../../styles/theme-components";
import { Link } from "react-router-dom";
import { routes } from "../../../utils/routes";

const Layout = styled.div<{ cnt?: any }>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: space-between;
    position: relative;
    transition: all 0.3s ease-out;
`;

const RightBtn = styled.div`
    width: 50px;
    height: 100%;
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
`;

const LeftBtn = styled.div`
    width: 50px;
    height: 100%;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
`;

const FlexLayout = styled.div`
    display: flex;
    transition: all 0.3s ease-out;
`;

const Image = styled.img<{ cnt?: any }>`
    display: ${(props) => props.cnt && "none"};
    flex: none;
    width: 100%;
    height: 100%;
    max-height: 500px;
`;

interface Props {
    postId: number;
    images: Array<{ id: number; imageUrl: string }>;
}

export const ImageLayout = ({ postId, images }: Props) => {
    const [count, setCount] = useState(0);

    const handleCountClick: MouseEventHandler = (e) => {
        const { id } = e.target as HTMLDivElement;
        if (id === "left_btn") {
            if (count > 0) setCount((prev) => prev - 1);
            else setCount(images.length - 1);
        } else {
            if (count < images.length - 1) setCount((prev) => prev + 1);
            else setCount(0);
        }
    };

    return (
        <Layout cnt={images.length}>
            <LeftBtn id="left_btn" onClick={handleCountClick}></LeftBtn>
            <Link
                to={{
                    pathname: `${routes.detail}${postId}`,
                }}
                style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "590px",
                }}
            >
                <FlexLayout>
                    {images.map((val: any, idx: number) => {
                        if (count === idx)
                            return (
                                <Image
                                    key={val.id}
                                    cnt={false}
                                    src={`${val.imageUrl}`}
                                />
                            );
                        else {
                            <Image
                                key={val.id}
                                cnt={true}
                                src={`${val.imageUrl}`}
                            />;
                        }
                    })}
                </FlexLayout>
            </Link>

            <RightBtn id="right_btn" onClick={handleCountClick}></RightBtn>
        </Layout>
    );
};

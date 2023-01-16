import { useSelector } from "react-redux";

export const useGetDetail = (type: string = "allPosts", id: number = 0) => {
    const data = useSelector((state: any) => state.post[type].data[id]);

    return { post: data };
};

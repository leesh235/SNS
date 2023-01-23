import { useSelector } from "react-redux";
import { ListType } from "../../types/lib/post";

interface Props extends ListType {
    id: number;
}
export const useGetDetail = ({ type = "allPosts", id = 0 }: Props) => {
    const data = useSelector((state: any) => state.post[type].data[id]);

    return { post: data };
};

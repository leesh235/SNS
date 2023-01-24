import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { informationActionCreator } from "../../modules/action/information";

export const useInfoFunc = ({
    type = "ability",
    id,
}: {
    type?: "ability" | "school" | "university";
    id: number;
}) => {
    const dispatch = useDispatch();

    const handleDelete = useCallback(() => {
        if (!id) return;
        if (window.confirm("직장 정보를 삭제하시겠습니까?")) {
            if (type === "ability")
                dispatch(informationActionCreator.removeJob({ id }));
            else if (type === "school")
                dispatch(informationActionCreator.removeSchool({ id }));
            else dispatch(informationActionCreator.removeUniversity({ id }));
        }
    }, [dispatch]);

    const handleWrite = useCallback(
        ({ id, formData }: { id?: number; formData: any }) => {
            if (type === "ability") {
                dispatch(informationActionCreator.addJob({ ...formData, id }));
            } else if (type === "school") {
                dispatch(
                    informationActionCreator.addSchool({ ...formData, id })
                );
            } else {
                dispatch(
                    informationActionCreator.addUniversity({ ...formData, id })
                );
            }
        },
        [dispatch]
    );

    return { handleDelete, handleWrite };
};

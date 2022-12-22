import { useState, useEffect } from "react";

interface Props {}

export const useModal = (): Props => {
    const [modal, setModal] = useState<boolean>(false);

    const handleModalClick = () => {
        if (modal) setModal(false);
        else setModal(true);
    };

    return { modal, onModalClick: handleModalClick };
};

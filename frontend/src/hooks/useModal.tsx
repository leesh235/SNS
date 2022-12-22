import { useState, useEffect } from "react";

interface Returns {
    modal: boolean;
    onModalClick: () => void;
}

export const useModal = (): Returns => {
    const [modal, setModal] = useState<boolean>(false);

    const handleModalClick = () => {
        if (modal) setModal(false);
        else setModal(true);
    };

    return { modal, onModalClick: handleModalClick };
};

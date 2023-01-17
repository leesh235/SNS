import React, { useState, useEffect } from "react";

export const useModal = () => {
    const [modal, setModal] = useState<boolean>(false);

    const handleModal: React.MouseEventHandler = (e) => {
        setModal(!modal);
    };

    const ListenerModal = (e: MouseEvent) => {
        if (modal) setModal(false);
    };

    useEffect(() => {
        if (!modal) return;

        window.addEventListener("click", ListenerModal);
        return () => {
            window.removeEventListener("click", ListenerModal);
        };
    }, [modal]);

    return { modal, handleModal, ListenerModal };
};

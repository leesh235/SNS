import React, { useState, useEffect } from "react";

export const useModal = (global: boolean = false) => {
    const [modal, setModal] = useState<boolean>(false);

    const handleModal: React.MouseEventHandler = (e) => {
        setModal(!modal);
    };

    const ListenerModal = (e: MouseEvent) => {
        if (modal) setModal(false);
    };

    useEffect(() => {
        if (!modal || !global) return;

        window.addEventListener("click", ListenerModal);
        return () => {
            window.removeEventListener("click", ListenerModal);
        };
    }, [modal]);

    return { modal, handleModal, ListenerModal };
};

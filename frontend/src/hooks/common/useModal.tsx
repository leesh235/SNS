import React, { useState, useEffect } from "react";

export const useModal = (global: boolean = false, reset: any = null) => {
    const [modal, setModal] = useState<boolean>(false);

    const CloseModal = () => {
        setTimeout(() => {
            setModal(false);
        }, 1000);
    };

    const handleModal: React.MouseEventHandler = (e) => {
        setModal(!modal);
        if (reset) reset();
    };

    const ListenerModal = (e: MouseEvent) => {
        if (modal) {
            setModal(false);
            if (reset) reset();
        }
    };

    useEffect(() => {
        if (!modal || !global) return;

        window.addEventListener("click", ListenerModal);
        return () => {
            window.removeEventListener("click", ListenerModal);
        };
    }, [modal]);

    return { modal, handleModal, ListenerModal, CloseModal };
};

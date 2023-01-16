import React, { useState, useEffect } from "react";

export const useModal = () => {
    const [modal, setModal] = useState<boolean>(false);

    const handleModal: React.MouseEventHandler = (e) => {
        setModal(!modal);
    };

    useEffect(() => {}, [modal]);

    return { modal, handleModal };
};

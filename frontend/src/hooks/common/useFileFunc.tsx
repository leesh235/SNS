import { useEffect, useState } from "react";

export const useFileFunc = () => {
    const [file, setFile] = useState<File>();

    const setOptions = (id: string) => {
        const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
            const { files } = e.currentTarget;
            if (files !== null) {
                setFile(files[0]);
            }
        };
        return { id, onChange };
    };

    const handleRemoveFile = () => {
        setFile(undefined);
    };

    useEffect(() => {}, [file]);

    return { file, setOptions, handleRemoveFile };
};

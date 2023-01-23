import { useState, useEffect } from "react";

interface Props {
    initValues?: any;
    onSubmit: any;
    validate?: any;
}

export const useForm = ({ initValues, onSubmit, validate = null }: Props) => {
    const [values, setValues] = useState<any>(initValues);
    const [errors, setErrors] = useState<any>({});
    const [isLoaing, setIsLoading] = useState<boolean>(false);

    const setOption = (name: string) => {
        const onChange: React.FormEventHandler<
            HTMLInputElement | HTMLTextAreaElement
        > = (e) => {
            setValues({ ...values, [name]: e.currentTarget.value });
        };
        return { name, onChange };
    };

    const getValue = (name: string) => {
        if (name) return values[name];
        else return values;
    };

    const setValue = (name: string, value: string | number) => {
        setValues({ ...values, [name]: value });
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (validate) setErrors(validate(values));
    };

    useEffect(() => {
        if (isLoaing) {
            if (Object.keys(errors).length === 0) {
                onSubmit(values);
                setIsLoading(false);
            }
        }
    }, [isLoaing]);

    return { errors, getValue, setValue, setOption, handleSubmit };
};

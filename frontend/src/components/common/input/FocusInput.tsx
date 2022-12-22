import styled, { css } from "../../../styles/theme-components";

interface StyleProps {
    width?: string;
    height?: string;
    padding?: string;
    error?: string;
}

const Wrapper = styled.input<StyleProps>`
    width: ${(props) => props.width || "326px"};
    height: ${(props) => props.height || "20px"};
    padding: ${(props) => props.padding || "14px 16px"};
    border-radius: 8px;
    font-size: 17px;
    color: ${(props) => props.theme.color.black};
    ::placeholder {
        font-size: 17px;
        color: ${(props) => props.theme.color.lightGray};
    }
    ${(props) =>
        props.error
            ? css`
                  border: solid 1px ${props.theme.color.red};
                  caret-color: ${props.theme.color.red};
                  :focus {
                      border: solid 1px ${props.theme.color.red};
                  }
              `
            : css`
                  border: solid 1px ${props.theme.color.lightGray};
                  caret-color: ${props.theme.color.seaBule};
                  :focus {
                      border: solid 1px ${props.theme.color.seaBule};
                  }
              `}
`;

interface Props {
    name?: string;
    type?: "email" | "number" | "password";
    placeholder?: string;
    onChange?: any;
    error?: string;
    cssObj?: { width?: string; height?: string; padding?: string };
}

export const FocusInput = ({
    type,
    name,
    placeholder,
    onChange,
    cssObj,
    error = "",
}: Props) => {
    return (
        <Wrapper
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            error={error}
            {...cssObj}
        />
    );
};

import styled, { css } from "../../../styles/theme-components";

interface StyleProps {
    width?: string;
    height?: string;
    borderRadius?: string;
    error?: string;
}

const Layout = styled.div<StyleProps>`
    width: 100%;
    max-width: ${(props) => props.width || "125px"};
    height: ${(props) => props.height || "36px"};
    border-radius: ${(props) => props.borderRadius || "6px"};
    ${({ error, theme }) =>
        error
            ? css`
                  border: 1px solid ${theme.color.red};
              `
            : css`
                  border: 1px solid ${theme.color.lightGray};
              `}
`;

const Default = styled.select<StyleProps>`
    width: 100%;
    height: 100%;
    font-size: 15px;
    line-height: 20px;
    border: 0;
    border-radius: ${(props) => props.borderRadius || "6px"};
    outline: none;
    cursor: pointer;
`;

const Option = styled.option<StyleProps>`
    font-size: 15px;
    line-height: 20px;
`;

interface Props {
    list: Array<number | string>;
    defaultValue?: number | string;
    name?: string;
    onChange?: any;
    error?: string;
    cssObj?: {
        width?: string;
        height?: string;
        borderRadius?: string;
    };
}

export const Select = ({
    list,
    defaultValue,
    name,
    onChange,
    error,
    cssObj,
}: Props) => {
    return (
        <Layout error={error} {...cssObj}>
            <Default
                name={name}
                defaultValue={defaultValue}
                onChange={onChange}
                {...cssObj}
            >
                {list?.map((val, idx) => {
                    return <Option key={idx}>{val}</Option>;
                })}
            </Default>
        </Layout>
    );
};

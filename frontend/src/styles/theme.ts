import baseStyled, {
    css,
    CSSProp,
    ThemedStyledInterface,
} from "styled-components";

const sizes: { [key: string]: number } = {
    mobile: 480,
    desktop: 1024,
};

type BackQuoteArgs = string[];

interface Media {
    mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
    desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
    mobile: (...args: BackQuoteArgs) => undefined,
    desktop: (...args: BackQuoteArgs) => undefined,
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
    switch (label) {
        case "desktop":
            acc.desktop = (...args: BackQuoteArgs) => css`
                @media only screen and (min-width: ${sizes.desktop}px) {
                    ${args}
                }
            `;
            break;
        case "mobile":
            acc.mobile = (...args: BackQuoteArgs) => css`
                @media only screen and (max-width: ${sizes.desktop}) {
                    ${args}
                }
            `;
            break;
        default:
            break;
    }
    return acc;
}, media);

const color = {
    blue: "#1877f2",
    white: "#ffffff",
    lightGray: "#dadde1",
    seaBule: "#1877f2",
    lightGreen: "#42b72a",
    darkGray: "#1c1e21",
    black: "#000000",
    lightBlack: "#606770",
    gray: "rgb(233, 235, 238)",
    lightSeaBlue: "rgb(231, 243, 255)",
    darkSeaBlue: "#2851A3",
    gray1: "rgb(247, 248, 250)",
    red: "#ff0000",
};

const fontSizes: string[] = [];

const theme = { media, color, fontSizes };

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;

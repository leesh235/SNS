import baseStyled, {
    css,
    CSSProp,
    ThemedStyledInterface,
} from "styled-components";

const sizes: { [key: string]: number } = {
    desktopU: 1080,
    desktopD: 1079,
    tablet: 1000,
    mobileU: 930,
    mobileD: 929,
};

type BackQuoteArgs = string[];

interface Media {
    mobileU: (...args: BackQuoteArgs) => CSSProp | undefined;
    mobileD: (...args: BackQuoteArgs) => CSSProp | undefined;
    tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
    desktopU: (...args: BackQuoteArgs) => CSSProp | undefined;
    desktopD: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
    mobileU: (...args: BackQuoteArgs) => undefined,
    mobileD: (...args: BackQuoteArgs) => undefined,
    tablet: (...args: BackQuoteArgs) => undefined,
    desktopU: (...args: BackQuoteArgs) => undefined,
    desktopD: (...args: BackQuoteArgs) => undefined,
};
//분기점 전후,사이 만들기
Object.keys(sizes).reduce((acc: Media, label: string) => {
    switch (label) {
        case "desktopU":
            acc.desktopU = (...args: BackQuoteArgs) => css`
                @media only screen and (min-width: ${sizes.desktopU}px) {
                    ${args}
                }
            `;
            break;
        case "desktopD":
            acc.desktopD = (...args: BackQuoteArgs) => css`
                @media only screen and (max-width: ${sizes.desktopD}px) {
                    ${args}
                }
            `;
            break;
        case "mobileU":
            acc.mobileU = (...args: BackQuoteArgs) => css`
                @media only screen and (min-width: ${sizes.mobileU}px) {
                    ${args}
                }
            `;
            break;
        case "mobileD":
            acc.mobileD = (...args: BackQuoteArgs) => css`
                @media only screen and (max-width: ${sizes.mobileD}px) {
                    ${args}
                }
            `;
            break;
        case "tablet":
            acc.tablet = (...args: BackQuoteArgs) => css`
                @media only screen and (max-width: ${sizes.desktopD}px) and (min-width: ${sizes.mobileU}px) {
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

export const randomCodeNumber = (
    max: number = 999999,
    min: number = 100000
): number => {
    return Math.floor(Math.random() * (max - min)) + min;
};

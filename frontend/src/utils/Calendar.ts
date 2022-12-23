const monthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const lastDayArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const calendarUtil = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const years = new Array(120).fill(0).map((_, idx) => year - idx);
    const months = monthArray;
    const days = new Array(lastDayArray[month - 1])
        .fill(0)
        .map((_, idx) => idx);

    return { year, month, day, years, months, days };
};

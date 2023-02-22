const monthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const lastDayArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const calendarUtil = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const years = new Array(120).fill(0).map((_, idx) => year - idx);
    const months = monthArray.map((val, idx) => {
        if (idx < 9) return `0${val}`;
        else return `${val}`;
    });
    const days = new Array(lastDayArray[month - 1]).fill(0).map((_, idx) => {
        if (idx < 9) return `0${idx + 1}`;
        else return `${idx + 1}`;
    });

    return {
        year,
        month: month < 10 ? `0${month}` : `${month}`,
        day: day < 10 ? `0${day}` : `${day}`,
        years,
        months,
        days,
    };
};

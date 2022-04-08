export const getNowDate = () => {
    const now = new Date();

    const year = now.getFullYear();
    const startYear = year - 120;
    const years = new Array(year - startYear).fill(0);

    const month = now.getMonth() + 1;
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const day = now.getDate();
    const mon_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days = new Array(mon_days[month]).fill(0);

    return { year, month, day, years, months, days };
};


export const getOneMonthBack = () => {
    const currentDate = new Date();
    const date30DaysAgo = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);
    const date30DaysAgoStr = date30DaysAgo.toISOString().split('T')[0];
    return date30DaysAgoStr;
}

export const calculateDaysRemaining = (targetDate) => {
    const dateSubmited = Date.parse(new Date()) - Date.parse(targetDate);
    const daysRemaining = Math.floor(dateSubmited / (1000 * 60 * 60 * 24));
    return daysRemaining;
};

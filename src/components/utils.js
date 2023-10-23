const currentDate = new Date();

export const getOneMonthBack = () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    const oneMonthAgoDate = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' + currentDate.getDate().toString().padStart(2, '0');
    return oneMonthAgoDate;
}

export const calculateDaysRemaining = (targetDate, currentDate) => {
    const timeDifference = currentDate - targetDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysRemaining;
};

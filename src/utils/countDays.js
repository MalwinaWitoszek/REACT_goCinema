const countDays = (date) => {
    if (!date) {
        return false;
    }
    // checking how many days have passed since the given date to today
    return Math.floor(((new Date()) - new Date(date)) / 86400000);
};

export default countDays;
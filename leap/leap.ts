
function isDividedEvenly(number: number, by: number): boolean {
    return number % by === 0;
}

function isLeapYear(year: number): boolean {         
    if ((isDividedEvenly(year, 4) && !isDividedEvenly(year, 100)) || isDividedEvenly(year, 400)) {
        return true;
    }

    return false;
}

export default isLeapYear
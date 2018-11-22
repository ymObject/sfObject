/**
 * 获取前n个月日期
 * @param num 前几个月默认1
 * @param date 起始日期值 默认当前日期
 * @returns {*[]} [0]年、[1]月、[2]为日
 */
export function GetRondDate(prenum, nextnum, date) {
    //当前日期
    date = date ? date : new Date();
    prenum = prenum ? prenum : 1;
    nextnum = nextnum ? nextnum : 1;
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1;
    let currentDate = date.getDate();

    //特殊处理
    let daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // 上个月日期
    let prevYear = 0;
    let prevMonth = 0;
    let prevDate = 0;
    // 下个月日期
    let nextYear = 0;
    let nextMonth = 0;
    let nextDate = 0;

    isYears(currentYear);
    if (currentMonth === 1) {
        prevYear = currentYear - 1;
        prevMonth = 13 - prenum;
        isYears(prevYear);
        prevDate = monthTime(prevMonth, currentDate);

    } else {
        prevYear = currentYear;
        prevMonth = isZero(currentMonth - prenum);
        prevDate = monthTime(prevMonth, currentDate);

    }
    if (currentMonth === 12) {
        nextYear = currentYear + 1;
        nextMonth = nextnum;
        isYears(nextYear);
        nextDate = monthTime(nextMonth, currentDate);

    } else {
        nextYear = currentYear;
        nextMonth = isZero(currentMonth + nextnum);
        nextDate = monthTime(nextMonth, currentDate);

    }
    return {
        preDate: [prevYear, prevMonth, prevDate],
        nextDate: [nextYear, nextMonth, nextDate]
    };

    function isYears(years) {
        if (years % 4 === 0 && years % 100 != 0 || years % 400 === 0) {
            daysInMonth[2] = 29;
        }
    }
    function monthTime(a, b) {
        return daysInMonth[a] < b?daysInMonth[a]:b;
    }
    function isZero(s) {
        return s === 0?12:s;
    }
}

export function GetRoundDateStr() {
    let predate = GetRondDate();
    predate.preDate = predate.preDate < 10 ? '0' + predate.preDate : predate.preDate;
    predate.nextDate = predate.nextDate < 10 ? '0' + predate.nextDate : predate.nextDate;
    return [predate.preDate.join(''), predate.nextDate.join('')];
}
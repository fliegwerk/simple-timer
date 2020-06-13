import StrTimeObj from "../types/StrTimeObj";
import DateMillis from "../types/DateMillis";
import TimeObj from "../types/TimeObj";

function convertToTimeObj(dateMillis: DateMillis): TimeObj {
    const seconds = Math.floor(dateMillis / 1000) % 60;
    const minutes = Math.floor(dateMillis / (60 * 1000)) % 60;
    const hours = Math.floor(dateMillis / (60 * 60 * 1000)) % 24;
    const days = Math.floor(dateMillis / (24 * 60 * 60 * 1000));

    return { seconds, minutes, hours, days };
}

function convertToStrTimeObj(dateMillis: DateMillis): StrTimeObj {
    const timeObj = convertToTimeObj(dateMillis);
    return {
        seconds: timeObj.seconds.toString(),
        minutes: timeObj.minutes.toString(),
        hours: timeObj.hours.toString(),
        days: timeObj.days.toString()
    };
}

function convertToDateMillis(strTimeObj: StrTimeObj): DateMillis {
    const seconds = parseInt(strTimeObj.seconds) || 0;
    const minutes = parseInt(strTimeObj.minutes) || 0;
    const hours = parseInt(strTimeObj.hours) || 0;
    const days = parseInt(strTimeObj.days) || 0;

    return (((days * 24 + hours) * 60 + minutes) * 60 + seconds) * 1000;
}

export {
    convertToStrTimeObj,
    convertToTimeObj,
    convertToDateMillis,
};

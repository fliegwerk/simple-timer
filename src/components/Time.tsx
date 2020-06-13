import React from "react";
import timeFormatter from "../lib/timeFormatter";
import './Time.css';
import DateMillis from "../types/DateMillis";

interface Props {
    time: DateMillis;
}

export default function Time({ time }: Props) {
    const strTimeObj = timeFormatter(time);
    return (
        <div className="clock">
            <div>
                <span>{strTimeObj.days}</span>
                <span>Days</span>
            </div>
            <div>
                <span>{strTimeObj.hours}</span>
                <span>Hours</span>
            </div>
            <div>
                <span>{strTimeObj.minutes}</span>
                <span>Minutes</span>
            </div>
            <div>
                <span>{strTimeObj.seconds}</span>
                <span>Seconds</span>
            </div>
        </div>
    );
}

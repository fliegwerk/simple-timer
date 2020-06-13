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
            <div className="time-container time-days">
                <span className="time-value time-days-value">{strTimeObj.days}</span>
                <span className="time-label time-days-label">Days</span>
            </div>
            <div className="time-container time-hours">
                <span className="time-value time-hours-value">{strTimeObj.hours}</span>
                <span className="time-label time-hours-label">Hours</span>
            </div>
            <div className="time-container time-minutes">
                <span className="time-value time-minutes-value">{strTimeObj.minutes}</span>
                <span className="time-label time-minutes-label">Minutes</span>
            </div>
            <div className="time-container time-seconds">
                <span className="time-value time-seconds-value">{strTimeObj.seconds}</span>
                <span className="time-label time-seconds-label">Seconds</span>
            </div>
        </div>
    );
}

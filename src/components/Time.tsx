import React from "react";
import timeFormatter from "../lib/timeFormatter";
import './Time.css';
import DateMillis from "../types/DateMillis";

interface Props {
    time: DateMillis;
}

export default function Time({ time }: Props) {
    const formatString = timeFormatter(time);
    return (
        <p className="time">{formatString}</p>
    );
}

import React, { useState } from "react";

import './TimeSpanPicker.css';
import StrTimeObj from "../types/StrTimeObj";
import { convertToDateMillis, convertToStrTimeObj } from "../lib/convertStrTime";
import DateMillis from "../types/DateMillis";

interface Props {
    countdownTime: DateMillis;
    setCountdownTime: (dateMillis: DateMillis) => void;
}

export default function TimeSpanPicker({ countdownTime, setCountdownTime }: Props) {
    const [inputState, setInputState] = useState<StrTimeObj>(convertToStrTimeObj(countdownTime));

    function onChange(event: React.FocusEvent<HTMLInputElement>) {
        const { value, id } = event.target;

        setInputState(prevStates => {
            const prevValue = prevStates[id as keyof StrTimeObj];
            return {
                ...prevStates,
                [id]: /^[0-9]*$/.test(value) ? value : prevValue,
            }
        });
    }

    function onBlur() {
        setCountdownTime(convertToDateMillis(inputState));
    }

    return (
        <form className="form">
            <label htmlFor="seconds">Seconds:</label>
            <input type="number" id="seconds" name="seconds" value={inputState.seconds} onChange={onChange}
                   onBlur={onBlur}/>
            <label htmlFor="minutes">Minutes:</label>
            <input type="number" id="minutes" name="minutes" value={inputState.minutes} onChange={onChange}
                   onBlur={onBlur}/>
            <label htmlFor="hours">Hours:</label>
            <input type="number" id="hours" name="hours" value={inputState.hours} onChange={onChange} onBlur={onBlur}/>
            <label htmlFor="days">Days:</label>
            <input type="number" id="days" name="days" value={inputState.days} onChange={onChange} onBlur={onBlur}/>
        </form>
    );
}

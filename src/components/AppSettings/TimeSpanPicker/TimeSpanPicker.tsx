import React, { useState } from "react";

import './TimeSpanPicker.css';
import '../DatePickerInput/DatePickerInput.css';
import StrTimeObj from "../../../types/StrTimeObj";
import { convertToDateMillis, convertToStrTimeObj } from "../../../lib/convertTimeObj";
import DateMillis from "../../../types/DateMillis";

type FormElement = {
    id: keyof StrTimeObj;
    label: string;
}

const formDefinition: FormElement[] = [
    {
        id: 'days',
        label: 'Days:'
    },
    {
        id: 'hours',
        label: 'Hours:'
    },
    {
        id: 'minutes',
        label: 'Minutes:'
    },
    {
        id: 'seconds',
        label: 'Seconds:'
    }
];

interface Props {
    countdownTime: DateMillis;
    setCountdownTime: (dateMillis: DateMillis) => void;
}

export default function TimeSpanPicker({ countdownTime, setCountdownTime }: Props) {
    const [inputState, setInputState] = useState<StrTimeObj>(convertToStrTimeObj(countdownTime));

    function onChange(event: React.FocusEvent<HTMLInputElement>) {
        const { value, id } = event.target;

        const newState = {...JSON.parse(JSON.stringify(inputState))}; // Clone previous state object
        newState[id] = Number.parseInt(value);

        setInputState(newState);
        setCountdownTime(convertToDateMillis(newState));
    }

    return (
        <form className="form">
            {formDefinition.map(elem => (
                <div key={elem.id}>
                    <label htmlFor={elem.id}>{elem.label}</label>
                    <input className="input"
                           type="number"
                           id={elem.id}
                           name={elem.id}
                           value={inputState[elem.id]}
                           onChange={onChange}
                    />
                </div>
            ))}
        </form>
    );
}

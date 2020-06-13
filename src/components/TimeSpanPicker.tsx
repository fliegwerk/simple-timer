import React, { useState } from "react";

import './TimeSpanPicker.css';
import './DatePickerInput.css';
import StrTimeObj from "../types/StrTimeObj";
import { convertToDateMillis, convertToStrTimeObj } from "../lib/convertTimeObj";
import DateMillis from "../types/DateMillis";

type FormElement = {
    id: keyof StrTimeObj;
    label: string;
}

const formDefinition: FormElement[] = [
    {
        id: 'seconds',
        label: 'Seconds:'
    },
    {
        id: 'minutes',
        label: 'Minutes:'
    },
    {
        id: 'hours',
        label: 'Hours:'
    },
    {
        id: 'days',
        label: 'Days:'
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
            {formDefinition.map(elem => (
                <div key={elem.id}>
                    <label htmlFor={elem.id}>{elem.label}</label>
                    <input className="input"
                           type="number"
                           id={elem.id}
                           name={elem.id}
                           value={inputState[elem.id]}
                           onChange={onChange}
                           onBlur={onBlur}
                    />
                </div>
            ))}
        </form>
    );
}

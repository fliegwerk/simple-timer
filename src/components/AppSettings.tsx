import React from "react";
import DatePicker from 'react-datepicker';

import './AppSettings.css';
import 'react-datepicker/dist/react-datepicker.css';

import AppState from "../types/AppState";
import TimeSpanPicker from "./TimeSpanPicker";
import DateMillis from "../types/DateMillis";
import DatePickerInput from "./DatePickerInput";

interface Props {
    finishDate: Date;
    setFinishDate: (newDate: Date) => void;
    countdownTime: DateMillis;
    setCountdownTime: (newTime: DateMillis) => void;
    setAppState: (newState: AppState) => void;
    infoText: string;
    setInfoText: (newText: string) => void;
}

export default function AppSettings(
    { finishDate, countdownTime, setFinishDate, setCountdownTime, setAppState, infoText, setInfoText }: Props
) {
    function startCountToDate() {
        setAppState('countToDate');
    }

    function startCountdown() {
        setAppState('countdown');
    }

    // noinspection RequiredAttributes
    return (
        <div className="container">
            <div>
                <h2>Count to datetime</h2>
                <div>
                    <DatePicker
                        selected={finishDate}
                        onChange={date => setFinishDate(date ? date : finishDate)}
                        shouldCloseOnSelect={false}
                        showTimeSelect={true}
                        timeIntervals={5}
                        dateFormat="yyyy MMMM d, HH:mm"
                        // @ts-ignore
                        customInput={<DatePickerInput />}
                    />
                </div>
                <button onClick={startCountToDate}>Start</button>
            </div>
            <div>
                <h2>Countdown</h2>
                <div>
                    <TimeSpanPicker countdownTime={countdownTime} setCountdownTime={setCountdownTime}/>
                </div>
                <button onClick={startCountdown}>Start</button>
            </div>
            <div>
                <h2>Custom Text</h2>
                <div>
                    <textarea className="textarea"
                              value={infoText}
                              onChange={event => setInfoText(event.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
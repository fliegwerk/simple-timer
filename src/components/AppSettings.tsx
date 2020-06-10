import React from "react";
import DatePicker from 'react-datepicker';

import './AppSettings.css';
import 'react-datepicker/dist/react-datepicker.css';

import AppState from "../types/AppState";
import TimeSpanPicker from "./TimeSpanPicker";
import DateMillis from "../types/DateMillis";

interface Props {
    finishDate: Date;
    setFinishDate: (newDate: Date) => void;
    countdownTime: DateMillis;
    setCountdownTime: (newTime: DateMillis) => void;
    setAppState: (newState: AppState) => void;
}

export default function AppSettings({ finishDate, countdownTime, setFinishDate, setCountdownTime, setAppState }: Props) {
    function startCountToDate() {
        setAppState('countToDate');
    }

    function startCountdown() {
        setAppState('countdown');
    }

    return (
        <div className="container">
            <div>
                <h2>Count to datetime</h2>
                <DatePicker
                    selected={finishDate}
                    onChange={date => setFinishDate(date ? date : finishDate)}
                    shouldCloseOnSelect={false}
                    showTimeSelect={true}
                    timeIntervals={5}
                    dateFormat="yyyy MMMM d, HH:mm"
                />
                <button onClick={startCountToDate}>Start</button>
            </div>
            <div>
                <h2>Countdown</h2>
                <TimeSpanPicker countdownTime={countdownTime} setCountdownTime={setCountdownTime}/>
                <button onClick={startCountdown}>Start</button>
            </div>
        </div>
    );
}
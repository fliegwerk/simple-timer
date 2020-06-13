import React, { useState } from 'react';

import './App.css';
import DateMillis from "../types/DateMillis";
import AppSettings from './AppSettings';
import Countdown from "./Countdown";
import CountToDate from "./CountToDate";
import AppState from "../types/AppState";

const defaultInfoText = 'Aerospace Technology';

function App() {
    // global app state
    const [appState, setAppState] = useState<AppState>('none');
    // states for the different modes
    const [finishDate, setFinishDate] = useState<Date>(new Date());
    const [countdownTime, setCountdownTime] = useState<DateMillis>(15 * 60 * 1000);
    const [infoText, setInfoText] = useState<string>(defaultInfoText);

    function backToSettings() {
        setAppState('none');
    }

    return (
        <div className="App">
            <header className="App-header">
                {appState === 'none' && <AppSettings
                    finishDate={finishDate}
                    countdownTime={countdownTime}
                    setFinishDate={setFinishDate}
                    setCountdownTime={setCountdownTime}
                    setAppState={setAppState}
                    infoText={infoText}
                    setInfoText={setInfoText}
                />}

                {appState === 'countdown' && <Countdown
                    countdownTime={countdownTime}
                    infoText={infoText}
                />}
                {appState === 'countToDate' && <CountToDate
                    finishDate={finishDate}
                    infoText={infoText}
                />}

                {appState !== 'none' && <button
                    className="back"
                    onClick={backToSettings}
                >
                    Back
                </button>}
            </header>
        </div>
    );
}

export default App;

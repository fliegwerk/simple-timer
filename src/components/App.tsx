import React, { useState } from 'react';

import './App.css';
import DateMillis from "../types/DateMillis";
import AppSettings from './AppSettings';
import Countdown from "./Countdown";
import CountToDate from "./CountToDate";
import AppState from "../types/AppState";

function App() {
    // global app state
    const [appState, setAppState] = useState<AppState>('none');
    // states for the different modes
    const [finishDate, setFinishDate] = useState<Date>(new Date());
    const [countdownTime, setCountdownTime] = useState<DateMillis>(15 * 60 * 1000);

    function backToSettings() {
        setAppState('none');
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src="logo512.png" className="App-logo" alt="logo"/>

                {appState === 'none' && <AppSettings
                    finishDate={finishDate}
                    countdownTime={countdownTime}
                    setFinishDate={setFinishDate}
                    setCountdownTime={setCountdownTime}
                    setAppState={setAppState}/>}

                {appState === 'countdown' && <Countdown countdownTime={countdownTime} />}
                {appState === 'countToDate' && <CountToDate finishDate={finishDate} />}

                {appState !== 'none' && <button onClick={backToSettings}>Back</button>}
            </header>
        </div>
    );
}

export default App;

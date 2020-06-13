import React, { useState } from 'react';

import './App.css';
import DateMillis from "../types/DateMillis";
import AppSettings from './AppSettings/AppSettings';
import Countdown from "./Countdown/Countdown";
import CountToDate from "./CountToDate";
import AppState from "../types/AppState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faGlobe, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import FileObj from "../types/FileObj";
import useLocalStorageState from "../hooks/useLocalStorageState";

const defaultInfoText = 'Aerospace Technology';


function App() {
    // global app state
    const [appState, setAppState] = useLocalStorageState<AppState>('app-state', 'none');
    // states for the different modes
    const [finishDate, setFinishDate] = useState<Date>(new Date());
    const [countdownTime, setCountdownTime] = useLocalStorageState<DateMillis>('countdownTime',
        15 * 60 * 1000);
    const [infoText, setInfoText] = useLocalStorageState<string>('infoText', defaultInfoText);
    const [image, setImage] = useLocalStorageState<FileObj | null>('image', null);

    function backToSettings() {
        setAppState('none');
    }

    return (
        <div className="App">
            <header className="App-header">
                {appState === 'none' && (
                    <>
                        <h1 className="heading"><FontAwesomeIcon icon={faStopwatch}/> Simple Timer</h1>
                        <AppSettings
                            finishDate={finishDate}
                            countdownTime={countdownTime}
                            setFinishDate={setFinishDate}
                            setCountdownTime={setCountdownTime}
                            setAppState={setAppState}
                            infoText={infoText}
                            setInfoText={setInfoText}
                            setImage={setImage}
                            image={image}
                        />
                    </>
                )}

                {appState !== 'none' && image && <img id="logo" src={image.dataURI} alt={image.title} />}

                {appState === 'countdown' && <Countdown
                    countdownTime={countdownTime}
                    infoText={infoText}
                    setInfoText={setInfoText}
                />}
                {appState === 'countToDate' && <CountToDate
                    finishDate={finishDate}
                    infoText={infoText}
                    setInfoText={setInfoText}
                />}

                {appState !== 'none' && <button
                    className="back"
                    onClick={backToSettings}
                >
                    <FontAwesomeIcon icon={faChevronLeft}/> Back
                </button>}
            </header>
            <footer>
                <div className="smlinks">
                    <a className="iconlink"
                       href="https://github.com/fliegwerk/simple-timer/"
                       target="_blank"
                       rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a className="iconlink"
                       href="https://fliegwerk.com/"
                       target="_blank"
                       rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGlobe}/>
                    </a>
                </div>
                <p className="center">
                    Simple Timer by fliegwerk&nbsp;|&nbsp;
                    <a href="https://www.fliegwerk.com/legal" target="_blank" rel="noopener noreferrer">Legal Notice</a>
                </p>
            </footer>
        </div>
    );
}

export default App;

import React, { useEffect, useState } from "react";

import './Countdown.css';
import Time from "../Time";
import DateMillis from "../../types/DateMillis";
import useInterval from "../../hooks/useInterval";
import intervalRefreshRate from "../../constants/intervalRefreshRate";
import InfoText from "./InfoText/InfoText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faUndo } from "@fortawesome/free-solid-svg-icons";

interface Props {
    countdownTime: DateMillis;
    infoText?: string;
    setInfoText?: (newText: string) => void;
}

export default function Countdown({ countdownTime, infoText, setInfoText }: Props) {
    // time handling
    const [remainingTime, setRemainingTime] = useState<DateMillis>(countdownTime);
    const [endTime, setEndTime] = useState<DateMillis>(0);
    // delay to update interval
    const [delay, setDelay] = useState<number | null>(null);
    // button states
    const [startEnabled, setStartEnabled] = useState<boolean>(true);
    const [stopEnabled, setStopEnabled] = useState<boolean>(false);

    function updateRemainingTime() {
        const currentTime = Date.now();
        setRemainingTime(endTime - currentTime > 0 ?
            endTime - currentTime :
            0
        );
    }

    // disable interval on finish
    useEffect(() => {
        if (remainingTime <= 0) setDelay(null);
    }, [remainingTime]);

    // set button states based on delay
    useEffect(() => {
        if (delay) {
            setStartEnabled(false);
            setStopEnabled(true);
        } else {
            setStartEnabled(remainingTime > 0);
            setStopEnabled(false);
        }
    }, [delay, remainingTime]);

    // calculate remaining time every delay if delay is not null
    useInterval(updateRemainingTime, delay);

    function startCountdown() {
        if (remainingTime > 0) {
            setEndTime(Date.now() + remainingTime);
            setDelay(intervalRefreshRate);
        }
    }

    function stopCountdown() {
        setDelay(null);
    }

    function resetCountdown() {
        setRemainingTime(() => {
            stopCountdown();
            return countdownTime;
        });
    }

    return (
        <>
            <InfoText infoText={infoText} editable={true} setInfoText={setInfoText} />
            <Time time={remainingTime} />
            <div className="buttonbar">
                <button onClick={resetCountdown}><FontAwesomeIcon icon={faUndo} /></button>
                <button onClick={stopCountdown} disabled={!stopEnabled}><FontAwesomeIcon icon={faPause} /></button>
                <button onClick={startCountdown} disabled={!startEnabled}><FontAwesomeIcon icon={faPlay} /></button>
            </div>
        </>
    );
}

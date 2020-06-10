import React, { useEffect, useState } from "react";
import Time from "./Time";
import DateMillis from "../types/DateMillis";
import useInterval from "../hooks/useInterval";
import intervalRefreshRate from "../constants/intervalRefreshRate";

interface Props {
    countdownTime: DateMillis;
}

export default function Countdown({ countdownTime }: Props) {
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
            setStartEnabled(true);
            setStopEnabled(false);
        }
    }, [delay]);

    // calculate remaining time every delay if delay is not null
    useInterval(updateRemainingTime, delay);

    function startCountdown() {
        setEndTime(Date.now() + remainingTime);
        setDelay(intervalRefreshRate);
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
            <Time time={remainingTime} />
            <p>
                <button onClick={startCountdown} disabled={!startEnabled}>Start</button>
                <button onClick={stopCountdown} disabled={!stopEnabled}>Stop</button>
                <button onClick={resetCountdown}>Reset</button>
            </p>
        </>
    );
}

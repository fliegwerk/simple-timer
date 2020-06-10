import React, { useEffect, useState } from "react";
import Time from "./Time";
import DateMillis from "../types/DateMillis";

const REFRESH_RATE = 1000; /* ms */

interface Props {
    countdownTime: DateMillis;
}

export default function Countdown({ countdownTime }: Props) {
    const [time, setTime] = useState<DateMillis>(countdownTime);
    const [countdownInterval, setCountdownInterval] = useState<NodeJS.Timeout | null>(null);
    // button states
    const [startEnabled, setStartEnabled] = useState<boolean>(true);
    const [stopEnabled, setStopEnabled] = useState<boolean>(false);

    useEffect(() => {
        setTime(countdownTime);
        return () => {
            if (countdownInterval) {
                clearInterval(countdownInterval);
                setCountdownInterval(null);
            }
        };
    }, [countdownInterval, countdownTime]);

    useEffect(() => {
        if (countdownInterval) {
            setStartEnabled(false);
            setStopEnabled(true);
        } else {
            setStartEnabled(true);
            setStopEnabled(false);
        }
    }, [countdownInterval]);

    function updateCountdown(interval: NodeJS.Timeout) {
        setTime(prevTime => {
            if (prevTime - REFRESH_RATE > 0) {
                return prevTime - REFRESH_RATE;
            }
            console.log('Countdown finished');
            clearInterval(interval);
            setCountdownInterval(null);
            return 0;
        });
    }

    function startCountdown() {
        if (!countdownInterval) {
            const interval: NodeJS.Timeout = setInterval(() => updateCountdown(interval), REFRESH_RATE);
            setCountdownInterval(interval);
            console.log('Countdown start');
        }
    }

    function stopCountdown() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
            setCountdownInterval(null);
            console.log('Countdown stop');
        }
    }

    function resetCountdown() {
        stopCountdown();
        setTime(countdownTime);
        console.log('Countdown reset');
    }

    return (
        <>
            <Time time={time} />
            <p>
                <button disabled={!startEnabled} onClick={startCountdown}>Start</button>
                <button disabled={!stopEnabled} onClick={stopCountdown}>Stop</button>
                <button onClick={resetCountdown}>Reset</button>
            </p>
        </>
    );
}

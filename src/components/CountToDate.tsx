import React, { useEffect, useState } from "react";
import DateMillis from "../types/DateMillis";
import Time from "./Time";

const REFRESH_RATE = 1000; /* ms */

function calcDeltaTime(finishDate: Date): DateMillis {
    const difference = finishDate.valueOf() - Date.now().valueOf();
    return difference > 0 ? difference : 0;
}

interface Props {
    finishDate: Date;
}

export default function CountToDate({ finishDate }: Props) {
    const [deltaTime, setDeltaTime] = useState<DateMillis>(calcDeltaTime(finishDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setDeltaTime(calcDeltaTime(finishDate));
        }, REFRESH_RATE);
        return () => clearInterval(interval);
    }, [finishDate]);

    return (
        <Time time={deltaTime}/>
    );
}
import React, { useState } from "react";
import DateMillis from "../types/DateMillis";
import Time from "./Time";
import useInterval from "../hooks/useInterval";
import intervalRefreshRate from "../constants/intervalRefreshRate";
import InfoText from "./InfoText";

interface Props {
    finishDate: Date;
    infoText?: string;
}

export default function CountToDate({ finishDate, infoText }: Props) {
    const [deltaTime, setDeltaTime] = useState<DateMillis>(0);

    useInterval(() => {
        const difference = finishDate.valueOf() - Date.now().valueOf();
        setDeltaTime(difference > 0 ? difference : 0);
    }, intervalRefreshRate);

    return (
        <>
            <InfoText infoText={(infoText ? infoText + '\n' : '') + 'Date: ' + finishDate.toLocaleString()} />
            <Time time={deltaTime} />
        </>
    );
}
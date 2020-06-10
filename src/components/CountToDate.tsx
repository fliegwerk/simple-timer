import React, { useState } from "react";
import DateMillis from "../types/DateMillis";
import Time from "./Time";
import useInterval from "../hooks/useInterval";
import intervalRefreshRate from "../constants/intervalRefreshRate";

interface Props {
    finishDate: Date;
}

export default function CountToDate({ finishDate }: Props) {
    const [deltaTime, setDeltaTime] = useState<DateMillis>(0);

    useInterval(() => {
        const difference = finishDate.valueOf() - Date.now().valueOf();
        setDeltaTime(difference > 0 ? difference : 0);
    }, intervalRefreshRate);

    return (
        <Time time={deltaTime}/>
    );
}
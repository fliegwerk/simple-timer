import React, { useState } from "react";

import DateMillis from "../types/DateMillis";
import Time from "./Time";
import useInterval from "../hooks/useInterval";
import intervalRefreshRate from "../constants/intervalRefreshRate";
import InfoText from "./Countdown/InfoText/InfoText";

interface Props {
    finishDate: Date;
    infoText?: string;
    setInfoText?: (newText: string) => void;
}

export default function CountToDate({ finishDate, infoText, setInfoText }: Props) {
    const [deltaTime, setDeltaTime] = useState<DateMillis>(0);

    useInterval(() => {
        const difference = finishDate.valueOf() - Date.now().valueOf();
        setDeltaTime(difference > 0 ? difference : 0);
    }, intervalRefreshRate);

    return (
        <>
            <InfoText editable={true} infoText={infoText} setInfoText={setInfoText} />
            <p className="center">{`Date: ${finishDate.toLocaleString()}`}</p>
            <Time time={deltaTime} />
        </>
    );
}

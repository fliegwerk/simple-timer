import React from "react";
import './InfoText.css';

interface Props {
    infoText: string;
}

export default function InfoText({ infoText }: Props) {
    const strings = infoText.split('\n');

    return (
        <>
            {strings.map(str => <h2 key={str} className="infotext">{ str }</h2>)}
        </>
    );
}

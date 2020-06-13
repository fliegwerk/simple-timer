import React, { useRef } from "react";
import './InfoText.css';
import ContentEditable from "react-contenteditable";

interface Props {
    infoText?: string;
    setInfoText?: (newText: string) => void;
    small?: boolean;
    editable?: boolean;
}

export default function InfoText({ infoText,setInfoText, small, editable }: Props) {
    const text = useRef<string>(infoText || '');

    const className = `${small && 'small'} infotext`;

    return (
        <ContentEditable className={className}
                         html={text.current}
                         disabled={!editable}
                         onChange={event => text.current = event.target.value}
                         onBlur={() => setInfoText && setInfoText(text.current)}
                         tagName="h2"
        />
    );
}

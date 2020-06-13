import React, {useRef} from "react";
import DatePicker from 'react-datepicker';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faParagraph,
    faCalendar,
    faHourglassStart,
    faPlaneDeparture,
    faRocket, faImage, faFolderOpen
} from "@fortawesome/free-solid-svg-icons";

import './AppSettings.css';
import 'react-datepicker/dist/react-datepicker.css';

import AppState from "../../types/AppState";
import TimeSpanPicker from "./TimeSpanPicker/TimeSpanPicker";
import DateMillis from "../../types/DateMillis";
import DatePickerInput from "./DatePickerInput/DatePickerInput";
import ContentEditable from "react-contenteditable";
import FileObj from "../../types/FileObj";

interface Props {
    finishDate: Date;
    setFinishDate: (newDate: Date) => void;
    countdownTime: DateMillis;
    setCountdownTime: (newTime: DateMillis) => void;
    setAppState: (newState: AppState) => void;
    infoText?: string;
    setInfoText?: (newText: string) => void;
    setImage: (newImage: FileObj | null) => void;
    image: FileObj | null;
}

export default function AppSettings(
    {finishDate, countdownTime, setFinishDate, setCountdownTime, setAppState, infoText, setInfoText, setImage, image}: Props
) {
    const text = useRef<string>(infoText || '');

    function startCountToDate() {
        setAppState('countToDate');
    }

    function startCountdown() {
        setAppState('countdown');
    }

    function onFileSelected(event: React.ChangeEvent<HTMLInputElement>) {
        const selectedFile = (event.target.files || [])[0];
        const reader = new FileReader();

        // register setImage
        reader.onload = event => {
            event && event.target && event.target.result && setImage({
                dataURI: event.target.result.toString(),
                title: selectedFile.name
            });
        };

        reader.readAsDataURL(selectedFile);
    }

    function clearFile() {
        console.log('Clear image');
        setImage(null);
    }

    // noinspection RequiredAttributes
    return (
        <div className="container">
            <div>
                <h2><FontAwesomeIcon icon={faParagraph}/> Title</h2>
                <div>
                    <ContentEditable className="textarea"
                                     html={text.current}
                                     onChange={event => text.current = event.target.value}
                                     onBlur={() => setInfoText && setInfoText(text.current)}
                                     tagName="div"
                    />
                </div>
            </div>

            <div>
                <h2><FontAwesomeIcon icon={faImage}/> Image</h2>
                <div>
                    <input id="inputImage" type="file" onChange={onFileSelected}/>
                    <label className="textarea" htmlFor="inputImage">
                        <FontAwesomeIcon icon={faFolderOpen}/> Select file ({image ? image.title : 'none selected'})
                    </label>
                    {image && <button onClick={clearFile}>Clear</button>}
                    <p><small>This image only gets used locally. No images ever reach our servers.</small></p>
                </div>
            </div>

            <div>
                <h2><FontAwesomeIcon icon={faCalendar}/> Count to datetime</h2>
                <div className="datepicker">
                    <DatePicker
                        selected={finishDate}
                        onChange={date => setFinishDate(date ? date : finishDate)}
                        shouldCloseOnSelect={false}
                        showTimeSelect={true}
                        timeIntervals={5}
                        dateFormat="yyyy MMMM d, HH:mm"
                        // @ts-ignore
                        customInput={<DatePickerInput/>}
                    />
                </div>
                <button onClick={startCountToDate}>Start <FontAwesomeIcon icon={faPlaneDeparture}/></button>
            </div>
            <div>
                <h2><FontAwesomeIcon icon={faHourglassStart}/> Countdown</h2>
                <div>
                    <TimeSpanPicker countdownTime={countdownTime} setCountdownTime={setCountdownTime}/>
                </div>
                <button onClick={startCountdown}>Start <FontAwesomeIcon icon={faRocket}/></button>
            </div>
        </div>
    );
}

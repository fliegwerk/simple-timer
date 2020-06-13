import {Dispatch} from 'react';
import useStoredState from "./useStoredState";
import {deserializeDate, serializeDate} from "../lib/serialize-date";

/**
 * Use a state which gets saved in the localStorage
 * @param key the key for storing it in the localStorage
 * @param defaultValue the default value if no value was previously set
 */
export default function useStoredDateState(key: string, defaultValue: Date): [
    Date,
    Dispatch<Date>,
] {
    const [value, setValue] = useStoredState<string>(key, serializeDate(defaultValue));

    return [deserializeDate(value), (value, ...args) => {
        return setValue(serializeDate(value), ...args);
    }];
}

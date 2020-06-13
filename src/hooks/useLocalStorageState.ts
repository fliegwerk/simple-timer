import {Dispatch, SetStateAction, useState} from 'react';

/**
 * Use a state which gets saved in the localStorage
 * @param key the key for storing it in the localStorage
 * @param defaultValue the default value if no value was previously set
 */
export default function useLocalStorageState<T>(key: string, defaultValue: T): [
    T,
    Dispatch<SetStateAction<T>>,
] {
    const storedValue = window.localStorage.getItem(key);
    const initialValue = storedValue ?? JSON.stringify(defaultValue);
    const [value, setValue] = useState<T>(JSON.parse(initialValue));

    return [value, (newValue, ...args) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        return setValue(newValue, ...args);
    }]
}
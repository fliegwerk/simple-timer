import {Dispatch, SetStateAction, useState} from 'react';
import chunkString from "../lib/chunk-string";

/**
 * Use a state which gets saved in the localStorage
 * @param key the key for storing it in the localStorage
 * @param numChunks the number of chunks to store the value
 * @param defaultValue the default value if no value was previously set
 */
export default function useStoredState<T>(key: string, numChunks: number, defaultValue: T): [
    T,
    Dispatch<SetStateAction<T>>,
] {

    const [value, setValue] = useState<T>(() => {
        const storedValues = [];

        for (let i = 0; i < numChunks; i++)
            storedValues.push((window.localStorage.getItem(`${key}-chunk-${i}`) || ''));

        // Use previously stored value or, if nonexistent, the default value:
        const initialValue = storedValues.join('').length ? storedValues.join('') : JSON.stringify(defaultValue);
        let parsedValue = null;

        try {
            parsedValue = JSON.parse((initialValue) ?? 'null');
        } catch (e) {
            console.warn(`Parsing the stored ${key} failed. Purging stored data. Details:`, e)
            localStorage.clear();
        }

        return parsedValue;
    });

    return [value, (newValue, ...args) => {
        // Split the serialized version into chunks:
        const chunks = chunkString((JSON.stringify(newValue)), numChunks)

        // Store the chunks in the localStorage
        try {
            chunks.forEach((chunk, i) => localStorage.setItem(`${key}-chunk-${i}`, (chunk)))
        } catch (e) {
            alert(`The ${key} you selected is too large to get stored permanently. It will get used during this session, but upon refreshing the page, you'll have to reselect it.`)
            console.warn(`Couldn't store ${key} in localStorage. Details:`, e)
            for (let i = 0; i < numChunks; i++) {
                localStorage.removeItem(`${key}-chunk-${i}`)
            }
        }

        return setValue(newValue, ...args);
    }]
}

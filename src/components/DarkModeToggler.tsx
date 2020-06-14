import React, {useCallback, useEffect} from "react";
import useThemeManager, {dark_default, light_default} from "../hooks/useThemeManager";

interface Props {
    children?: any;
}

export default function DarkModeToggle(props: Props) {
    const setTheme = useThemeManager();

    const autoSetTheme = useCallback(() => {
        const darkMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
        setTheme(darkMode ? dark_default : light_default);
    }, [setTheme])


    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', autoSetTheme);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', autoSetTheme);
        };
    }, [autoSetTheme])

    return <>
        {props.children}
    </>
}

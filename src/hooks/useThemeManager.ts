import useStoredState from "./useStoredState";

export interface Theme {
    bg: string;
    fg: string;
    fg_dim: string;
    gray: string;
    accent: string;
}

export const dark_default: Theme = {
    bg: '#151515',
    accent: '#a35212',
    fg: '#ffffff',
    fg_dim: '#b3b3b3',
    gray: '#4e4e4e'
}

export const light_default = {
    bg: 'white',
    fg_dim: '#888',
    gray: '#eee',
    accent: 'powderblue',
    fg: '#222'
}

export default function useThemeManager() {
   const [theme, setTheme] = useStoredState<Theme>('theme', dark_default);

    function enableTheme(theme: Theme) {
        document.documentElement.style.setProperty('--bg', theme.bg);
        document.documentElement.style.setProperty('--fg', theme.fg);
        document.documentElement.style.setProperty('--fg-dim', theme.fg_dim);
        document.documentElement.style.setProperty('--gray', theme.gray);
        document.documentElement.style.setProperty('--accent', theme.accent);
    }

    enableTheme(theme);

    return (theme: Theme) => {
        setTheme(theme);
    }
}

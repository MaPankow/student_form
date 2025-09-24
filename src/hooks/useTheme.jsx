import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState("dark");
// Set the initial value to "dark" because it's often the default in modern apps,
// as it’s easier on the eyes and saves energy on darker screens.

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const onToggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const isDarkTheme = (theme === "dark");

    return { onToggleTheme, isDarkTheme }
}
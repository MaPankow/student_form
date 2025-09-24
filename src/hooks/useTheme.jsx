import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState("dark");
    // Set the initial value to "dark" for better UX and energy savings.

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const onToggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }

    const isDarkTheme = (theme === "dark");

    return { onToggleTheme, isDarkTheme }
}
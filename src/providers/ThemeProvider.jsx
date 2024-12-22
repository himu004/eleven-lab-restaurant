import { useEffect, useState } from "react";
import { ThemeContext } from "./Context";


const ThemeProvider = ({ children }) => {
    

    // const handleChangeTheme = () => {
    //     const currentTheme = document.documentElement.getAttribute('data-theme');
    //     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    //     document.documentElement.setAttribute('data-theme', newTheme);
    // };

    const getCurrentTheme = () => {
        return document.documentElement.getAttribute('data-theme') || 'light';
    };

    const [theme, setTheme] = useState(getCurrentTheme());

    useEffect(() => {
        const currentTheme = getCurrentTheme();
        setTheme(currentTheme);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const handleChangeTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    const themeInfo = {
        theme,
        handleChangeTheme,
    }

    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
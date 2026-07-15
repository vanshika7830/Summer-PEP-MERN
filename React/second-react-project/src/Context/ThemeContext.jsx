import { createContext, useState } from "react";

export const ThemeContext = createContext();
function ThemeProvider({children}){
    const [theme, setTheme] = useState("Light");
    function toggleTheme(){
        setTheme(prev => prev === 'Light' ? 'Dark' : 'Light');
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;
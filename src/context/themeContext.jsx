import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const toogleTheme = () => {
        setTheme(theme === "light" ? "dark": "light")
    }

    return(
        //aqui embaixo no provider definimos um value que vai receber
        //os valores que desejamos compartilhar entre os componentes
        //pode ser uma funcao (ex: toogleTheme) ou um estado (ex: theme/setTheme)
        <ThemeContext.Provider value={{theme, toogleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};
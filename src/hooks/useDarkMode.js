import useLocalStorage from "./useLocalStorage";
import { useEffect } from 'react';
import { visitFunctionBody } from "typescript";

const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('this is the key for toggle', false);

    useEffect(() => {
        console.log(darkMode);
        if (darkMode === true){
            return document.body.classList.add('dark-mode');  
        } else {
            return document.body.classList.remove('dark-mode');
        };
    }, [darkMode])

    return [darkMode, setDarkMode, useEffect];
}

export default useDarkMode;
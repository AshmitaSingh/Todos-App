import { useState, useEffect } from "react";

//if the 'key' is not present in the local storage, then we use the 'defaultVal' 
function useLocalStorageState(key, defaultVal) {
    //make piece of state, based off of value in local storage(or default)
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
        }
        catch (e) {
            val = defaultVal;
        }
        return val;
    });

    //use 'useEffect' to update local Storage whenever that piece of state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state]);

    return [state, setState];
}

export default useLocalStorageState;
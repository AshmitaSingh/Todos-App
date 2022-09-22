import { useReducer, useEffect } from "react";

//if the 'key' is not present in the local storage, then we use the 'defaultVal' 
function useLocalStorageReducer(key, defaultVal, reducer) {
    //make piece of state, based off of value in local storage(or default)
    const [state, dispatch] = useReducer(reducer, defaultVal, () => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
        }
        catch (e) {
            val = defaultVal;
        }
        return val;
    })
        
    //use 'useEffect' to update local Storage whenever that piece of state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state]);

    return [state, dispatch];
}

export default useLocalStorageReducer;
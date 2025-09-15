import React, {useReducer} from 'react';
import {settingsReducer} from "../Reducer/SettingsReducer.js";
import {SettingsContext} from "../Context/Context.js";

const SettingsProvider = ({children}) => {

    const initialState = {
        model: "flux",
        seed: 0,
        width: 1024,
        height: 1024,
        prompt: "",
        images: [],
        loading: false,
        error: null
    };

    const [state, dispatch] = useReducer(settingsReducer, initialState);

    return (
        <SettingsContext.Provider value={{state, dispatch}}>
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsProvider;
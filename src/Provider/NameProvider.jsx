import React, {useEffect, useState} from 'react';
import {NameContext} from "../Context/Context.js";

const STORAGE_KEY = "userName";
const DEFAULT_NAME = "Guest";

const NameProvider = ({children}) => {

    const [name, setName] = useState("");
    const [showNameModal, setShowNameModal] = useState(false);

    useEffect(() => {
        const savedName = localStorage.getItem(STORAGE_KEY);
        if (savedName) {
            setName(savedName);
            setShowNameModal(false);
        } else {
            setShowNameModal(true);
        }
    }, []);

    const saveName = (newName) => {
        localStorage.setItem(STORAGE_KEY, newName);
        setName(newName);
        setShowNameModal(false);
    };

    const cancelName = () => {
        localStorage.setItem(STORAGE_KEY, DEFAULT_NAME);
        setName(DEFAULT_NAME);
        setShowNameModal(false);
    };

    return (
        <NameContext.Provider value={{name, setName, showNameModal, setShowNameModal, saveName, cancelName}}>
            {children}
        </NameContext.Provider>
    );
};

export default NameProvider;
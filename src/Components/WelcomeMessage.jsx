import React, {useContext} from 'react';
import {NameContext} from "../Context/Context.js";

const WelcomeMessage = () => {

    const {name} = useContext(NameContext);

    return (
        <>
            <h2 className="text-4xl font-bold mb-8">Let's create a masterpiece, {name}! <span
                className="text-2xl">👋</span>
            </h2>
        </>
    );
};

export default WelcomeMessage;
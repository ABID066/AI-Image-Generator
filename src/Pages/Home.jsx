import React from 'react';
import SettingsPanel from "../Components/SettingsPanel.jsx";
import WelcomeMessage from "../Components/WelcomeMessage.jsx";
import SearchInput from "../Components/SearchInput.jsx";
import ResultAsImage from "../Components/ResultAsImage.jsx";

import Layout from "./Layout.jsx";

const Home = () => {

    return (
        <Layout>

            <WelcomeMessage/>
            <SearchInput/>
            <SettingsPanel/>

            <div>
                <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
                <ResultAsImage/>
            </div>

        </Layout>
    );
};

export default Home;
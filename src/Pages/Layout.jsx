import React from 'react';
import Header from "../Components/Header.jsx";
import SingleImageModal from "../Components/SingleImageModal.jsx";
import {useSingleImage} from "../Hooks/useSingleImage.js";
import NameModal from "../Components/NameModal.jsx";
import {useName} from "../Hooks/useName.js";

const Layout = ({children}) => {

    const {showModal} = useSingleImage();
    const { showNameModal } = useName()

    return (
        <>
            {showNameModal && <NameModal />}

            {showModal && <SingleImageModal/>}


            <div className="container mx-auto px-4 py-8 max-w-6xl">

                <Header/>

                <div className="fixed -bottom-1/4 -right-0 ">

                    <div
                        className="h-96 w-96 bg-gradient-to-r from-pink-600 to-indigo-400 rotate-90 rounded-full blur-[180px] ">
                    </div>

                </div>

                <main className="relative z-10">

                    {children}

                </main>

            </div>

        </>
    );
};

export default Layout;
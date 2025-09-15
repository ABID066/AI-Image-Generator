import React, {useState} from 'react';
import {SingleImageContext} from "../Context/Context.js";


const SingleImageModalProvider = ({children}) => {

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setShowModal(false);
    };


    return (
        <SingleImageContext.Provider value={{ showModal, selectedImage, openModal, closeModal }}>
            {children}
        </SingleImageContext.Provider>
    );
};

export default SingleImageModalProvider;

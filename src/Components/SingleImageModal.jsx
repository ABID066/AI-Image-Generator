import React from 'react';

import {useSingleImage} from "../Hooks/useSingleImage.js";


const SingleImageModal = () => {

    const {closeModal, selectedImage} = useSingleImage();


    return (
        <div>
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                <div className="relative max-w-3xl w-full p-4">
                    <button
                        onClick={closeModal}
                        className="cursor-pointer absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full"
                    >
                        ✕
                    </button>
                    
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="w-full max-h-[90vh] object-contain rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default SingleImageModal;
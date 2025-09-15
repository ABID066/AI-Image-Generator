import React from 'react';
import Layout from "./Layout.jsx";
import SavedImages from "../Components/SavedImages.jsx";
import { DeleteAllIcon } from "../Components/icons/Icons.jsx";
import useImageActions from "../Hooks/useImageActions.js";

const SavedImage = () => {
    const { savedImages, deleteAll, deleteImage } = useImageActions();

    return (
        <Layout>

            <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-bold">Saved Images</h2>

                <button
                    onClick={deleteAll}
                    className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                    <DeleteAllIcon />
                    Delete All
                </button>
            </div>

            <SavedImages savedImages={savedImages} removeImage={deleteImage} />
        </Layout>
    );
};

export default SavedImage;

import React from "react";
import { DownloadIcon, DeleteIcon } from "./icons/Icons.jsx";
import useImageAction from "../Hooks/useImageActions.js";
import {useSingleImage} from "../Hooks/useSingleImage.js";

const SavedImages = ({ savedImages, removeImage }) => {

    const {downloadImage} = useImageAction();
    const { openModal } = useSingleImage();

    if (!savedImages.length) {
        return (
            <div className="text-zinc-500 text-center py-4">
                No saved images yet.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {savedImages.map((img, index) => (
                <div
                    key={index}
                    className="image-card rounded-xl overflow-hidden cursor-pointer relative bg-zinc-900/50"
                    onClick={() => openModal(img)}
                >
                    {/* Delete Button */}
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            removeImage(img);
                        }}
                        className="absolute top-2 right-2 p-1 bg-black/50 rounded-full z-10 cursor-pointer hover:bg-red-500/30"
                    >
                        <DeleteIcon />
                    </div>

                    {/* Download Button */}
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            downloadImage(img);
                        }}
                        className="absolute bottom-2 right-2 p-1 bg-black/50 rounded-full z-10 cursor-pointer hover:bg-blue-500/30"
                    >
                        <DownloadIcon />
                    </div>

                    {/* Image */}
                    <img
                        src={img}
                        alt={`Saved-${index}`}
                        className="w-full h-48 object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default SavedImages;

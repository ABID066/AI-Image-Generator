import React, { useState } from "react";
import useImageGenerator from "../Hooks/useImageGenerator.js";
import { DownloadIcon, DeleteIcon, SaveIcon } from "./icons/Icons.jsx";
import { useSingleImage } from "../Hooks/useSingleImage.js";
import useImageActions from "../Hooks/useImageActions.js";

const ResultAsImage = () => {
    const { images, loading: generatingImages, error } = useImageGenerator();
    const { openModal } = useSingleImage();
    const {toggleSaveImage, downloadImage, isImageSaved} = useImageActions();

    const [loadingStates, setLoadingStates] = useState({});

    if (error) return <div className="text-red-500 text-center py-4">{error}</div>;
    if (generatingImages) return <div className="text-white text-center py-4">Generating images...</div>;
    if (!images.length) return <div className="text-zinc-500 text-center py-4">No images generated yet. Try entering a prompt!</div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {images.map((img, index) => {
                const saved = isImageSaved(img);

                return (
                    <div
                        onClick={() => openModal(img)}
                        key={index}
                        className="image-card rounded-xl overflow-hidden cursor-pointer relative bg-zinc-900/50"
                    >
                        {/* Save/Delete Toggle */}
                        <div
                            className="absolute top-2 right-2 p-1 bg-black/50 rounded-full z-10"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleSaveImage(img);
                            }}
                        >
                            {saved ? <DeleteIcon /> : <SaveIcon />}
                        </div>

                        {/* Download */}
                        <div
                            className="absolute bottom-2 right-2 p-1 bg-black/50 rounded-full z-10"
                            onClick={(e) => {
                                e.stopPropagation(); // prevent modal from opening
                                downloadImage(img);
                            }}
                        >
                            <DownloadIcon />
                        </div>

                        {loadingStates[index] !== false && (
                            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/50">
                                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <p className="text-white ml-2">Please wait</p>
                            </div>
                        )}

                        <img
                            src={img}
                            alt=""
                            className="w-full h-48 object-cover"
                            onLoad={() =>
                                setLoadingStates((prev) => ({ ...prev, [index]: false }))
                            }
                            onError={(e) => {
                                e.target.src =
                                    'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>';
                                e.target.className =
                                    "w-full h-48 object-contain p-16 text-zinc-600";
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ResultAsImage;

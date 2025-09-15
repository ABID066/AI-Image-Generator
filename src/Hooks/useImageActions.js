import { useState, useEffect } from "react";

const STORAGE_KEY = "saved_images";

const useImageActions = () => {
    const [savedImages, setSavedImages] = useState([]);

    // Load saved images from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            setSavedImages(JSON.parse(stored));
        }
    }, []);

    // Save an image
    const saveImage = (imageUrl) => {
        if (!savedImages.includes(imageUrl)) {
            const updated = [...savedImages, imageUrl];
            setSavedImages(updated);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        }
    };

    // Delete an image
    const deleteImage = (imageUrl) => {
        const updated = savedImages.filter((img) => img !== imageUrl);
        setSavedImages(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    };

    // Delete All image
    const deleteAll = () => {
        localStorage.removeItem("saved_images");
        setSavedImages([]);

    };

    // Toggle save/delete
    const toggleSaveImage = (imageUrl) => {
        if (savedImages.includes(imageUrl)) {
            deleteImage(imageUrl);
        } else {
            saveImage(imageUrl);
        }
    };

    // Download image
    const downloadImage = async (imageUrl) => {
        try {
            const response = await fetch(imageUrl, { mode: "cors" });
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = "downloaded-ai-image.jpg";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // cleanup
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download failed:", error);
        }
    };


    // Check if image is saved
    const isImageSaved = (imageUrl) => savedImages.includes(imageUrl);

    return {
        savedImages,
        saveImage,
        deleteImage,
        deleteAll,
        toggleSaveImage,
        downloadImage,
        isImageSaved,
    };
};

export default useImageActions;

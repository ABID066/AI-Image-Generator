import { useContext } from "react";
import { SettingsContext } from "../Context/Context.js";

const useImageGenerator = () => {
    const { state, dispatch } = useContext(SettingsContext);

    const generateImages = async (count = 9) => {
        if (!state.prompt) {
            dispatch({ type: "SET_ERROR", payload: "Prompt is required!" });
            return;
        }

        dispatch({ type: "SET_LOADING", payload: true });
        dispatch({ type: "SET_ERROR", payload: null });

        try {
            const encodedPrompt = encodeURIComponent(state.prompt);
            const urls = Array.from({ length: count }, (_, i) =>
                `https://image.pollinations.ai/prompt/${encodedPrompt}?model=${state.model}&width=${state.width}&height=${state.height}&seed=${state.seed + i}&nologo=true`
            );

            dispatch({ type: "SET_IMAGES", payload: urls });
        } catch (err) {
            console.error("Error generating images:", err);
            dispatch({ type: "SET_ERROR", payload: "Failed to generate images" });
        } finally {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    };

    return { 
        images: state.images, 
        loading: state.loading, 
        error: state.error, 
        generateImages 
    };
};

export default useImageGenerator;

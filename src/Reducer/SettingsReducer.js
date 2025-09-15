export const settingsReducer = (state, action) => {
    switch (action.type) {
        case "SET_MODEL":
            return { ...state, model: action.payload };
        case "SET_SEED":
            return { ...state, seed: action.payload };
        case "SET_WIDTH":
            return { ...state, width: action.payload };
        case "SET_HEIGHT":
            return { ...state, height: action.payload };
        case "SET_PROMPT":
            return { ...state, prompt: action.payload };
        case "SET_IMAGES":
            return { ...state, images: action.payload };
        case "SET_LOADING":
            return { ...state, loading: action.payload };
        case "SET_ERROR":
            return { ...state, error: action.payload };
        case "SET_ASPECT_RATIO":
            switch (action.payload) {
                case "1:1":
                    return { ...state, width: 1024, height: 1024 };
                case "16:9":
                    return { ...state, width: 1280, height: 720 };
                case "4:3":
                    return { ...state, width: 1024, height: 768 };
                case "3:2":
                    return { ...state, width: 1200, height: 800 };
                default:
                    return state;
            }
        default:
            return state;
    }
};
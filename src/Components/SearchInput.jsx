import React, { useContext } from 'react';
import { SearchIcon, SubmitIcon } from "./icons/Icons.jsx";
import { SettingsContext } from "../Context/Context.js";
import useImageGenerator from "../Hooks/useImageGenerator.js";

const SearchInput = () => {
    const { state, dispatch } = useContext(SettingsContext);
    const { generateImages, images } = useImageGenerator();

    const handleChange = (e) => {
        dispatch({ type: "SET_PROMPT", payload: e.target.value });
    };

    const handleSubmit = () => {
        generateImages(9)
        console.log(images)
    };

    return (
        <div>
            <div className="relative mb-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm">
                <div className="flex items-center">
                    <div className="pl-5 pr-2">
                        <SearchIcon />
                    </div>

                    {/* Controlled input */}
                    <input
                        type="text"
                        placeholder="Create with Prompts"
                        value={state.prompt}
                        onChange={handleChange}
                        className="outline-none w-full py-4 px-2 bg-transparent text-white placeholder-zinc-400 text-lg"
                    />

                    <button
                        onClick={handleSubmit}
                        className="cursor-pointer bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 mr-1 rounded-full"
                    >
                        <SubmitIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchInput;

import React, { useState } from "react";
import {useName} from "../Hooks/useName.js";

const NameModal = () => {

    const [inputName, setInputName] = useState("");
    const { saveName, cancelName } = useName();

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xs">

            </div>

            {/* Modal */}
            <div
                className="relative bg-gradient-to-br from-[#0f0f0f] to-[#1a0b2e] rounded-2xl shadow-lg p-6 w-[90%] max-w-md border border-zinc-800"
            >
                <h2 className="text-xl text-center font-semibold text-white mb-4">
                    Enter Your Name
                </h2>

                <input
                    type="text"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />

                <div className="flex justify-end gap-3 mt-6">
                    <button
                        onClick={cancelName}
                        className="cursor-pointer px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-gray-300 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => saveName(inputName || "Guest")}
                        className="cursor-pointer px-4 py-2 rounded-lg bg-white hover:bg-blue-700 hover:text-white text-black transition"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};
export default NameModal;

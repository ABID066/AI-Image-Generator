import React, {useContext} from "react";
import useModel from "../Hooks/useModel.js";
import { VscLoading } from "react-icons/vsc";
import { FaDice } from "react-icons/fa";
import {SettingsContext} from "../Context/Context.js";

const SettingsPanel = () => {
    const { models, loading } = useModel();
    const { state, dispatch } = useContext(SettingsContext);

    const generateSeed = () => {
        const randomNum = Math.floor(Math.random() * 1000000);
        dispatch({ type: "SET_SEED", payload: randomNum });
    };

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">Advanced Settings</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* Model Dropdown */}
                <div>
                    <label htmlFor="model" className="block text-sm font-medium text-zinc-400 mb-1">
                        Model
                    </label>
                    <select
                        id="model"
                        value={state.model}
                        onChange={(e) => dispatch({ type: "SET_MODEL", payload: e.target.value })}
                        className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                        {loading ? (
                            <option disabled><VscLoading className="animate-spin" /></option>
                        ) : (
                            models.map((model, index) => (
                                <option key={index} className="bg-zinc-900" value={model}>
                                    {capitalize(model)}
                                </option>
                            ))
                        )}
                    </select>
                </div>

                {/* Seed Input */}
                <div>
                    <label htmlFor="seed" className="block text-sm font-medium text-zinc-400 mb-1">
                        Seed (for reproducible results)
                    </label>
                    <div className="relative flex items-center">
                        <FaDice
                            onClick={generateSeed}
                            className="absolute left-3 text-zinc-500 hover:text-white cursor-pointer"
                        />
                        <input
                            type="number"
                            id="seed"
                            value={state.seed ?? ""}
                            onChange={(e) => dispatch({ type: "SET_SEED", payload: Number(e.target.value) })}
                            placeholder="Random"
                            className="w-full pl-10 pr-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                    </div>
                </div>

                {/* Width Input */}
                <div>
                    <label htmlFor="width" className="block text-sm font-medium text-zinc-400 mb-1">
                        Width
                    </label>
                    <input
                        type="number"
                        id="width"
                        value={state.width}
                        onChange={(e) => dispatch({ type: "SET_WIDTH", payload: Number(e.target.value) })}
                        className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                </div>

                {/* Height Input */}
                <div>
                    <label htmlFor="height" className="block text-sm font-medium text-zinc-400 mb-1">
                        Height
                    </label>
                    <input
                        type="number"
                        id="height"
                        value={state.height}
                        onChange={(e) => dispatch({ type: "SET_HEIGHT", payload: Number(e.target.value) })}
                        className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                </div>

                {/* Aspect Ratio Presets */}
                <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">Aspect Ratio Presets</label>
                    <div className="flex flex-wrap gap-2">
                        {["1:1", "16:9", "4:3", "3:2"].map((ratio) => (
                            <button
                                key={ratio}
                                type="button"
                                onClick={() => dispatch({ type: "SET_ASPECT_RATIO", payload: ratio })}
                                className="bg-zinc-900/10 px-3 py-3 text-xs hover:bg-zinc-800 rounded transition-colors cursor-pointer"
                            >
                                {ratio}
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SettingsPanel;

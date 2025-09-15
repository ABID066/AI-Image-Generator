import React from "react";
import logo from "./../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex items-center mb-12 justify-between">
            <div className="flex items-center">
                <a href="/">
                    <img src={logo} className="h-22" alt="Logo"/>
                </a>
                <a href="/">
                    <h1 className="text-xl font-bold">Ai Studio</h1>
                </a>

            </div>
            <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `cursor-pointer transition-all ${isActive 
                            ? "text-white font-medium" 
                            : "text-zinc-400 hover:text-zinc-200"}`
                    }
                >
                    Create Image
                </NavLink>
                <NavLink
                    to="/saved-images"
                    className={({ isActive }) =>
                        `cursor-pointer transition-all ${isActive
                                ? "text-white font-medium"
                                : "text-zinc-400 hover:text-zinc-200"
                        }`
                    }
                >
                    Saved Images
                </NavLink>
            </ul>
        </header>
    );
};

export default Header;

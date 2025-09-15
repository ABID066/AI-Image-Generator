import {useContext} from "react";
import {NameContext} from "../Context/Context.js";

export const useName = () => useContext(NameContext);
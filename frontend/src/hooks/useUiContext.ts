import { useContext } from "react";
import { uiContext } from "../context/ui.context";


export const useUiContext  = () => useContext(uiContext);

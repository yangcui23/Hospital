import { InfoContext } from "../context/InfoContext";
import { useContext } from "react";

export const useInfoContext = () => {
    const context = useContext(InfoContext)


    if (!context) {
        throw Error('dawda')
    }
    return context
}
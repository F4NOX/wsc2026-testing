import {createContext, useContext, useState} from "react";

const StoreContext = createContext({})

export const StoreProvider = ({children}) => {

    const [photos, setPhotos] = useState([])
    const [mode, setMode] = useState('manual')
    const [theme, setTheme] = useState('a')
    const [currentIdx, setCurrentIdx] = useState(0)
    const [prevIdx, setPrevIdx] = useState(null)

    return (
        <StoreContext.Provider value={{
            photos, setPhotos,
            mode, setMode,
            theme, setTheme,
            currentIdx, setCurrentIdx,
            prevIdx, setPrevIdx
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext);
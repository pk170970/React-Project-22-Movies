import React, { useContext, useState, useEffect } from 'react';
import useFetch from './useFetch';

export const noImgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [search, setSearch] = useState('batman');

    const { loading, error, data: movies } = useFetch(`&s=${search}`);
    
    return (
        <AppContext.Provider value={{
            search, setSearch, loading, error, movies
        }}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext };

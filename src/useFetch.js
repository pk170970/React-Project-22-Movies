import { useState, useEffect } from "react";

const movieUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

 const useFetch = (urlParams) => {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ show: false, msg: '' });
    const [data, setData] = useState([]);

    const fetchData = async (urls) => {
        console.log(urls);
        setLoading(true);
        try {
            const response = await fetch(urls);
            const data = await response.json();
            console.log(data);
            if (data.Response === 'True') {
                setData(data.Search || data);
                setError({ show: false, msg: '' });
            } else {
                setError({ show: true, msg: data.Error });
            }
            setLoading(false);
        } catch (error) {
            throw new Error(error);
        }

    }

    useEffect(() => {
        fetchData(`${movieUrl}${urlParams}`);
        console.log("I am changing");
    }, [urlParams]);

    return { loading, data, error }
}

export default useFetch;
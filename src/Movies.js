import React  from 'react'
import { NavLink } from 'react-router-dom';
import {  useGlobalContext, noImgUrl } from './context';


const Movies = () => {
    const { loading, movies } = useGlobalContext();

    if (loading) {
        return (
            <div className="loading"></div>
        )
    }

    return (
        <div className="movies">
            {movies.map(movie => {
                const {Poster, imdbID, Title, Year}= movie;
                return (
                    <NavLink to={`/movies/${imdbID}`} key={imdbID} className="movie" >
                        <article>
                            <img src={(Poster==="N/A" && noImgUrl)|| Poster} alt={Title} />
                            <div className="movie-info">
                                <h4>{Title}</h4>
                                <p>{Year}</p>
                            </div>
                        </article>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default Movies
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { url, noImgUrl, useGlobalContext } from './context';
import useFetch from './useFetch';


const SingleMovie = () => {
  const { id } = useParams();

  const {loading, data:movieName}= useFetch(`&i=${id}`)

  if (loading) {
    return (
      <div className="loading"></div>
    )
  }
  return (
    <section className="single-movie">
      <img src={(movieName.Poster === "N/A" && noImgUrl) || movieName.Poster} alt={movieName.Title} />
      <div className="single-movie-info">
        <h2>{movieName.Title}</h2>
        <p>{movieName.Plot}</p>
        <h4>{movieName.Year}</h4>
        <NavLink className='btn' to="/">Back to Movies</NavLink>
      </div>
    </section>
  )
}

export default SingleMovie
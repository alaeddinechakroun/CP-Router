import React from 'react'
import MovieCard from '../moviecard/MovieCard'
import './MovieList.css'

const MovieList = ({movies}) => {
  return (
    <div>
        
        <div className='List_holder'>{movies.map(e=><MovieCard e={e}>hello</MovieCard>)}</div>
    </div>
  )
}

export default MovieList
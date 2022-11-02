import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?apikey=8ec87600';

function App() {

  const [movies, setMovies ] = useState([]);

  const [searchByName, setSearchByName ] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('Shrek');
  }, [])

  return (
    <div className='app'>
      <h1>Movies</h1>

      <div className='search'>
        <input 
          placeholder='Search'
          value={searchByName}
          onChange={(e) => setSearchByName(e.target.value)}
        />
        <img 
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(setSearchByName)}
        />
      </div>

      {movies?.length > 0
        ? (
          <div className='contianer'>
            {movies.map((movie, indice) => (
              <MovieCard key={indice} movie={movie}/>
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )}

    </div>
  );
}

export default App;

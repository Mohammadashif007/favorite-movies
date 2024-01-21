import { useEffect } from "react";
import { useState } from "react";
import Movie from "../Movie/Movie";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("movies.json")
            .then((res) => res.json())
            .then((data) => setMovies(data.movies));
    }, []);
    return (
        <div>
            <h1>Movies length {movies.length}</h1>
            <div className="w-4/5 mx-auto grid grid-cols-3 gap-6">
                {movies.map((movie) => (
                    <Movie key={movie.id} movie={movie}></Movie>
                ))}
            </div>
        </div>
    );
};

export default Movies;

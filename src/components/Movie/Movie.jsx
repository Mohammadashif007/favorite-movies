const Movie = ({ movie }) => {
    const { name, rating, poster, genres, description } = movie;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={poster} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="flex justify-between items-center">
                    <div>
                        <button className="btn transition ease-in-out text-white bg-[#030637] duration-300 hover:-translate-y-1 hover:text-black ">Add To Cart</button>
                    </div>
                    <div>
                        <div className="badge badge-outline">{genres[0]}</div>
                        <div className="badge badge-outline">{genres[1]}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;

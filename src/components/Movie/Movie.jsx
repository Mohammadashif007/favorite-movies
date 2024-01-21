const Movie = ({ movie }) => {
    const { name, poster, genres, description, id } = movie;
    const handleAddItem = (id) => {
        const cartItemInfo = {
            cartMovieId : id,
            name,
            poster,
            genres
        }
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItemInfo)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };
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
                        <button
                            onClick={() => handleAddItem(id)}
                            className="btn transition ease-in-out text-white bg-[#030637] duration-300 hover:-translate-y-1 hover:text-black "
                        >
                            Add To Cart
                        </button>
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

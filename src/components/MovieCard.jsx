import React from "react";

function MovieCard({
  poster_path,
  name,
  handleAddToWatchlist,
  movieObj,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="flex justify-center items-center m-4 h-8 w-8 rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchlist(movieObj)}
          className="flex justify-center items-center m-4 h-8 w-8 rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-center w-full p-2 rounded-b-xl bg-gray-900/60 text-xl">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;

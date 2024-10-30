import React, { useEffect, useState } from "react";
import genreids from "../Utility/genre";

function WatchList({ watchlist, setWatchList ,handleRemoveFromWatchList}) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All genres"]);
  const [curr, setCurr] = useState("All genres");
  let handleSearch = (e) => {
    setSearch(e.target.value);
  };
  let handleFilter = (genre) => {
    setCurr(genre);
  };
  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncreasing]);
  };
  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDecreasing]);
  };
  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All genres", ...temp]);
  }, [watchlist]);
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                curr == genre
                  ? "flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4"
                  : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>
      <div className="rounded-lg overflow-hidden border border-gray-200 m-8">
        <table className="text-center w-full text-gray-500">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center space-x-2">
                <div onClick={sortIncreasing}>
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div>Ratings</div>
                <div onClick={sortDecreasing}>
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj)=>{
              if(curr=='All genres'){
                return true
              }
              else{
                return genreids[movieObj.genre_ids[0]]==curr
              }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-4 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td onClick={()=>handleRemoveFromWatchList(movieObj)} className="text-red-800 font-bold">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;

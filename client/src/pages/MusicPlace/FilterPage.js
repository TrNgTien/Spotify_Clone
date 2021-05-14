import React, { useState, useEffect, useCallback } from "react";
import { _getAllArtists } from "../../api/Artist";
import { _getAllGenres } from "../../api/Genre";
import FilterSelect from "../../components/Select/FilterSelect";
import SongFilter from "../../components/SongFilter";
import { LikeTypes } from "../../constants/DropDown";
// import "./styles/FilterPage.css";
import "./styles/compressed/FilterPage.min.css";

function FilterPage(props) {
  const songList = props.songList;
  const [artistList, setArtistList] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [likeType, setLikeType] = useState([].concat(Object.values(LikeTypes)));

  const [isApplyFilter, setIsApplyFilter] = useState(false);
  const [filteredSong, setFilteredSong] = useState({
    songNameFiltered: "",
    artistNameFiltered: "",
  });

  const [selectedArtist, setSelectedArtist] = useState();
  const [selectedGenre, setSelectedGenre] = useState();
  const [selectedLikeType, setSelectedLikeType] = useState();

  const [isFilteredSongAvailable, setIsFilteredSongAvailable] = useState(false);

  const getAllArtists = useCallback(() => _getAllArtists());
  const getAllGenres = useCallback(() => _getAllGenres());
  useEffect(() => {
    getAllArtists().then((res) => {
      let newArtistList = artistList.concat(res.data.data);
      setArtistList(newArtistList);
    });
    getAllGenres().then((gen) => {
      let newGenreList = genreList.concat(gen.data.data);
      setGenreList(newGenreList);
    });
  }, []);

  const onChangeArtist = (artistOpt) => setSelectedArtist(artistOpt);
  const onChangeGenre = (genreOpt) => setSelectedGenre(genreOpt);
  const onChangeLikeType = (likeTypeOpt) =>
    setSelectedLikeType(
      Object.keys(LikeTypes).filter((key) => LikeTypes[key] === likeTypeOpt)[0]
    );

  const handleFilterApplied = () => {
    let currentSongList = sortSongListBaseOnNumberOfLike(selectedLikeType);
    let newFilteredSong = filteredSong;
    for (let song of currentSongList) {
      if (
        song.artistName === selectedArtist &&
        song.genreName === selectedGenre
      ) {
        newFilteredSong.songNameFiltered = song.songName;
        newFilteredSong.artistNameFiltered = song.artistName;
        break;
      }
    }

    if (
      newFilteredSong.songNameFiltered === "" &&
      newFilteredSong.artistNameFiltered === ""
    )
      setIsFilteredSongAvailable(false);
    else setIsFilteredSongAvailable(true);

    setFilteredSong(newFilteredSong);
    setIsApplyFilter(true);
  };

  const sortSongListBaseOnNumberOfLike = (likeOrder) => {
    let currentSongList = [].concat(songList);
    for (let i = 0; i < currentSongList.length - 1; i++)
      for (let j = 0; j < currentSongList.length - i - 1; j++)
        if (likeOrder === "Increase") {
          if (
            currentSongList[j].numberOfLikes >
            currentSongList[j + 1].numberOfLikes
          ) {
            let temp = currentSongList[j].numberOfLikes;
            currentSongList[j].numberOfLikes =
              currentSongList[j + 1].numberOfLikes;
            currentSongList[j + 1].numberOfLikes = temp;
          }
        } else if (likeOrder === "Decrease") {
          if (
            currentSongList[j].numberOfLikes <
            currentSongList[j + 1].numberOfLikes
          ) {
            let temp = currentSongList[j].numberOfLikes;
            currentSongList[j].numberOfLikes =
              currentSongList[j + 1].numberOfLikes;
            currentSongList[j + 1].numberOfLikes = temp;
          }
        }

    return currentSongList;
  };

  return (
    <div id="filter-page">
      <h2 id="filter-page-title">
        <i>Awesome Song Filter</i>
      </h2>
      <div id="form-container">
        <div className="select-label" id="artist-label">
          Artist:{" "}
        </div>
        {artistList.length > 0 ? (
          <FilterSelect
            onChangeArtist={onChangeArtist}
            filterOptions={artistList}
            listType="artist"
          />
        ) : null}
        <div className="select-label" id="genre-label">
          Genre:{" "}
        </div>
        {genreList.length > 0 ? (
          <FilterSelect
            onChangeGenre={onChangeGenre}
            filterOptions={genreList}
            listType="genre"
          />
        ) : null}
        <button id="filter-button" onClick={() => handleFilterApplied()}>
          Apply Filter
        </button>
        <div className="select-label">Sort: </div>
        <select
          onChange={(el) => onChangeLikeType(el.target.value)}
          className="select-box"
        >
          {likeType.map((type, index) => (
            <option key={index}>{type}</option>
          ))}
        </select>
      </div>

      <div id="result-container">
        <h3 style={{ marginTop: "30px" }}>
          <i>Results</i>
        </h3>
        {/* {isApplyFilter && isFilteredSongAvailable && (
          <SongFilter
            songNameFiltered={filteredSong.songNameFiltered}
            artistNameFiltered={filteredSong.artistNameFiltered}
          />
        )} */}

        {isApplyFilter && isFilteredSongAvailable === true ? (
          <SongFilter
            songNameFiltered={filteredSong.songNameFiltered}
            artistNameFiltered={filteredSong.artistNameFiltered}
          />
        ) : isApplyFilter && isFilteredSongAvailable === false ? (
          <div style={{ color: "red", fontSize:"20px" }}>No song available now</div>
        ) : null}
      </div>
    </div>
  );
}

export default FilterPage;

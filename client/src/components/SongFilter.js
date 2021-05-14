import React from 'react';

import './styles/compressed/SongFilter.min.css'
// import './styles/SongFilter.css'

function SongFilter(props) {
    return (
        <div className="song-filter-container">
            <div className="song-filter--songName">{props.songNameFiltered}</div>
            <div className="song-filter--artistName">{props.artistNameFiltered}</div>
        </div>
    );
}

export default SongFilter;
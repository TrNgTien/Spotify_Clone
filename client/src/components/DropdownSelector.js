import React from 'react';
import './styles/dropdown.css';

const dropdown_artist = document.getElementsByClassName('dropdown-container')[0];
const dropdown_genre = document.getElementsByClassName('dropdown-container')[1];
let dropdown_sort = document.getElementsByClassName('dropdownSelector')[2];

function toggle_artist(e) {
    console.log(dropdown_artist);
    e.preventDefault();
    if (dropdown_artist.style.display === 'none') dropdown_artist.style.display = 'block';
    else dropdown_artist.style.display = 'none';
}

function toggle_genre(e) {
    console.log();
    e.preventDefault(dropdown_genre);
    if (dropdown_genre.style.display === 'none') dropdown_genre.style.display = 'block';
    else dropdown_genre.style.display = 'none';
}

function toggle_sort(e) {
    console.log(dropdown_artist);
    e.preventDefault();
    if (dropdown_artist.style.display === 'none') dropdown_sort.style.display = 'block';
    else dropdown_sort.style.display = 'none';
}

function DropdownSelector(props) {
    return(
        <div className = "dropdownSelector" id = {props.label}>
            <label className = 'dropdownLabel'>{props.label}: </label>
            <div className = "option-display">
                <div className = 'selected-option'>abc</div>
                <button className = "openDropdownButton" onClick = {toggle_artist}>{'\u{1F783}'}</button> {/**unicode for the downward triangle, syntax: 'u\{unicode}' */}
            </div>
        </div>
    )
}

export default DropdownSelector;

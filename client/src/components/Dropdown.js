import React from 'react';
import Option from './Option';


function Dropdown() {
    return(
        <div className = 'dropdown-container'>
            <Option filterBy = 'artist' id = "Ed Sheeran" label = "Ed Sheeran" value = "Ed Sheeran" name = "artist"/>
            <Option filterBy = 'artist' id = "Post Malone" label = "Post Malone" value = "Post Malone" name = "artist"/>
            <Option filterBy = 'artist' id = "Maroon 5" label = "Maroon 5" value = "Maroon 5" name = "artist"/>
        </div>
    )
}

export default Dropdown;
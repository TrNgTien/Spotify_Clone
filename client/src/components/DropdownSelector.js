import React from 'react';
import './styles/dropdown.css';

let dropdown = document.getElementsByClassName('dropdown-container');

function DropdownSelector(props) {

    function toggle(e) {
        e.preventDefault();
        if (dropdown.style.display === 'none') dropdown.style.display = 'block';
        else dropdown.style.display = 'none';
    }

    return(
        <div className = "dropdownSelector" id = {props.label}>
            <label style = {{paddingTop : '6px', marginRight: '15px'}}>{props.label}: </label>
            <div className = "option-display" onClick = {toggle}>
                <div className = 'selected-option'>abc</div>
                <button className = "openDropdownButton" onClick = {toggle}>{'\u{1F783}'}</button> {/**unicode for the downward triangle, syntax: 'u\{unicode}' */}
            </div>
        </div>
    )
}

export default DropdownSelector;
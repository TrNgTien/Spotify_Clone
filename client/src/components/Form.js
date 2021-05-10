import React from 'react';
import Dropdown from './Dropdown';
import DropdownSelector from './DropdownSelector';

function Form() {
    return(
        <form>
            <div id = 'line1'>    
                <div className = 'filterCategory'>
                    <DropdownSelector label = "Artist"/>
                    <Dropdown/>
                </div>
                <div className = 'filterCategory'>
                    <DropdownSelector label = "Genre"/>
                    <Dropdown/>
                </div>
                <button id = "filterButton">Apply Filter</button>
                <div className = 'filterCategory'>
                    <DropdownSelector label = "Sort"/>
                    <Dropdown style = {{left: "70px"}}/>
                </div>
            </div>
        </form>
    )
}

export default Form;
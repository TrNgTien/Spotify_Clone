import React from 'react';
import Dropdown from './Dropdown';
import DropdownSelector from './DropdownSelector';

function Form() {
    return(
        <form>
            <DropdownSelector label = "Artist"/>
            <Dropdown/>
        </form>
    )
}

export default Form;
import React from 'react'
import './styles/dropdown.css';

function Option(props) {
    console.log();
    return (
        <div className = {props.filterBy + ' option'} id = {props.id}>
            <label className = "label" for = {props.id + "-option"}>{props.label}</label>
            <input className = "checkbox" id = {props.id + "-option"} type = "radio" value = {props.value} name = {props.name}></input>
        </div>
    )
}

export default Option;
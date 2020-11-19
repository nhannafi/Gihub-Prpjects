import React from 'react';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from './logo.jpg';

const Searchform = ({ handleSubmit}) => (
    <form className="text-center" onSubmit={handleSubmit}>
        <img src={logo}  alt="Logo" className="logo" ></img>
        <input
            type="text" 
            className="searchbar transparent"
            id="gitUsername"
            placeholder='Your GitHub username'
            name="gitUsername"
        />
        <input className="button" id="button" type="submit" value="Search" />
        <div className="mt-2">
            <label className="mr-2 text-white">Show only owned repositories</label>
            <input type="checkbox" name="onlyOwner" id="onlyOwner" defaultChecked={true}/>
        </div>
    </form>
)

export default Searchform
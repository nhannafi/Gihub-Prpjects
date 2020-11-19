import './App.css';
import React, { Component } from 'react';
import Searchform from './Searchform';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            gitUsername: null,
            isLoading: false,
            userInfos: false,
            userRepos: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        const data = new FormData(e.target)
        const gitUsername = data.get('gitUsername')
        const onlyOwner = data.get('onlyOwner')
        this.fetchData(gitUsername, onlyOwner)
    }
    render(){
        return(
            <div className="wrapper">
                <Searchform/>
            </div>
        )
    }
}

export default App;
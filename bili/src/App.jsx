import React, { Component } from 'react'
import './css/App.css'

import Search from './components/Search'
import List from './components/List'

class App extends Component {
    state = {
        keyword: ''
    }
    render() {
        return (
            <div>
                <div className='list_margin'></div>
                <Search getKeyword={this.getKeyword.bind(this)} />
                <div className='list_top'></div>
                <List keyword={this.state.keyword} />
                <div className='list_margin'></div>
            </div>
        )
    }
    getKeyword(keyword) {
        this.setState({keyword: keyword})
    }
}

export default App
import React, { Component } from 'react'
import './css/App.css'

import Search from './components/Search'
import List from './components/List'

class App extends Component {
    render() {
        return (
            <div>
                <div className='list_margin'></div>
                <Search />
                <div className='list_top'></div>
                <List />
                <div className='list_margin'></div>
            </div>
        )
    }
}

export default App
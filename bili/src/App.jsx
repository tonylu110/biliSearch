import React, { Component } from 'react'
import './css/App.css'

import Search from './components/Search'
import List from './components/List'

class App extends Component {
    state = {
        arr: []
    }
    render() {
        return (
            <div>
                <div className='list_margin'></div>
                <Search getList={this.getList.bind(this)} />
                <div className='list_top'></div>
                <List arr={this.state.arr} />
                <div className='list_margin'></div>
            </div>
        )
    }
    getList(arr) {
        this.setState({arr: arr})
    }
}

export default App
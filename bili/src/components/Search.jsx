import React, { Component } from 'react'
import '../css/Search.css'

class search extends Component {
    render() {
        return (
            <div>
                <input type="text" id='search_input' placeholder='请输入你想搜索的内容' />
            </div>
        )
    }
}

export default search
import React from 'react'
import '../css/Search.css'

function search(props) {
    return (
        <div id='search_area'>
            <input type="text" id='search_input' placeholder='请输入你想搜索的内容' />
            <button onClick={() => {
                props.getKeyword(document.getElementById('search_input').value)
            }}>123</button>
        </div>
    )
}

export default search
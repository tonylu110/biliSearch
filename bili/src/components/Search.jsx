import React from 'react'
import axios from "axios"

import '../css/Search.css'

function Search(props) {

    const getList = (list) => props.getList(list)

    const toList = (keyword) => {
        axios.get('api/x/web-interface/search/all/v2', {
            params: {
                keyword: keyword,
                page: 1
            }
        }).then(function (response) {
            // handle success
            console.log(response);
        })
        getList(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"])
    }

    return (
        <div id='search_area'>
            <input type="text" id='search_input' placeholder='请输入你想搜索的内容' />
            <button onClick={() => {
                toList(document.getElementById('search_input').value)
            }}>123</button>
        </div>
    )
}

export default Search
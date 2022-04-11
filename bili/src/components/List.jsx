import React, { useState } from 'react'
import '../css/List.css'

function List(props) {
    let keyword = props.keyword
    
    const [arr] = useState([])

    return (
        <div>
            {
                arr.map((item, index) => {
                    return (
                        <div className="list_main" key={index}>{item}</div>
                    )
                })
            }
            <div>{keyword}</div>
        </div>
    )
}

export default List
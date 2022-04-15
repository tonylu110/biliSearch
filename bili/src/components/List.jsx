import React from 'react'
import '../css/List.css'

function List(props) {
    let arr = props.arr

    return (
        <div>
            {
                arr.map((item, index) => {
                    return (
                        <div className="list_main" key={index}>{item}</div>
                    )
                })
            }
        </div>
    )
}

export default List
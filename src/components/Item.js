import React from 'react'

const Item = ({item}) => {
    return (
        <div className="main-sec-wrap-item">
            <div className="item-main">
                <div className="item-main-badge">
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                    <div className="num">{item.num}</div>
                </div>
                <div className="item-main-text">
                    <h3 className="">{item.title}</h3>
                    <p>{item.body}</p>
                    <span>{item.category}</span>
                </div>
            </div>
            <div className="comment">
                <i className="fa fa-comment" aria-hidden="true"></i>
                <span>{item.commentNum}</span>
            </div>
        </div>
    )
}

export default Item

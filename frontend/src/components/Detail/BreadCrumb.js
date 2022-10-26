import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrumb(props) {
    const { item } = props;

    return (
        <div className="header__breadcrumb">
            <div className="container py-0 overflow-hidden">
                <div className="breadcrumb mb-0">
                    <Link to="/" className="breadcrumb-item">Trang chủ</Link>
                    <Link to="/" className="breadcrumb-item">Nhà sách Tiki</Link>
                    <Link to="/" className="breadcrumb-item">{item.cat_name}</Link>
                    <Link to="/" className="breadcrumb-item">{item.book_name}</Link>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb

import React from 'react'

function BreadCrumb({ cat_name, book_name }) {
    return (
        <div className="header__breadcrumb">
            <div className="container py-0 overflow-hidden">
                <div className="breadcrumb mb-0">
                    <a href="/" className="breadcrumb-item">Trang chủ</a>
                    <a href="/" className="breadcrumb-item">Nhà sách Tiki</a>
                    <a href="/" className="breadcrumb-item">{cat_name}</a>
                    <a href="/" className="breadcrumb-item">{book_name}</a>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb

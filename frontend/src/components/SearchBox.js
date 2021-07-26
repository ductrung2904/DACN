import React from 'react'

function SearchBox() {
    return (
        <div className="row">
            <div className="col-2">
                <a href="/">
                    <i className="tikicon icon-logo mr-3"></i>
                </a>
            </div>
            <div className="col-10 d-flex">
                <input type='text' id="txtTenSach" className="header__input w-75 d-inline rounded-start" placeholder="Nhập tên sách cần tìm" />
                <button id="btnTim" className="header__search d-flex align-items-center a-hover">
                    <div>
                        <i className="tikicon icon-search"></i>
                        Tìm kiếm
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SearchBox

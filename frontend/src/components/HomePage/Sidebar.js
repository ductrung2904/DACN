import React, { useEffect, useState } from 'react'
import filterApi from '../../api/filterApi'

function Sidebar() {
    const [category, setCategory] = useState([]);
    const [company, setCompany] = useState([]);
    const [shop, setShop] = useState([]);

    useEffect(() => {
        const fetchCategoryList = async () => {
            try {
                const response = await filterApi.getAllCategory();
                setCategory(response.data.data.category)
            } catch (error) {
                console.log(error);
            }
        }

        const fetchCompanyList = async () => {
            try {
                const response = await filterApi.getAllCompany();
                setCompany(response.data.data.company)
            } catch (error) {
                console.log(error);
            }
        }

        const fetchShopList = async () => {
            try {
                const response = await filterApi.getAllShop();
                setShop(response.data.data.shop)
            } catch (error) {
                console.log(error);
            }
        }

        fetchCategoryList();
        fetchCompanyList();
        fetchShopList();
    }, [])

    return (
        <section className="sidebar">
            <div className="block">
                <h4 className="title">Danh Mục Sản Phẩm</h4>
                <div className="list collapsed"><a className="item item--category "
                    href="https://tiki.vn/sach-tieng-anh/c320?src=c.8322.hamburger_menu_fly_out_banner">English
                    Books</a>
                    <a className="item item--category "
                        href="https://tiki.vn/qua-luu-niem/c18328?src=c.8322.hamburger_menu_fly_out_banner">Quà lưu
                        niệm</a>
                    <a className="item item--category "
                        href="https://tiki.vn/sach-truyen-tieng-viet/c316?src=c.8322.hamburger_menu_fly_out_banner">Sách
                        tiếng Việt</a>
                    <a className="item item--category "
                        href="https://tiki.vn/van-phong-pham-qua-luu-niem/c7741?src=c.8322.hamburger_menu_fly_out_banner">Văn
                        phòng phẩm</a>
                </div>
            </div>
            <div className="block">
                <h4 className="title">Đánh giá</h4>
                <div className="rating-list"><a className="item"
                    href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;rating=5&amp;page=1">
                    <p className="stars"><i className="icomoon icomoon-star"></i><i className="icomoon icomoon-star"></i><i
                        className="icomoon icomoon-star"></i><i className="icomoon icomoon-star"></i><i
                            className="icomoon icomoon-star"></i></p> <span className="text">từ 5 sao</span>
                </a>
                    <a className="item"
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;rating=4&amp;page=1">
                        <p className="stars"><i className="icomoon icomoon-star"></i><i className="icomoon icomoon-star"></i><i
                            className="icomoon icomoon-star"></i><i className="icomoon icomoon-star"></i><i
                                className="icomoon icomoon-star dark"></i></p>
                        <span className="text">từ 4
                            sao</span>
                    </a>
                    <a className="item"
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;rating=3&amp;page=1">
                        <p className="stars"><i className="icomoon icomoon-star"></i><i className="icomoon icomoon-star"></i><i
                            className="icomoon icomoon-star"></i><i className="icomoon icomoon-star dark"></i><i
                                className="icomoon icomoon-star dark"></i>
                        </p> <span className="text">từ 3 sao</span>
                    </a>
                </div>
            </div>
            <div className="block">
                <h4 className="title">Miễn phí giao hàng</h4>
                <div className="list collapsed"><a className="item item--free_ship_badge "
                    href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;free_ship_badge=true&amp;page=1">Có</a>
                    <a className="item item--free_ship_badge "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;free_ship_badge=false&amp;page=1">Không</a>
                </div>
            </div>
            <div className="block">
                <h4 className="title">Rẻ hơn hoàn tiền</h4>
                <div className="list collapsed"><a className="item item--is_best_price_guaranteed "
                    href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;is_best_price_guaranteed=1&amp;page=1">Có</a>
                    <a className="item item--is_best_price_guaranteed "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;is_best_price_guaranteed=0&amp;page=1">Không</a>
                </div>
            </div>
            <div className="block">
                <h4 className="title">Giá</h4>
                <div className="price-small-text">Chọn khoảng giá</div>
                <div className="input-group"><input pattern="[0-9]*" placeholder="Giá từ" value="0" /><span
                    className="mx-auto">-</span><input pattern="[0-9]*" placeholder="Giá đến" value="0" /></div>
                <button>OK</button>
            </div>
            <div className="block">
                <h4 className="title">Thể loại</h4>
                {category && category.map((catList) => {
                    return (
                        <div className="list collapsed">
                            <a className="item item--publisher_vn "
                                href={`/category/${catList.cat_id}`} key={catList.cat_id}>{catList.cat_name}</a>
                        </div>
                    );
                })}
                <a href="/" className="toggler">Xem thêm<svg stroke="currentColor" fill="currentColor"
                    stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z">
                    </path>
                </svg></a>
            </div>
            <div className="block">
                <h4 className="title">Công ty phát hành</h4>
                {company && company.map((comList) => {
                    return (
                        <div className="list collapsed">
                            <a className="item item--author "
                                href={`/company/${comList.com_id}`} key={comList.com_id}>{comList.com_name}</a>
                        </div>
                    );
                })}
                <a href="/" className="toggler">Xem thêm<svg stroke="currentColor" fill="currentColor"
                    stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z">
                    </path>
                </svg></a>
            </div>
            <div className="block">
                <h4 className="title">Nhà cung cấp</h4>
                {shop && shop.map((shopList) => {
                    return (
                        <div className="list collapsed">
                            <a className="item item--seller "
                                href={`/shop/${shopList.shop_id}`} key={shopList.shop_id}>{shopList.shop_name}</a>
                        </div>
                    );
                })}
                <a href="/" className="toggler">Xem thêm<svg stroke="currentColor" fill="currentColor"
                    stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z">
                    </path>
                </svg></a>
            </div>
        </section>
    )
}

export default Sidebar

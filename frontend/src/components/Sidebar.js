import React from 'react'

function Sidebar() {
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
                                className="icomoon icomoon-star disable"></i></p>
                        <span className="text">từ 4
                            sao</span>
                    </a>
                    <a className="item"
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;rating=3&amp;page=1">
                        <p className="stars"><i className="icomoon icomoon-star"></i><i className="icomoon icomoon-star"></i><i
                            className="icomoon icomoon-star"></i><i className="icomoon icomoon-star disable"></i><i
                                className="icomoon icomoon-star disable"></i>
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
                <h4 className="title">Công ty phát hành</h4>
                <div className="list collapsed"><a className="item item--publisher_vn "
                    href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=1850&amp;page=1">Alphabooks</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=17626&amp;page=1">MCBOOKS</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=3516&amp;page=1">Nhà
                        Xuất Bản Kim Đồng</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=4115%2C441967&amp;page=1">NXB
                        Trẻ</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=1846&amp;page=1">Nhã
                        Nam</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=13816&amp;page=1">Đinh
                        Tị</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=1849&amp;page=1">Thái
                        Hà</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=1845&amp;page=1">First
                        News - Trí Việt</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=13876&amp;page=1">Minh
                        Long</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=171171&amp;page=1">Nhà
                        Sách Hồng Ân</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=74861&amp;page=1">Macmillan
                        Publishers</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=8400&amp;page=1">Tân
                        Việt</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=25710&amp;page=1">Nhà
                        sách Minh Thắng</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=19644&amp;page=1">Oxford
                        University Press</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=174063&amp;page=1">Scholastic</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=74855%2C174155&amp;page=1">Penguin
                        Random House</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=74864&amp;page=1">Usborne
                        Publishing</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=33244&amp;page=1">1980
                        Books</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=198351&amp;page=1">BIZBOOKS</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=10262&amp;page=1">Huy
                        Hoàng Bookstore</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=442501&amp;page=1">NXB
                        Kim Đồng</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=732905&amp;page=1">VanLangBooks</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=74860&amp;page=1">Hachette
                        Book Group</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=933033&amp;page=1">Nhiều
                        công ty phát hành</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=31970&amp;page=1">Khang
                        Việt Book</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=13281&amp;page=1">Nhân
                        Trí Việt</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=180813&amp;page=1">DK
                        Publishing</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=50138&amp;page=1">Công
                        Ty CP Văn Hóa Nhân Văn</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=673303&amp;page=1">FIRST
                        NEWS</a>
                    <a className="item item--publisher_vn "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;publisher_vn=626427&amp;page=1">NXB
                        Phụ Nữ Việt Nam</a>
                </div><a href="javascript:" className="toggler">Xem thêm<svg stroke="currentColor" fill="currentColor"
                    stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z">
                    </path>
                </svg></a>
            </div>
            <div className="block">
                <h4 className="title">Tác giả</h4>
                <div className="list collapsed"><a className="item item--author "
                    href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=821729%2C496059%2C483537%2C482629%2C482759%2C4043%2C153855&amp;page=1">Nhiều
                    Tác Giả</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=722057%2C719887%2C789253%2C709765%2C719877%2C719899%2C789273%2C789401%2C722065%2C789393%2C709781%2C789267%2C709803%2C724649%2C709673%2C789413%2C789287%2C719909%2C789283%2C789311%2C722111%2C789433%2C789301%2C709681%2C719921%2C709815%2C789425%2C789449%2C722125%2C709699%2C722119%2C789441%2C789341%2C709597%2C789461%2C719825%2C719831%2C722133%2C789331%2C719851%2C722153%2C789353%2C789223%2C789217%2C719845%2C789475%2C709627%2C789375%2C719871%2C709757%2C789237%2C789367%2C789361%2C719861&amp;page=1">nhieu
                        tac gia</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=430085%2C46005%2C427997%2C427961&amp;page=1">DK</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=17698&amp;page=1">The
                        Windy</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=21163&amp;page=1">Kim
                        Khánh</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=13851&amp;page=1">Nguyễn
                        Hiến Lê</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=12983&amp;page=1">Nhóm
                        tác giả</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=17557%2C188987&amp;page=1">Eiichiro
                        Oda</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=4107&amp;page=1">Nguyễn
                        Nhật Ánh</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=153182&amp;page=1">Fujiko
                        F Fujio</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=10849%2C436487%2C157743&amp;page=1">John
                        C. Maxwell</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=5653%2C311661&amp;page=1">Geronimo
                        Stilton</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=22477&amp;page=1">Gosho
                        Aoyama</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=21184&amp;page=1">The
                        Zhishi</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=546425%2C133%2C153973%2C5276&amp;page=1">Dale
                        Carnegie</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=5907%2C531287&amp;page=1">Roger
                        Priddy</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=181375&amp;page=1">DK
                        Travel</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=14263&amp;page=1">Yoshito
                        Usui</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=428067%2C6439&amp;page=1">Julia
                        Donaldson</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=7142&amp;page=1">Napoleon
                        Hill</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=27858&amp;page=1">Phan
                        Minh Đạo</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=440515%2C63758&amp;page=1">The
                        Changmi</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=4%2C731&amp;page=1">J.
                        K. Rowling</a>
                    <a className="item item--author "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;author=172721%2C428417%2C428527&amp;page=1">Peppa
                        Pig</a>
                </div><a href="javascript:" className="toggler">Xem thêm<svg stroke="currentColor" fill="currentColor"
                    stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z">
                    </path>
                </svg></a>
            </div>
            <div className="block">
                <h4 className="title">Nhà cung cấp</h4>
                <div className="list collapsed"><a className="item item--seller "
                    href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=1&amp;page=1">Tiki
                    Trading</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=53660&amp;page=1">Nhà
                        sách Fahasa</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=16979&amp;page=1">GOLD
                        BOOKS</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=26874&amp;page=1">Phương
                        Đông Books</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=9988&amp;page=1">AHABOOKS</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=127989&amp;page=1">Times
                        Books</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=105486&amp;page=1">AZ
                        Books</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=137344&amp;page=1">The
                        King of Books</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=4560&amp;page=1">Joybuy
                        Channel</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=7127&amp;page=1">Vconeshop</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=73249&amp;page=1">VPP
                        Phương Nam</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=5035&amp;page=1">SUNFLOWER</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=97533&amp;page=1">Nhà
                        Sách Vĩnh Thụy</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=12628&amp;page=1">Vadata</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=131379&amp;page=1">TDBooks</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=138861&amp;page=1">Sách
                        Và Cuộc Sống</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=77762&amp;page=1">DOLPHIN
                        STORE</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=133916&amp;page=1">Books
                        Store Online</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=41914&amp;page=1">MPPshop</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=34429&amp;page=1">Newshopvn</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=118912&amp;page=1">Tiệm
                        Sách Hoa Hồng</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=10984&amp;page=1">Minhhabooks</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=130668&amp;page=1">Sách
                        Tổng Hợp</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=15583&amp;page=1">NhatPham0356</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=197&amp;page=1">Vinabook
                        JSC</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=126428&amp;page=1">Sách
                        247</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=148005&amp;page=1">BOOKS
                        QUEEN</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=69000&amp;page=1">Hà
                        Nội Books</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=154675&amp;page=1">THƯƠNG
                        THƯƠNG</a>
                    <a className="item item--seller "
                        href="https://tiki.vn/nha-sach-tiki/c8322?src=c.8322.hamburger_menu_fly_out_banner&amp;seller=10511&amp;page=1">Geta</a>
                </div><a href="javascript:" className="toggler">Xem thêm<svg stroke="currentColor" fill="currentColor"
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

import React from 'react';
import SearchBox from './SearchBox';
import Cart from './Cart';

function Header() {
    return (
        <header className="header">
            <table className="w-100">
                {/* <tr className="p-0">
                    <td className="p-0">
                        <img className="w-100"
                            src="https://salt.tikicdn.com/ts/banner/19/c7/b0/1b5f27487cdeaaafba6e077300bcf77a.jpg"
                            alt="AdvertisementFile" />
                    </td>
                </tr> */}
                <tr>
                    <td>
                        <div className="header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <SearchBox />
                                    </div>
                                    <div className="col-6 d-flex">
                                        <div className="header__user">
                                            <i className="tikicon icon-tracking"></i>
                                            <span>Theo dõi</span>
                                        </div>
                                        <div className="header__user">
                                            <i className="tikicon icon-notification"></i>
                                            <span>Thông báo
                                                <br />
                                                của tôi</span>
                                        </div>

                                        <div className="header__user__account">
                                            <button
                                                className="header__user text-decoration-none bg-none btn shadow-none p-0 d-flex"
                                                data-bs-toggle="modal" data-bs-target="#modalDangNhap">
                                                <i className="tikicon icon-user"></i>
                                                <span>
                                                    <b>Đăng nhập</b> <br />
                                                    Tài khoản
                                                </span>
                                            </button>
                                            <div className="header__user__menu">
                                                <a href="/sales/order/history?src=header_my_account">
                                                    Đơn hàng của tôi
                                                </a>
                                                <a href="/customer/notification?src=header_my_account">
                                                    Thông báo của tôi <span>22</span>
                                                </a>
                                                <a href="/customer/account/edit?src=header_my_account">
                                                    Tài khoản của tôi
                                                </a>
                                                <a href="/nhan-xet-san-pham-ban-da-mua?src=header_my_account">
                                                    Nhận xét sản phẩm đã mua
                                                </a>
                                                <a href="https://tiki.vn/customer/tikinow?src=header_my_account">
                                                    <span className="img"><img
                                                        src="https://salt.tikicdn.com/ts/upload/5b/70/af/ac0eacaa8ec6738ac474f7bbe767bd75.png" alt="Tiki Now" />
                                                    </span>
                                                    <span className="content">
                                                        <span>TikiNOW</span>
                                                        <span>Đăng ký sử dụng ngay</span>
                                                    </span>

                                                </a>
                                                <a href="/customer/coupons?src=header_my_account">

                                                    <span className="img"><img
                                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/coupon_code.svg" alt="Coupon" />
                                                    </span>
                                                    <span className="content">
                                                        <span>Mã giảm giá</span>
                                                        <span>Bạn đang có <b>0</b> mã giảm giá</span>
                                                    </span>

                                                </a>
                                                <a href="/customer/reward?src=header_my_account">

                                                    <span className="img">
                                                        <img
                                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/tikixu.svg" alt="Tiki xu" />
                                                    </span>
                                                    <span className="content">
                                                        <span>Thông tin Tiki Xu</span>
                                                        <span>Bạn đang có <b>1.000</b> Tiki xu</span>
                                                    </span>

                                                </a>
                                                <a href="/customer/bookcare?src=header_my_account">
                                                    <span className="img">
                                                        <img
                                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/bookcare.svg" alt="Bookcare" />
                                                    </span>
                                                    <span className="content">
                                                        <span>Thông tin BookCare</span>
                                                        <span>Bạn đang có <b>0</b> BookCare</span>
                                                    </span>

                                                </a>
                                                <a href="/doi-tra-de-dang?src=header_my_account" >
                                                    Đổi trả dễ dàng
                                                </a>
                                                <a href="/">
                                                    Thoát tài khoản
                                                </a>
                                            </div>
                                        </div>

                                        <Cart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>

            </table>

            {/* <div className="header__breadcrumb">
                <div className="container py-0 overflow-hidden">
                    <div className="breadcrumb mb-0">
                        <a href="/" className="breadcrumb-item">Trang chủ</a>
                        <a href="/" className="breadcrumb-item">Nhà sách Tiki</a>
                    </div>
                </div>
            </div> */}

            <div className="modal fade" id="modalDangNhap" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="close" data-bs-dismiss="modal" aria-label="Close">
                            <i className="tikicon ico-close"></i>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">

                                    <div className="col-4 d-flex align-items-center">
                                        <img className="w-100" src="./img/adDangNhap.png" alt="" />
                                    </div>

                                    <div className="col-8">
                                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link active" id="pills-DangNhap-tab" data-bs-toggle="pill"
                                                    href="#pills-DangNhap" role="tab" aria-controls="pills-DangNhap"
                                                    aria-selected="true">Đăng nhập</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="pills-DangKy-tab" data-bs-toggle="pill"
                                                    href="#pills-DangKy" role="tab" aria-controls="pills-DangKy"
                                                    aria-selected="false">Đăng ký</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade show active" id="pills-DangNhap" role="tabpanel"
                                                aria-labelledby="pills-DangNhap-tab">
                                                <div className='labelinput'>
                                                    <label for="Username" className='lblInfo'>Tên đăng nhập</label>

                                                    <input type='text' id="txtUserDangNhap" className="form-control form-input"
                                                        ToolTip="Username" placeholder="Username" />
                                                </div>
                                                <div className='labelinput'>
                                                    <label for="Password" className='lblInfo'>Mật khẩu</label>

                                                    <input type='text' id="txtPasswordDangNhap" placeholder="Password"
                                                        className="form-control form-input" ToolTip="Password"
                                                        TextMode="Password" />

                                                </div>
                                                <span className='my-2'>Quên mật khẩu? Nhấn vào <a href="/">đây</a>.</span>
                                                <div className="form-button mt-3">
                                                    <button id="btnDangNhap2"
                                                        className="btn btn-warning text-dark justify-content-center"
                                                        ToolTip="Log in">Đăng nhập</button>
                                                    <button className="btn btn-success justify-content-center">
                                                        Đăng nhập bằng Số điện thoại</button>
                                                    <button className="btn btn-facebook">
                                                        <i className="tikicon icon-facebook"></i>
                                                        Đăng nhập bằng Facebook</button>
                                                    <button className="btn btn-google">
                                                        <i className="tikicon icon-google"></i>
                                                        Đăng nhập bằng Google
                                                    </button>
                                                    <button className="btn btn-zalo">
                                                        <i className="tikicon icon-zalo"></i>
                                                        Đăng nhập bằng Zalo
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="pills-DangKy" role="tabpanel"
                                                aria-labelledby="pills-DangKy-tab">

                                                <form className="needs-validation" novalidate>

                                                    <div className='labelinput'>
                                                        <label for="hoTen" className='lblInfo'>Họ tên</label>
                                                        <input type='text' id="txtHoTen" placeholder="Nhập họ tên"
                                                            className="form-control form-input" ToolTip="Nhập họ tên" />
                                                    </div>

                                                    <div className='labelinput'>
                                                        <label for="txtUser" className='lblInfo'>Tên đăng nhập</label>

                                                        <input type='text' id="txtUser" className="form-control form-input"
                                                            ToolTip="Nhập tên đăng nhập" placeholder="Nhập tên đăng nhập" />

                                                    </div>

                                                    <div className='labelinput'>
                                                        <label for="txtPass" className='lblInfo'>Mật khẩu</label>

                                                        <input type='text' id="txtPass" TextMode="Password"
                                                            className="form-control form-input" ToolTip="Nhập mật khẩu"
                                                            placeholder="Nhập mật khẩu từ 6 đến 32 ký tự" />

                                                    </div>

                                                    <div className='labelinput'>
                                                        <label for="txtPass" className='lblInfo'>Địa chỉ</label>

                                                        <input type='text' id="txtDiaChi" className="form-control form-input"
                                                            ToolTip="Nhập địa chỉ" placeholder="Address" />

                                                    </div>
                                                    <div className='labelinput'>
                                                        <label for="dienThoai" className='lblInfo'>SĐT</label>
                                                        <input type='text' id="txtDienThoai" className="form-control form-input"
                                                            ToolTip="Nhập số điện thoại" placeholder="Nhập số điện thoại" />
                                                    </div>
                                                    <div className='labelinput'>
                                                        <label for="email" className='lblInfo'>Email</label>

                                                        <input type='text' id="txtEmail" className="form-control form-input"
                                                            ToolTip="Nhập email" placeholder="Nhập email" />
                                                    </div>

                                                    <div className='labelinput'>
                                                        <label for="gioiTinh" className='lblInfo'>Giới tính</label>
                                                        <div className="form-input">
                                                            <div className="form-check form-check-inline">
                                                                <input type='radio' name='gender' id='male'
                                                                    className="form-check-input" />
                                                                <label className="form-check-label" for="male">Nam</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input type='radio' id='female' name='gender'
                                                                    className="form-check-input" />
                                                                <label className="form-check-label" for="female">Nữ</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-button mt-3">
                                                        <button id="btnDangKy"
                                                            className="btn btn-warning text-dark justify-content-center">Đăng
                                                            ký</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
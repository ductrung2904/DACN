import React from 'react';
import SearchBox from './SearchBox';
import Cart from './CartIcon';
import Login from '../Cart/Login';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/loginSlice';

function Header() {
    // const { userInfo } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { isAuth, userInfo } = useSelector(state => state.login);
    const logoutHandle = (e) => {
        e.preventDefault();
        dispatch(logout());
        return alert('Bạn đã đăng xuất');
    }

    return (
        <header className="header">
            <table className="w-100">
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
                                            {userInfo && isAuth === true ? (
                                                <>
                                                    <button
                                                        className="header__user text-decoration-none bg-none btn shadow-none p-0 d-flex"
                                                        data-bs-toggle="modal" data-bs-target="#">
                                                        <i className="tikicon icon-user"></i>
                                                        <span key={userInfo.cus_usr}>
                                                            <span>Chào</span>, <b>{(userInfo.cus_name).split(" ").pop()}</b>{' '}
                                                        </span>
                                                    </button>
                                                    <div className="header__user__menu">
                                                        <a href="/sales/order/history?src=header_my_account">
                                                            Đơn hàng của tôi
                                                        </a>
                                                        <a href="/customer/notification?src=header_my_account">
                                                            Thông báo của tôi
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
                                                        <a href="/" onClick={(e) => logoutHandle(e)}>
                                                            Thoát tài khoản
                                                        </a>
                                                    </div>
                                                </>
                                            ) : (
                                                <button
                                                    className="header__user text-decoration-none bg-none btn shadow-none p-0 d-flex"
                                                    data-bs-toggle="modal" data-bs-target="#modalDangNhap">
                                                    <i className="tikicon icon-user"></i>
                                                    <span>
                                                        <b>Đăng nhập</b> <br />
                                                        Tài khoản
                                                    </span>
                                                </button>
                                            )}
                                        </div>

                                        <Cart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>

            </table>
            <Login />

        </header>
    )
}

export default Header
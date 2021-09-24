import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { addToCart, decreaseCart, getTotals, removeProduct } from '../../features/cartSlice';
import { Helmet } from 'react-helmet';

function Cart() {
    const cart = useSelector((state) => state.cart)
    const { isAuth, userInfo } = useSelector(state => state.login);
    const history = useHistory();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    };

    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product))
    };

    const activeDecreaseBtn = (cartItem) => {
        if (cart.cartTotalQuantity > 1) {
            return <div className="abate active" onClick={() => handleDecreaseCart(cartItem)}></div>
        }
        else {
            return <div className="abate" onClick={() => handleDecreaseCart(cartItem)}></div>
        }
    }

    const handleRemoveCart = (product) => {
        dispatch(removeProduct(product))
    };

    const handleCheckout = () => {
        if (userInfo && isAuth === true) {

            history.push('/checkout/shipping');
        }
    }
    return (
        <>
            <Helmet>
                <title>Giỏ hàng | Tiki.vn</title>
            </Helmet>
            <div className="container">
                <div className="cart-empty">
                    <h2>Giỏ hàng</h2>
                    {cart.cartItems.length === 0 ? (
                        <div className="empty">
                            <img className="empty__img" src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" alt="" />
                            <p className="empty__note">Không có sản phẩm nào trong giỏ hàng của bạn.</p>
                            <a className="empty__btn" href="/">Tiếp tục mua sắm</a>
                        </div>
                    ) : (
                        <>
                            {cart.cartItems && cart.cartItems.map((cartItem) => (
                                <section className="cart-products" >
                                    <div className="cart-products-group" >
                                        <ul className="list-unstyled m-0 p-0">
                                            <li className="cart-products__product" key={cartItem.book_id}>
                                                <div className="cart-products__inner">
                                                    <div className="cart-products__img">
                                                        <a href=" ">
                                                            <img src={"https://salt.tikicdn.com/cache/200x200/ts/product/" + cartItem.book_img + ".jpg"}
                                                                alt={cartItem.book_name} /></a></div>
                                                    <div className="cart-products__content w-100">
                                                        <div className="cart-products__content--inner">
                                                            <div className="cart-products__desc">
                                                                <a className="cart-products__name" href={`/nha-sach-tiki/${cartItem.book_id}/${cartItem.book_metatitle}`}>
                                                                    {cartItem.book_name}
                                                                </a>

                                                                <p className="cart-products__author">
                                                                    <span> - Tác giả: </span>
                                                                    <a href="/author/canh-thien.html">{cartItem.aut_name}</a>
                                                                </p>
                                                                <span className="cart-products__bookcare">Sách có thể bọc bằng
                                                                    <a href="/bookcare">BookCare</a>
                                                                </span>
                                                                <p className="cart-products__actions">
                                                                    <span className="cart-products__del" onClick={() => handleRemoveCart(cartItem)}>Xóa</span>
                                                                    <span className="cart-products__buy-later">Để dành mua sau</span>
                                                                </p>
                                                            </div>
                                                            <div className="cart-products__details">
                                                                <div className="cart-products__pricess">
                                                                    <p className="cart-products__real-prices">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartItem.book_sale * cartItem.cartQuantity)}</p>
                                                                    <p className="cart-products__discount-prices"><del>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartItem.book_price)}</del><span
                                                                        className="cart-products__percent-prices">-{Math.round((1 - 1.0 * cartItem.book_sale / cartItem.book_price) * 100)}%</span></p>
                                                                </div>
                                                                <div className="book__quantity d-flex">
                                                                    {activeDecreaseBtn(cartItem)}
                                                                    <div className="number">{cartItem.cartQuantity}</div>
                                                                    <div className="augment" onClick={() => handleAddToCart(cartItem)}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            ))}
                            <section className="cart-total">
                                <div className="cart-total-prices__inner">
                                    <div className="coupon">
                                        <div className="title-usage">
                                            <p className="coupon-title">Mã khuyến mãi</p>
                                            <p className="max-usage">Có thể chọn<img className="max-usage__info"
                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/icons-info-gray.svg"
                                                alt="info" />
                                            </p>
                                        </div>
                                        <div className="eligible_coupon_list"></div>
                                        <div className="show-more"><img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/coupon_icon.svg" alt="" /><span>Chọn
                                                hoặc
                                                nhập Khuyến mãi </span></div>
                                    </div>
                                    <div className="cart__prices">
                                        <div className="prices">
                                            <ul className="prices__items">
                                                <li className="prices__item"><span className="prices__text">Tạm tính</span><span
                                                    className="prices__value">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cart.cartTotalAmount)}</span></li>
                                            </ul>
                                            <p className="prices__total"><span className="prices__text">Thành tiền</span><span
                                                className="prices__value prices__value--final">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cart.cartTotalAmount)}<i>(Đã bao gồm VAT nếu có)</i></span>
                                            </p>
                                        </div>
                                    </div>
                                    {userInfo && isAuth === true ? (
                                        <button type="button" className="cart__submit" onClick={handleCheckout}>Tiến hành đặt hàng</button>
                                    ) : (
                                        <button type="button" className="cart__submit" data-bs-toggle="modal" data-bs-target="#modalDangNhap">Đăng nhập và thanh toán</button>
                                    )}
                                </div>
                            </section>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Cart

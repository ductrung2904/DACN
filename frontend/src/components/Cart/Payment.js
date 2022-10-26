import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { Helmet } from 'react-helmet';
import axios from '../../api/axiosClient';
import { savePaymentDetail } from '../../features/paymentSlice';

function Payment() {
    const { cart } = useSelector((state) => state.cart);
    const { isAuth, userInfo } = useSelector(state => state.login);
    const { orderId } = useSelector(state => state.payment);

    const history = useHistory();
    const userInfoLocal = JSON.parse(localStorage.getItem("shippingInfo"));
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuth !== true) {
            history.push("/")
        }
        else {
            dispatch(
                savePaymentDetail({
                    username: userInfoLocal.cus_usr,
                    name: userInfoLocal.cus_name,
                    phone: userInfoLocal.cus_phone,
                    email: userInfoLocal.cus_email,
                    address: userInfoLocal.cus_address,
                    require: userInfoLocal.ord_require,
                    status: 1
                })
            );
        }
        // eslint-disable-next-line
    }, []);

    const handlePlaceOrder = () => {
        axios.post("/order/createOrder", {
            username: userInfo.cus_usr,
            orderCreatedDate: userInfo.ord_created_date,
            phone: userInfo.cus_phone,
            address: userInfo.cus_address,
            email: userInfo.cus_email,
            require: userInfo.ord_require,
            bookId: cart[0].shippingInfo.book_id,
            quantity: cart[0].shippingInfo.ord_quantity,
            price: cart[0].shippingInfo.ord_price
        })
            .then((result) => {
                dispatch({
                    type: "payment/setOrderId",
                    payload: {
                        orderId: result.data[0].addOrder
                    }
                });
                history.push("/");

                alert("Đặt hàng thành công");
            })
            .catch((err) => {
                console.log("Đặt hàng thất bại: " + err);
            });
        for (var i = 1; i < cart.length; i++) {
            axios
                .post("/order/addMore", {
                    orderId: orderId,
                    bookId: cart[i].shippingInfo.book_id,
                    quantity: cart[i].shippingInfo.ord_quantity,
                    price: cart[i].shippingInfo.ord_price
                })
                .then((result) => {
                    console.log("Thêm đơn hàng thành công");
                })
                .catch((err) => {
                    console.log("Đặt hàng thất bại" + err);
                });
        }
    }

    return (
        <>
            <Helmet>
                <title>Thanh toán và đặt mua</title>
            </Helmet>
            <header className="shipping__header">
                <div className="container">
                    <div className="progress">
                        <div className="progress__item__payment">
                            <div className="text">Đăng nhập</div>
                            <div className="bar">
                                <div className="fill-color"></div>
                            </div>
                            <div className="circle">1</div>
                        </div>
                        <div className="progress__item__payment">
                            <div className="text">Địa chỉ giao hàng</div>
                            <div className="bar">
                                <div className="fill-color"></div>
                            </div>
                            <div className="circle">2</div>
                        </div>
                        <div className="progress__item__payment">
                            <div className="text">Thanh toán &amp; Đặt mua</div>
                            <div className="bar">
                                <div className="fill-color"></div>
                            </div>
                            <div className="circle">3</div>
                        </div>
                    </div>
                    <div className="hotline"><img src="https://frontend.tikicdn.com/_desktop-next/static/img/hotline.png" alt="" /></div>
                </div>
            </header>
            <div className="container">
                <div className="payment">
                    {cart.cartItems && cart.cartItems.map((cartItem) => (
                        <section className="payment-products" >
                            <div className="payment-products-group" >
                                <ul className="list-unstyled m-0 p-0">
                                    <li className="payment-products__product" key={cartItem.book_id}>
                                        <div className="payment-products__inner">
                                            <div className="payment-products__img">
                                                <a href=" ">
                                                    <img src={"https://salt.tikicdn.com/cache/200x200/ts/product/" + cartItem.book_img + ".jpg"}
                                                        alt={cartItem.book_name} /></a></div>
                                            <div className="payment-products__content w-100">
                                                <div className="payment-products__content--inner">
                                                    <div className="payment-products__desc">
                                                        <p className="payment-products__name">{cartItem.book_name}</p>
                                                        <p className="payment-products__quantity">Số lượng: {cartItem.cartQuantity}</p>
                                                    </div>
                                                    <div className="payment-products__details">
                                                        <div className="payment-products__pricess">
                                                            <p className="payment-products__real-prices">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartItem.book_sale * cartItem.cartQuantity)}</p>
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
                    <section className="payment-total">
                        <div className="shipping__address">
                            <div className="title">
                                <span>Địa chỉ giao hàng</span>
                                <a href="/checkout/shipping">Sửa</a>
                            </div>
                            <div className="address">
                                <span className="shipping__address__name">{cart.shippingInfo.name}</span>
                                <span className="shipping__address__street">Địa chỉ: {cart.shippingInfo.address}</span>
                                <span className="shipping__address__phone">Điện thoại: {cart.shippingInfo.phone}</span>
                            </div>
                        </div>
                        <div className="payment-total-prices__inner">
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
                            <div className="payment-total__prices">
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
                            <button
                                type="button"
                                className="cart__submit"
                                onClick={() => handlePlaceOrder()}>
                                Đặt mua
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Payment

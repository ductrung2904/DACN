import React from 'react'
import { useSelector } from 'react-redux';

function CartIcon() {
    const { cartTotalQuantity } = useSelector(state => state.cart)
    return (
        <a className="header__user text-decoration-none header__card" href="/checkout/cart">
            <div className="cart__wrapper">
                <i className="tikicon icon-card ml-0"></i>
                <span className="cart__text">Giỏ hàng</span>
                <span className="cart__quantity">{cartTotalQuantity}</span>
            </div>
        </a>
    )
}

export default CartIcon

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
        shippingInfo: localStorage.getItem("shippingInfo") ? JSON.parse(localStorage.getItem("shippingInfo")) : {},
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const existingIndex = state.cartItems.findIndex(
                (item) => item.book_id === action.payload.book_id
            );
            if (existingIndex >= 0) {
                // sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng sản phẩm lên 1 đơn vị
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
                };
            }
            else {
                // sản phẩm chưa tồn tại trong giỏ hàng
                let tempProductItem = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProductItem);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        decreaseCart: (state, action) => {
            state.cartItems.map((cartItem) => {
                if (cartItem.book_id === action.payload.book_id) {
                    if (cartItem.cartQuantity > 1) {
                        cartItem = {
                            ...cartItem,
                            cartQuantity: cartItem.cartQuantity - 1,
                        };
                        const existingIndex = state.cartItems.findIndex(
                            (item) => item.book_id === cartItem.book_id
                        );
                        state.cartItems[existingIndex] = cartItem;
                    }
                    else if (cartItem.cartQuantity === 1) {
                        const nextCartItems = state.cartItems.filter(
                            (item) => item.book_id !== cartItem.book_id
                        );
                        state.cartItems = nextCartItems;
                    }
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                return state;
            });
        },
        removeProduct: (state, action) => {
            state.cartItems.map((cartItem) => {
                if (cartItem.book_id === action.payload.book_id) {
                    const nextCartItems = state.cartItems.filter(
                        (item) => item.book_id !== cartItem.book_id
                    );
                    state.cartItems = nextCartItems;
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                return state;
            });
        },
        getTotals: (state, action) => {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { book_sale, cartQuantity } = cartItem;
                    const itemTotal = book_sale * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
        clearCart: (state, action) => {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        saveShippingAddress: (state, action) => {
            state.error = "";
            localStorage.setItem("shippingInfo", JSON.stringify(state.shippingInfo = action.payload));
        },
        saveFail: (state, { payload }) => {
            state.error = payload;
        }
    }
});

const { reducer, actions } = cartSlice

export const { addToCart, decreaseCart, removeProduct, getTotals, clearCart, saveShippingAddress, saveFail } = actions

export default reducer
import React from 'react'
import StarRating from '../StarRating';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import { useHistory } from 'react-router-dom';

function ProductDetailCenter({ aut_id, aut_name, eva_count, eva_rating, book_name, book_sale, book_price, add, key }) {
    const renderRating = () => {
        if (!eva_count) {
            return <span className="number">(0 đánh giá)</span>;
        }
        return (
            <>
                <StarRating rating={eva_rating} />
                <span className="number">({eva_count} đánh giá)</span>
            </>
        );
    };

    const dispatch = useDispatch();
    const history = useHistory();

    const handleAddToCart = () => {
        dispatch(addToCart(add));
        history.push("/checkout/cart");
    };

    return (
        <>
            <div className="book__header position-relative" key={key}>
                <div className="brand">
                    <div className="brand-and-author cus-border-right d-inline">
                        <h6>Tác giả:<a href={aut_id}>{aut_name}</a></h6>
                    </div>
                    <div className="like_share">
                        <div className="icon-wrap"><img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-like.svg" alt="" />
                        </div>
                        <div className="icon-wrap shareFB"><img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-account-social.svg" alt="" />
                        </div>
                    </div>
                </div>
                <h1 className="title">
                    <img src="https://salt.tikicdn.com/ts/upload/e9/68/49/50ac83c9f95bd008cc840e638f0f5791.png"
                        alt="tikinow" className="cus-border-right" />
                    <div className="d-inline cus-border-right"></div>
                    {book_name}
                </h1>
                <div className="detail__item__stars">
                    {/* <p className='detail__rating d-inline'>
                        <i className="icomoon icomoon-star"></i>
                        <i className="icomoon icomoon-star"></i>
                        <i className="icomoon icomoon-star"></i>
                        <i className="icomoon icomoon-star"></i>
                        <i className="icomoon icomoon-star"></i>
                    </p>
                    <a className="number" href=".">(Xem 604 đánh giá)</a> */}
                    {renderRating()}
                </div>
            </div>
            <div className="book__right__content d-inline-block">
                <div className="book__price">
                    <p>
                        <span className="book__price__current ">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(book_sale)}</span>
                        <span className="book__price__old">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(book_price)}</span>
                        <span className="book__price__discount">-{Math.round((1 - 1.0 * book_sale / book_price) * 100)} %</span>
                    </p>
                    <div className="book__price__viewmore d-flex">
                        <img className="tikicard__icon" src="https://salt.tikicdn.com/ts/upload/7b/17/f7/4860983e93ea3c264ae0d932c58ec4f7.png"
                            width="48" height="24" alt="" />
                        <span className="mx-1">Hoàn tiền 15% tối đa 600k/tháng</span>
                        <img className="view-more" src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/question.svg" alt="something" />
                        <a className="view-more-link" href="https://tiki.vn/chuong-trinh/mo-the-tikicard?src=pdp_badge" target="_blank" rel="noreferrer"> </a>
                    </div>
                </div>
                <div className="book__add__address">Bạn hãy
                    <span> nhập địa chỉ </span>
                    nhận hàng để được dự báo thời gian chi phí giao hàng một cách chính xác nhất.
                </div>

                <p>Số lượng</p>
                <div className="book__quantity d-flex">
                    <div className="abate "></div>
                    <div className="number">1</div>
                    <div className="augment"></div>
                </div>

                <button className="btn btn-add-to-cart" onClick={() => handleAddToCart(add)}>Chọn mua</button>
            </div>
        </>
    )
}

export default ProductDetailCenter

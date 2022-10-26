import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { lstProductByCategory } from '../../api/filterApi';
import Sidebar from '../HomePage/Sidebar';
import StarRating from '../StarRating';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

function FilterByCategory() {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { productByCategory, error } = useSelector(state => state.filter)

    useEffect(() => {
        dispatch(lstProductByCategory(id))
    }, [id, dispatch])

    const renderRating = (book) => {
        if (!book.count) {
            return <span className="number">(0 đánh giá)</span>;
        }
        return (
            <>
                <StarRating rating={book.eva_rating} />
                <span className="number">({book.count} đánh giá)</span>
            </>
        );
    };

    if (error) return <div className="container">Lỗi tìm kiếm</div>;
    return (
        <>
            <Helmet>
                <title>Tiki - Mua hàng online giá tốt, hàng chuẩn, ship nhanh</title>
            </Helmet>
            <div className="category">
                <div className="container">
                    <Sidebar />
                    <section className="category__content">
                        <h3 className="title">Kết quả tìm kiếm</h3>
                        {productByCategory && productByCategory.map((productByCategory) => {
                            return (
                                <span>
                                    <div className="category__product__items">
                                        <Link className="product__item" to={`/nha-sach-tiki/${productByCategory.book_id}/${productByCategory.book_metatitle}`} key={productByCategory.book_id}>
                                            <div className="similar__item ">
                                                <div className="text-center">
                                                    <img src={"https://salt.tikicdn.com/cache/280x280/ts/product/" + productByCategory.book_img + ".jpg"}
                                                        alt={productByCategory.book_name} />
                                                </div>
                                                <p className="similar__item__name">{productByCategory.book_name}</p>
                                                <div>
                                                    <p className="d-inline similar__item__stars">
                                                        {renderRating(productByCategory)}
                                                    </p>
                                                </div>
                                                <p className="price">
                                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(productByCategory.book_sale)}
                                                    <span span className="percent " > -{Math.round((1 - 1.0 * productByCategory.book_sale / productByCategory.book_price) * 100)} %</span>
                                                    <span className="original ">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(productByCategory.book_price)}</span>
                                                </p>
                                            </div >
                                        </Link>
                                    </div>
                                </span>
                            )
                        })}
                    </section>
                </div>
            </div>
        </>
    )
}

export default FilterByCategory

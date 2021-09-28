import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { lstProductByCompany } from '../../api/filterApi';
import Sidebar from '../HomePage/Sidebar';
import StarRating from '../StarRating';
import { Helmet } from 'react-helmet';

function FilterByCompany() {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { productByCompany, error } = useSelector(state => state.filter)

    useEffect(() => {
        dispatch(lstProductByCompany(id))
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
                        <h3 className="title">Kết quả tìm kiếm của {productByCompany.cat_id}</h3>
                        {productByCompany && productByCompany.map((productByCompany) => {
                            return (
                                <span>
                                    <div className="category__product__items">
                                        <a className="product__item" href={`/nha-sach-tiki/${productByCompany.book_id}/${productByCompany.book_metatitle}`} key={productByCompany.book_id}>
                                            <div className="similar__item ">
                                                <div className="text-center">
                                                    <img src={"https://salt.tikicdn.com/cache/280x280/ts/product/" + productByCompany.book_img + ".jpg"}
                                                        alt={productByCompany.book_name} />
                                                </div>
                                                <p className="similar__item__name">{productByCompany.book_name}</p>
                                                <div>
                                                    <p className="d-inline similar__item__stars">
                                                        {renderRating(productByCompany)}
                                                    </p>
                                                </div>
                                                <p className="price">
                                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(productByCompany.book_sale)}
                                                    <span span className="percent " > -{Math.round((1 - 1.0 * productByCompany.book_sale / productByCompany.book_price) * 100)} %</span>
                                                    <span className="original ">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(productByCompany.book_price)}</span>
                                                </p>
                                            </div >
                                        </a>
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

export default FilterByCompany

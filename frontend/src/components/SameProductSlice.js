import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from './StarRating';

function SameProductSlice({ same_products }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    const renderRating = (sameproduct) => {
        if (!sameproduct.count) {
            return <span className="number">(0 đánh giá)</span>;
        }
        return (
            <>
                <StarRating rating={sameproduct.eva_rating} />
                <span className="number">({sameproduct.count} đánh giá)</span>
            </>
        );
    };

    return (
        <Slider {...settings}>
            {same_products.map((sameproduct) => {
                return (
                    <div className="similar__item">
                        <a href={`/nha-sach-tiki/${sameproduct.book_id}/${sameproduct.book_metatitle}`} key={sameproduct.book_id}>
                            <div className="text-center">
                                <img src={"https://salt.tikicdn.com/cache/280x280/ts/product/" + sameproduct.book_img + ".jpg"}
                                    alt={sameproduct.book_name} />
                            </div>
                            <p className="similar__item__name">{sameproduct.book_name}</p>
                            <div>
                                <p className='d-inline similar__item__stars'>
                                    {renderRating(sameproduct)}
                                </p>
                            </div>
                            <p className="price">
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(sameproduct.book_sale)}
                                <span span className="percent " > -{Math.round((1 - 1.0 * sameproduct.book_sale / sameproduct.book_price) * 100)} %</span>
                                <span className="original ">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(sameproduct.book_price)}</span>
                            </p>
                        </a>
                    </div>
                )
            })}
        </Slider>
    )
}

export default SameProductSlice

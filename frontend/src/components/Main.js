import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import axiosClient from '../api/axiosClient';
import StarRating from './StarRating';

function Main() {
    const { books, setBooks } = useContext(ProductContext);
    let history = useHistory();

    useEffect(() => {
        const getAllBooks = async () => {
            try {
                const response = await axiosClient.get("/");
                console.log(response.data.data);
                setBooks(response.data.data.book);
            } catch (err) {
                console.error(err.message);
            }
        };

        getAllBooks();
    });

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

    const handleSelect = (book_id) => {
        history.push(`/nha-sach-tiki/${book_id}`);
    };

    return (
        <>
            <div className="category__product__items">
                {books && books.map(book => (
                    <a href={`/nha-sach-tiki/${book.book_id}/${book.book_metatitle}`} onClick={() => handleSelect(book.book_id)} key={book.book_id}>
                        <div className="similar__item ">
                            <div className="text-center">
                                <img src={"https://salt.tikicdn.com/cache/280x280/ts/product/" + book.book_img + ".jpg"}
                                    alt={book.book_name} />
                            </div>
                            <p className="similar__item__name">{book.book_name}</p>
                            <div>
                                <p className="d-inline similar__item__stars">
                                    {/* <i className="icomoon icomoon-star"></i>
                                    <i className="icomoon icomoon-star"></i>
                                    <i className="icomoon icomoon-star"></i>
                                    <i className="icomoon icomoon-star"></i>
                                    <i className="icomoon icomoon-star"></i>
                                    <span className="number">(386 đánh giá)</span> */}
                                    {renderRating(book)}
                                </p>
                            </div>
                            <p className="price">
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(book.book_sale)}
                                <span span className="percent " > -{Math.round((1 - 1.0 * book.book_sale / book.book_price) * 100)} %</span>
                                <span className="original ">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(book.book_price)}</span>
                            </p>
                        </div >
                    </a>
                ))
                }
            </div >
            {/* <div className="category__product__items">
                <a href="/">
                    <div className="similar__item ">
                        <div className="text-center">
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/a0/73/4f/92af6309562efb8d90602ab2efdf42b3.jpg"
                                alt="Tên sách item" />
                        </div>
                        <p className="similar__item__name">Kiên trì ắc được đền đáp (Tái bản)</p>
                        <div>
                            <p className="d-inline similar__item__stars">
                                <i className="icomoon icomoon-star"></i>
                                <i className="icomoon icomoon-star"></i>
                                <i className="icomoon icomoon-star"></i>
                                <i className="icomoon icomoon-star"></i>
                                <i className="icomoon icomoon-star"></i>
                                <span className="number">(386 đánh giá)</span>
                            </p>
                        </div>
                        <p className="price">
                            39.000 ₫
                            <span className="percent ">-40%</span>
                            <span className="original ">65.000 ₫</span>
                        </p>
                    </div>
                </a>
            </div> */ }
        </>
    )
}

export default Main;

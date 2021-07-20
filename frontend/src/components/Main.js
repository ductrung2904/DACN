import React, { useState, useEffect } from 'react'
import StarRating from './StarRating';

function Main() {
    const [books, setBooks] = useState([]);

    const getAllBooks = async () => {
        try {
            const response = await fetch("http://localhost:5000/book");
            const jsonData = await response.json();

            setBooks(jsonData.data.book);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getAllBooks();
    }, []);

    const renderRating = (book) => {
        if (!book.count) {
            return <span className="number">(0 đánh giá)</span>;
        }
        return (
            <>
                <StarRating rating={book.book_id} />
                <span className="number">({book.count} đánh giá)</span>
            </>
        );
    };

    console.log(books);
    return (
        <>
            <div className="category__product__items">
                {books && books.map(book => (
                    <a href="/" key={book.book_id}>
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
                    </a >
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

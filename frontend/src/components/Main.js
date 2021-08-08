import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductContext';
import axiosClient from '../api/axiosClient';
import StarRating from './StarRating';
import ReactPaginate from 'react-paginate';

function Main() {
    const { books, setBooks } = useContext(ProductContext);
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 16;
    const pagesVisited = pageNumber * usersPerPage;

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

    const displayUsers = books.slice(pagesVisited, pagesVisited + usersPerPage).map((books) => {
        return (

            <div className="category__product__items">

                <a className="product__item" href={`/nha-sach-tiki/${books.book_id}/${books.book_metatitle}`} key={books.book_id}>
                    <div className="similar__item ">
                        <div className="text-center">
                            <img src={"https://salt.tikicdn.com/cache/280x280/ts/product/" + books.book_img + ".jpg"}
                                alt={books.book_name} />
                        </div>
                        <p className="similar__item__name">{books.book_name}</p>
                        <div>
                            <p className="d-inline similar__item__stars">
                                {/* <i className="icomoon icomoon-star"></i>
                                        <i className="icomoon icomoon-star"></i>
                                        <i className="icomoon icomoon-star"></i>
                                        <i className="icomoon icomoon-star"></i>
                                        <i className="icomoon icomoon-star"></i>
                                        <span className="number">(386 đánh giá)</span> */}
                                {renderRating(books)}
                            </p>
                        </div>
                        <p className="price">
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(books.book_sale)}
                            <span span className="percent " > -{Math.round((1 - 1.0 * books.book_sale / books.book_price) * 100)} %</span>
                            <span className="original ">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(books.book_price)}</span>
                        </p>
                    </div >
                </a>

            </div >

        )
    });

    const pageCount = Math.ceil(books.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
        window.scrollTo({ behavior: "smooth", top: 200 });
    };

    return (
        <span>
            {displayUsers}
            <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </span>
    )
}

export default Main;

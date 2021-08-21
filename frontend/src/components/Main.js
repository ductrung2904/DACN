import React, { useEffect, useState } from 'react'
import StarRating from './StarRating';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../features/shortItemSlice';

function Main() {
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 16;
    const pagesVisited = pageNumber * usersPerPage;

    const { lstShortItem, isLoading, error } = useSelector((state) => state.shortItem);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);

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

    const displayUsers = lstShortItem.slice(pagesVisited, pagesVisited + usersPerPage).map((book) => {
        if (isLoading) return <div>Loading.....</div>;
        if (error) return <div>Error</div>;
        return (

            <div className="category__product__items">

                <a className="product__item" href={`/nha-sach-tiki/${book.book_id}/${book.book_metatitle}`} key={book.book_id}>
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

            </div >

        )
    });

    const pageCount = Math.ceil(lstShortItem.length / usersPerPage);

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

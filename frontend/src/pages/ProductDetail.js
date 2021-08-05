import React, { useContext, useEffect } from 'react'
import ProductDetailLeft from '../components/ProductDetailLeft';
import ProductDetailCenter from '../components/ProductDetailCenter';
import ProductDetailRight from '../components/ProductDetailRight';
import SameProductSlice from '../components/SameProductSlice';
import BookDetail from '../components/BookDetail';
import Evaluate from '../components/Evaluate';
import BookDescriptions from '../components/BookDescriptions';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import axiosClient from '../api/axiosClient';
import BreadCrumb from '../components/BreadCrumb';
import EvaluateRating from '../components/EvaluateRating';
import EvaluateImages from '../components/EvaluateImages';

function ProductDetail() {
    const { id, metatitle } = useParams();
    const { selectBook, setSelectBook } = useContext(ProductContext);

    useEffect(() => {
        const getDetail = async () => {
            try {
                const response = await axiosClient.get(`/${id}/${metatitle}`);
                console.log(response);
                setSelectBook(response.data.data);
            } catch (err) {
                console.log(err);
            }
        };

        getDetail();
    });

    return (
        <>

            {selectBook && (
                <>
                    <BreadCrumb cat_name={selectBook.books.cat_name} book_name={selectBook.books.book_name} />
                    <div className="container">
                        {/* Product detail */}
                        <section className="book d-flex">
                            <ProductDetailLeft image={selectBook.books.book_img} name={selectBook.books.book_name} />
                            <div className="book__right w-100">
                                <ProductDetailCenter aut_id={selectBook.books.aut_id} aut_name={selectBook.books.aut_name} book_name={selectBook.books.book_name} eva_count={selectBook.books.count} eva_rating={selectBook.books.eva_rating} book_sale={selectBook.books.book_sale} book_price={selectBook.books.book_price} />
                                <ProductDetailRight shop_avatar={selectBook.books.shop_avatar} shop_name={selectBook.books.shop_name} />
                            </div>
                        </section>
                        {/* Same Product Slice */}
                        <h4 className="title">SẢN PHẨM TƯƠNG TỰ</h4>
                        <section className="similar">
                            <SameProductSlice same_products={selectBook.same_products} />
                        </section>
                        {/* Book detail */}
                        <h4 className="title">THÔNG TIN CHI TIẾT</h4>
                        <section className="detail">
                            <BookDetail com_name={selectBook.books.com_name} public_date={selectBook.books.public_date} width={selectBook.books.width} height={selectBook.books.height} translator={selectBook.books.translator} cover_type={selectBook.books.cover_type} page_number={selectBook.books.page_number} />
                        </section>
                        {/* Book Descriptions */}
                        <h4 className="title">MÔ TẢ SẢN PHẨM</h4>
                        <section className="describe">
                            <BookDescriptions article={selectBook.books.article} />
                        </section>
                        {/* Custom evaluate */}
                        <h4 className="title">KHÁCH HÀNG NHẬN XÉT</h4>
                        <section className="evaluate">
                            <EvaluateRating eva_rate={selectBook.evaluateRating.eva_rate} eva_rating={selectBook.evaluateRating.eva_rating} eva_count={selectBook.evaluateRating.count} />
                            <EvaluateImages eva_images={selectBook.evaluateImages} />
                            <Evaluate evaluates={selectBook.evaluates} />
                        </section>
                    </div>
                </>
            )}
        </>
    )
}

export default ProductDetail

import React, { useEffect } from 'react'
import ProductDetailLeft from '../components/Detail/ProductDetailLeft';
import ProductDetailCenter from '../components/Detail/ProductDetailCenter';
import ProductDetailRight from '../components/Detail/ProductDetailRight';
import SameProductSlice from '../components/Detail/SameProductSlice';
import BookDetail from '../components/Detail/BookDetail';
import Evaluate from '../components/Detail/Evaluate';
import BookDescriptions from '../components/Detail/BookDescriptions';
import { useParams } from 'react-router-dom';
import BreadCrumb from '../components/Detail/BreadCrumb';
import EvaluateRating from '../components/Detail/EvaluateRating';
import EvaluateImages from '../components/Detail/EvaluateImages';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../api/productApi';
import { Helmet } from 'react-helmet';

function ProductDetail() {
    const { id, metatitle } = useParams();

    const dispatch = useDispatch();
    const { selectBook, sameProduct, evaluates, evaluateImages, evaluateCount, isLoading, error } = useSelector((state) => state.currentBook)

    useEffect(() => {
        dispatch(getDetail(id, metatitle))
    }, [id, metatitle, dispatch]);


    if (error) return <div>Lỗi Server</div>;
    else if (isLoading) {
        return <div className='container'>Đang đợi phản hồi từ backend...</div>
    }
    else if (selectBook) {
        return (
            <>
                {selectBook && (
                    <>
                        <Helmet>
                            <title>{selectBook.book_name}</title>
                        </Helmet>
                        <BreadCrumb item={selectBook} />
                        {/* <BreadCrumb cat_name={selectBook.cat_name} book_name={selectBook.book_name} /> */}
                        <div className="container" key={selectBook.book_id}>

                            {/* Product detail */}
                            <section className="book d-flex">
                                {/* <ProductDetailLeft image={selectBook.book_img} name={selectBook.book_name} /> */}
                                <ProductDetailLeft item={selectBook} />
                                <div className="book__right w-100">
                                    {/* <ProductDetailCenter aut_id={selectBook.aut_id} aut_name={selectBook.aut_name} book_name={selectBook.book_name} eva_count={selectBook.count} eva_rating={selectBook.eva_rating} book_sale={selectBook.book_sale} book_price={selectBook.book_price} add={selectBook} key={selectBook.book_id} />
                                    <ProductDetailRight shop_avatar={selectBook.shop_avatar} shop_name={selectBook.shop_name} /> */}
                                    <ProductDetailCenter item={selectBook} />
                                    <ProductDetailRight item={selectBook} />
                                </div>
                            </section>
                            {/* Same Product Slice */}
                            <h4 className="title">SẢN PHẨM TƯƠNG TỰ</h4>
                            <section className="similar">
                                {/* <SameProductSlice same_products={sameProduct} /> */}
                                <SameProductSlice same_products={sameProduct} />
                            </section>
                            {/* Book detail */}
                            <h4 className="title">THÔNG TIN CHI TIẾT</h4>
                            <section className="detail">
                                {/* <BookDetail com_name={selectBook.com_name} public_date={selectBook.public_date} width={selectBook.width} height={selectBook.height} translator={selectBook.translator} cover_type={selectBook.cover_type} page_number={selectBook.page_number} /> */}
                                <BookDetail item={selectBook} />
                            </section>
                            {/* Book Descriptions */}
                            <h4 className="title">MÔ TẢ SẢN PHẨM</h4>
                            <section className="describe">
                                <BookDescriptions article={selectBook.article} />
                            </section>
                            {/* Custom evaluate */}
                            <h4 className="title">KHÁCH HÀNG NHẬN XÉT</h4>
                            <section className="evaluate">
                                <EvaluateRating eva_rating={selectBook.eva_rating} eva_count={selectBook.count} evaluateCount={evaluateCount} />
                                <EvaluateImages eva_images={evaluateImages} />
                                <Evaluate evaluates={evaluates} />
                            </section>
                        </div>
                    </>
                )
                }
            </>
        )
    }
}

export default ProductDetail

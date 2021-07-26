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

function ProductDetail() {
    const { id } = useParams();
    const { selectBook, setSelectBook } = useContext(ProductContext);

    useEffect(() => {
        const getDetail = async () => {
            try {
                const response = await axiosClient.get(`/${id}`);
                console.log(response);
                setSelectBook(response.data.data.books);
            } catch (err) {
                console.log(err);
            }
        };

        getDetail();
    });

    return (
        <div className="container">
            {selectBook && (
                <>
                    {/* Product detail */}
                    <section className="book d-flex">
                        <ProductDetailLeft image={selectBook.book_img} name={selectBook.book_name} />
                        <div className="book__right w-100">
                            <ProductDetailCenter aut_id={selectBook.aut_id} aut_name={selectBook.aut_name} book_name={selectBook.book_name} book_sale={selectBook.book_sale} book_price={selectBook.book_price} />
                            <ProductDetailRight shop_avatar={selectBook.shop_avatar} shop_name={selectBook.shop_name} />
                        </div>
                    </section>
                    {/* Same Product Slice */}
                    <h4 className="title">SẢN PHẨM TƯƠNG TỰ</h4>
                    <section className="similar">
                        <SameProductSlice />
                    </section>
                    {/* Book detail */}
                    <h4 className="title">THÔNG TIN CHI TIẾT</h4>
                    <section className="detail">
                        <BookDetail com_name={selectBook.com_name} public_date={selectBook.public_date} width={selectBook.width} height={selectBook.height} translator={selectBook.translator} cover_type={selectBook.cover_type} page_number={selectBook.page_number} />
                    </section>
                    {/* Book Descriptions */}
                    <h4 className="title">MÔ TẢ SẢN PHẨM</h4>
                    <section className="describe">
                        <BookDescriptions article={selectBook.article} />
                    </section>
                    {/* Custom evaluate */}
                    <h4 className="title">KHÁCH HÀNG NHẬN XÉT</h4>
                    <section className="evaluate">
                        <Evaluate />
                    </section>
                </>
            )}
        </div>
    )
}

export default ProductDetail

import React, { useState, useEffect } from 'react'

function Main() {
    const [book, setBook] = useState([]);

    const getAllBooks = async () => {
        try {
            const response = await fetch("http://localhost:5000/products");
            const jsonData = await response.json();

            setBook(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getAllBooks();
    }, []);

    console.log(book);
    return (
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
        </div> */}
    )
}

export default Main

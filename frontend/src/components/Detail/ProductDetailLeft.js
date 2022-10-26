import React from 'react'
// import { useParams } from 'react-router-dom';

function ProductDetailLeft(props) {
    const { item } = props;

    return (
        <div class="book__left">
            <img src={"https://salt.tikicdn.com/cache/w444/ts/product/" + (item.book_img) + ".jpg"}
                alt={item.book_name} />
        </div>
    )
}

export default ProductDetailLeft

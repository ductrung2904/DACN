import React from 'react'
// import { useParams } from 'react-router-dom';

function ProductDetailLeft({ image, name }) {
    return (
        <div class="book__left">
            <img src={"https://salt.tikicdn.com/cache/w444/ts/product/" + (image) + ".jpg"}
                alt={name} />
        </div>
    )
}

export default ProductDetailLeft

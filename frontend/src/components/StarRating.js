import React from 'react'

function StarRating({ rating }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<i key={i} className="icomoon icomoon-star"></i>);
        }
        else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<i key={i} className="icomoon icomoon-star half"></i>);
        }
        else {
            stars.push(<i key={i} className="icomoon icomoon-star dark"></i>);
        }
    }
    return <>{stars}</>;
};

export default StarRating

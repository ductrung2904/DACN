import React from 'react'

function EvaluateRating({ eva_rate, eva_rating, eva_count }) {
    const temp = [15, 7, 4, 7, 2];

    for (var i = 5; i > 0; i--) {
        temp.push(
            <tr key={i}>
                <td>{i}</td>
                <td>
                    <div className="progressbar__out">
                        <div className="progressbar__in" style={{ width: 100.0 * temp[5 - i] / eva_count + "%" }}></div>
                    </div>
                </td>
                <td><a href="."><b>{temp[5 - i]}</b> đánh giá</a></td>
            </tr>
        );
    }



    return (
        <>
            <div className="evaluate__top">
                <p className="evaluate__title">{eva_count} đánh giá</p>
            </div>
            <div className="evaluate__middle">
                <b className="d-flex align-items-center justify-content-center">{eva_rating}<i className="evaluate__star icomoon icomoon-star"></i></b>
                <div className="rate-analyst">
                    <table className='w-100'>
                        <tbody>
                            {temp}
                        </tbody>
                    </table>
                </div>
                <div className="btn-evaluate" data-toggle="modal" data-target="#cartModal">Mua ngay &amp; bình luận
                </div>
            </div>
        </>
    )
}

export default EvaluateRating

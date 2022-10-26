import React from 'react'
import { Link } from 'react-router-dom'

function EvaluateRating({ eva_rating, eva_count, evaluateCount }) {
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
                            {evaluateCount.map((item, key) => (
                                <tr key={key}>
                                    <td>{5 - key}</td>
                                    <td>
                                        <div className="progressbar__out">
                                            <div className="progressbar__in" style={{ width: 100.0 * (item.number / eva_count) + "%" }}></div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.number ? (
                                            <Link to="."><b>{item.number ? item.number : 0}</b> đánh giá</Link>
                                        ) : (
                                            <a href='.'> <b>{item.number ? item.number : 0}</b> đánh giá</a>
                                        )}
                                    </td>
                                </tr>
                            ))}
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

import React from 'react'

function BookDetail({ com_name, public_date, width, height, translator, cover_type, page_number }) {
    return (
        <>
            <div className="content has-table">
                <table>
                    <tbody>
                        <tr>
                            <td>Công ty phát hành</td>
                            <td>{com_name}</td>
                        </tr>
                        <tr>
                            <td>Ngày xuất bản</td>
                            <td>{public_date}</td>
                        </tr>
                        <tr>
                            <td>Kích thước</td>
                            <td>{width} x {height} cm</td>
                        </tr>
                        <tr>
                            <td>Dịch Giả</td>
                            <td>{translator}</td>
                        </tr>
                        <tr>
                            <td>Loại bìa</td>
                            <td>{cover_type}</td>
                        </tr>
                        <tr>
                            <td>Số trang</td>
                            <td>{page_number}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="clear-both"></div>
        </>
    )
}

export default BookDetail

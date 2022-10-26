import React from 'react'

function BookDetail(props) {
    const { item } = props;

    return (
        <>
            <div className="content has-table">
                <table>
                    <tbody>
                        <tr>
                            <td>Công ty phát hành</td>
                            <td>{item.com_name}</td>
                        </tr>
                        <tr>
                            <td>Ngày xuất bản</td>
                            <td>{new Date(item.public_date).toLocaleDateString('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit' })}</td>
                        </tr>
                        <tr>
                            <td>Kích thước</td>
                            <td>{item.width} x {item.height} cm</td>
                        </tr>
                        <tr>
                            <td>Dịch Giả</td>
                            <td>{item.translator}</td>
                        </tr>
                        <tr>
                            <td>Loại bìa</td>
                            <td>{item.cover_type}</td>
                        </tr>
                        <tr>
                            <td>Số trang</td>
                            <td>{item.page_number}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="clear-both"></div>
        </>
    )
}

export default BookDetail

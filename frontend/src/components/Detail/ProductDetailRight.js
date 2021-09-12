import React from 'react'

function ProductDetailRight({ shop_avatar, shop_name }) {
    return (
        <div class="book__commitment d-inline-block align-top">
            <div class="book__commitment__top">
                <div class="seller-info">
                    <div class="seller-description">Cam kết chính hiệu bởi</div>
                    <div class="seller-icon-and-name d-flex align-items-start">
                        <img class="icon-store" src={"https://vcdn.tikicdn.com/cache/w88/ts/seller/" + shop_avatar} alt="" />
                        <div>
                            <a href="https://tiki.vn/cua-hang/tiki-trading" class="seller-name">
                                <span>{shop_name}</span>
                                <br />
                                <span class="view-more">Xem Shop</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="book__commitment__benifit">
                    <div class="benefit-item compensation"><img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/compensation.svg" alt="" />
                        <span>Hoàn tiền<br />
                            <b> 111% </b><br />
                            <a href="https://drive.google.com/file/d/1po3r6qApp-q7JDB5kwGKujVtvInfO-ih/view" target="_blank" rel="noreferrer">nếu giả</a>
                        </span>
                    </div>
                    <div class="benefit-item guarantee">
                        <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/guarantee.svg" alt="" />
                        <span>
                            Mở hộp<br />
                            kiểm tra<br />
                            nhận hàng
                        </span>
                    </div>
                    <div class="benefit-item refund">
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/refund.svg" alt="" />
                        <span>Đổi trả trong<br /><b>30 ngày</b><br />nếu sp lỗi</span>
                    </div>
                </div>
            </div>

            <div class="book__commitment__bottom">

            </div>
        </div>
    )
}

export default ProductDetailRight

import React from 'react'

function Footer() {
    return (
        <footer className="footer__wrapper">
            <div className="container">
                <div className="footer__newsletter">
                    <div className="footer__container__1">
                        <div className="newsletter-icon">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/newsletter.png" alt="" width="163" />
                        </div>
                        <div className="newsletter-description">
                            <h3>Đăng ký nhận bản tin Tiki</h3>
                            <h5>Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn</h5>
                        </div>
                        <div className="newsletter-form">
                            <div>
                                <input type="email" placeholder="Địa chỉ email của bạn" value="" />
                            </div>
                            <button>Đăng ký</button>
                        </div>
                    </div>
                </div>
                <div className="footer__information">
                    <div className="footer__container__2">
                        <div className="support block">
                            <h4>HỖ TRỢ KHÁCH HÀNG</h4>
                            <p className="hotline">Hotline chăm sóc khách hàng:<a href="tel:1900-6035">1900-6035</a>
                                <span className="small-text">(1000đ/phút , 8-21h kể cả T7, CN)</span>
                            </p>
                            <a rel="noreferrer" href="https://hotro.tiki.vn/hc/vi" className="small-text" target="_blank">Các câu hỏi thường gặp</a>
                            <a rel="noreferrer" href="https://hotro.tiki.vn/hc/vi/requests/new" className="small-text" target="_blank">Gửi yêu cầu hỗ trợ</a>
                            <a rel="noreferrer" href="https://hotro.tiki.vn/hc/vi/categories/200126644" className="small-text" target="_blank">Hướng dẫn đặt hàng</a>
                            <a rel="noreferrer" href="https://hotro.tiki.vn/hc/vi/categories/200123960" className="small-text" target="_blank">Phương thức vận chuyển</a>
                            <a rel="noreferrer" href="https://tiki.vn/doi-tra-de-dang" className="small-text" target="_blank">Chính sách đổi trả</a>
                            <a rel="noreferrer" href="https://tiki.vn/khuyen-mai/huong-dan-tra-gop" className="small-text" target="_blank">Hướng dẫn trả góp</a>
                            <a rel="noreferrer" href="https://hotro.tiki.vn/hc/vi/articles/360000822643" className="small-text" target="_blank">Chính sách hàng nhập khẩu</a>
                            <p className="security">Hỗ trợ khách hàng:
                                <a href="mailto:hotro@tiki.vn">hotro@tiki.vn</a>
                            </p>
                            <p className="security">Báo lỗi bảo mật:
                                <a href="mailto:security@tiki.vn">security@tiki.vn</a>
                            </p>
                        </div>
                        <div className="block">
                            <h4>VỀ TIKI</h4>
                            <a rel="noreferrer" href="https://tiki.vn/gioi-thieu-ve-tiki" className="small-text" target="_blank">Giới thiệu Tiki</a>
                            <a rel="noreferrer" href="https://tuyendung.tiki.vn" className="small-text" target="_blank">Tuyển Dụng</a>
                            <a rel="noreferrer" href="https://tiki.vn/bao-mat-thanh-toan" className="small-text" target="_blank">Chính sách bảo mật thanh toán</a>
                            <a rel="noreferrer" href="https://tiki.vn/bao-mat-thong-tin-ca-nhan" className="small-text" target="_blank">Chính sách bảo mật thông tin cá nhân</a>
                            <a rel="noreferrer" href="https://hotro.tiki.vn/hc/vi/articles/115005575826" className="small-text" target="_blank">Chính sách giải quyết khiếu nại</a>
                            <a rel="noreferrer" href="https://hotro.tiki.vn/hc/vi/articles/201971214" className="small-text" target="_blank">Điều khoản sử dụng</a>
                            <a rel="noreferrer" href="https://hotro.tiki.vn/hc/vi/articles/201710754-Tiki-Xu-l%C3%A0-g%C3%AC-Gi%C3%A1-tr%E1%BB%8B-quy-%C4%91%E1%BB%95i-nh%C6%B0-th%E1%BA%BF-n%C3%A0o" className="small-text" target="_blank">Giới thiệu Tiki Xu</a>
                            <a rel="noreferrer" href="https://tiki.vn/chuong-trinh/ban-hang-doanh-nghiep" className="small-text" target="_blank">Bán hàng doanh nghiệp</a>
                        </div>
                        <div className="block">
                            <h4>HỢP TÁC VÀ LIÊN KẾT</h4>
                            <a rel="noreferrer" href="https://tiki.vn/quy-che-hoat-dong-sgdtmdt" className="small-text" target="_blank">Quy chế hoạt động Sàn GDTMĐT</a>
                            <a rel="noreferrer" href="https://tiki.vn/ban-hang-cung-tiki" className="small-text" target="_blank">Bán hàng cùng Tiki</a>
                        </div>
                        <div className="block">
                            <h4>PHƯƠNG THỨC THANH TOÁN</h4>
                            <p>
                                <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/visa.svg" alt="" width="54" />
                                <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/mastercard.svg" alt="" width="54" />
                                <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/jcb.svg" alt="" width="54" />
                                <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/cash.svg" alt="" width="54" />
                                <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/internet-banking.svg" alt="" width="54" />
                                <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/installment.svg" alt="" width="54" />
                            </p>
                        </div>
                        <div className="block">
                            <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
                            <p>
                                <a rel="noreferrer" href="https://www.facebook.com/tiki.vn/" className="icon" target="_blank" title="Facebook">
                                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/fb.svg" alt="" width="32" />
                                </a>
                                <a rel="noreferrer" href="https://www.youtube.com/user/TikiVBlog" className="icon" target="_blank" title="Youtube">
                                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/youtube.svg" alt="" width="32" />
                                </a>
                                <a rel="noreferrer" href="http://zalo.me/589673439383195103" className="icon" target="_blank" title="Zalo">
                                    <i className="icon tikicon icon-footer-zalo"></i>
                                </a>
                            </p>
                            <h4 className="store-title">TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</h4>
                            <p>
                                <a rel="noreferrer" href="https://itunes.apple.com/vn/app/id958100553" className="icon" target="_blank" aria-label="">
                                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png" alt="" width="134" />
                                </a>
                                <a rel="noreferrer" href="https://play.google.com/store/apps/details?id=vn.tiki.app.tikiandroid" className="icon" target="_blank" aria-label="">
                                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png" alt="" width="134" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

import React from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

function HomePage() {
    return (
        <div className="category">
            <div className="container">
                <Sidebar />

                <section className="category__content">
                    <h1 className="title">Nhà sách Tiki</h1>
                    <div className="category__carousel">
                        <div id="carouselCategory" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <li data-bs-target="#carouselCategory" data-bs-slide-to="0" aria-current="true" className="active"></li>
                                <li data-bs-target="#carouselCategory" data-bs-slide-to="1"></li>
                                <li data-bs-target="#carouselCategory" data-bs-slide-to="2"></li>
                                <li data-bs-target="#carouselCategory" data-bs-slide-to="3"></li>
                                <li data-bs-target="#carouselCategory" data-bs-slide-to="4"></li>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://salt.tikicdn.com/ts/banner/9b/c0/f7/8726c5fb3e2ca18d1cec428a69a43f4d.jpg"
                                        className="d-block w-100" alt="1" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://salt.tikicdn.com/ts/banner/8a/90/3d/13a9e508e7ce340d5743595570332c2a.jpg"
                                        className="d-block w-100" alt="2" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://salt.tikicdn.com/ts/banner/4c/55/20/7a680982a447f0ad50c06a52006ba885.jpg"
                                        className="d-block w-100" alt="3" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://salt.tikicdn.com/ts/banner/6e/54/52/94893e5f9bfca5e421f94ee81ce1eba8.jpg"
                                        className="d-block w-100" alt="4" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://salt.tikicdn.com/ts/banner/20/46/fe/95b3ea9c091747df12ffaa3fabe4427b.jpg"
                                        className="d-block w-100" alt="5" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="." role="button" data-bs-target="#carouselCategory" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="." role="button" data-bs-target="#carouselCategory" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                    {/* <div className="category__product__list">
                        <div className="category__product__list__row">
                            <a href="https://tiki.vn/bestsellers/sach-truyen-tieng-viet/c316?src=static_block">
                                <img
                                    src="https://salt.tikicdn.com/ts/categoryblock/1f/39/56/21a249b92a62268e4d51bf75470370bf.png" />

                            </a><a href="https://tiki.vn/chuong-trinh/sach-tieng-anh-gia-re?src=static_block">
                                <img
                                    src="https://salt.tikicdn.com/ts/categoryblock/98/bb/9a/68076b684253fb354fc2019795b05afd.png" />

                            </a><a href="https://tiki.vn/bestsellers/thiet-bi-van-phong/c1862?src=static_block">
                                <img
                                    src="https://salt.tikicdn.com/ts/categoryblock/31/26/94/229de24be8b9b6592f663e67c79aa63b.png" />

                            </a><a href="https://tiki.vn/bestsellers/qua-luu-niem/c18328?src=static_block">
                                <img
                                    src="https://salt.tikicdn.com/ts/categoryblock/9d/c0/9f/bf6c078ee85d3946bbd775c341376b52.png" />

                            </a>
                        </div>
                        <div className="category__product__list__row">
                            <a href="https://tiki.vn/chuong-trinh/san-uu-dai-sach-hang-thang?src=static_block">
                                <img
                                    src="https://salt.tikicdn.com/ts/categoryblock/8f/20/07/d08d41e02ee232440a5086940064c747.png" />

                            </a><a href="https://tiki.vn/chuong-trinh/sach-hay-tiki-khuyen-doc?src=static_block">
                                <img
                                    src="https://salt.tikicdn.com/ts/categoryblock/30/97/8e/147bd239527c5fd9cee7d4a387409d85.png" />

                            </a><a href="https://tiki.vn/chuong-trinh/sach-ban-chay?src=static_block">
                                <img
                                    src="https://salt.tikicdn.com/ts/categoryblock/34/f6/10/d067dc065bb516460688ddb73135f2a2.png" />

                            </a>
                        </div>
                        <div className="category__product__list__row">
                            <a
                                href="https://tiki.vn/sach-truyen-tieng-viet/c316&amp;order=newest&amp;seller=1&amp;support_p2h_delivery=1?src=static_block">
                                <img
                                    src="https://salt.tikicdn.com/ts/categoryblock/4e/1a/ba/b0f603781ce07660925e57a54754c04e.png" />

                            </a><a
                                href="https://tiki.vn/nha-sach-tiki/c8322?_lc=Vk4wMzkwMDcwMTI%3D&amp;seller=1&amp;support_p2h_delivery=1&amp;src=static_block">
                                <img
                                    src="https://salt.tikicdn.com/ts/categoryblock/23/03/7a/c623f218c7671465cb1c7cd23d540ac9.png" />

                            </a><a href="https://tiki.vn/chuong-trinh/sach-tieng-anh-gia-re?src=static_block">
                                <img
                                    src="https://salt.tikicdn.com/ts/categoryblock/98/5d/5b/92ae42a6ad89b3c73538bfb156219e3e.png" />

                            </a>
                        </div>
                    </div> */}
                    <Main />
                </section>
            </div>
        </div>
    )
}

export default HomePage
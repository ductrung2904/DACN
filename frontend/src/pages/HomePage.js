import React from 'react';
import Sidebar from '../components/HomePage/Sidebar';
import Main from '../components/HomePage/Main';

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
                    <Main />
                </section>
            </div>
        </div>
    )
}

export default HomePage
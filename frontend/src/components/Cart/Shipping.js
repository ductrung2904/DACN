import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getUserInfo } from '../../api/userApi';
import { saveShippingAddress } from '../../features/shippingSlice';

function Shipping() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userInfo } = useSelector(state => state.login);
    const [username, setUsername] = useState(userInfo.cus_usr);
    useEffect(() => {
        setUsername(username)
        dispatch(getUserInfo(username))
    }, [username, dispatch])

    const [name, setName] = useState(userInfo.cus_name);
    const [phone, setPhone] = useState(userInfo.cus_phone);
    const [email, setEmail] = useState(userInfo.cus_email);
    const [address, setAddress] = useState(userInfo.cus_address);
    const [require, setRequire] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            saveShippingAddress({ username, name, phone, email, address, require })
        );
        history.push("/checkout/payment");
    }

    return (
        <div className="shipping">
            <header className="shipping__header">
                <div className="container">
                    <div className="progress">
                        <div className="progress__item">
                            <div className="text">Đăng nhập</div>
                            <div className="bar">
                                <div className="fill-color"></div>
                            </div>
                            <div className="circle">1</div>
                        </div>
                        <div className="progress__item">
                            <div className="text">Địa chỉ giao hàng</div>
                            <div className="bar">
                                <div className="fill-color"></div>
                            </div>
                            <div className="circle">2</div>
                        </div>
                        <div className="progress__item">
                            <div className="text">Thanh toán &amp; Đặt mua</div>
                            <div className="bar">
                                <div className="fill-color"></div>
                            </div>
                            <div className="circle">3</div>
                        </div>
                    </div>
                    <div className="hotline"><img src="https://frontend.tikicdn.com/_desktop-next/static/img/hotline.png" alt="" /></div>
                </div>
            </header>
            <main style={{ background: "none" }}>
                <div className="container" style={{ width: "1170px" }}>
                    <div className="shipping__title">
                        2. Địa chỉ giao hàng
                    </div>
                    <form className="shipping__main" onSubmit={handleSubmit}>
                        <div className="form-container">
                            <div className="shipping__item"><label>Họ tên</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Nhập họ tên"
                                    maxlength="50" />
                            </div>
                            <div className="shipping__item"><label>Điện thoại di động</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Nhập số điện thoại" />
                            </div>
                            <div className="shipping__item"><label>Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Nhập email" />
                            </div>
                            <div className="shipping__item"><label>Địa chỉ</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Nhập địa chỉ giao" />
                            </div>
                            <div className="shipping__item"><label>Ghi chú</label>
                                <input className="shipping__item__require"
                                    type="text"
                                    name="require"
                                    value={require}
                                    onChange={(e) => setRequire(e.target.value)}
                                    placeholder="Nhập ghi chú" />
                            </div>
                            <div className="shipping__item">
                                <button className="btn-finish">
                                    Thanh toán
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Shipping

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, userLogin } from '../../api/userApi';
import { loginSuccess, loginFail } from '../../features/loginSlice';
import img from '../../style/img/adDangNhap.png';

function Login() {
    const dispatch = useDispatch();

    const history = useHistory();

    const { userInfo, error } = useSelector(state => state.login);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleOnChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case "username":
                setUsername(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const handleOnSubmit = async e => {
        e.preventDefault();

        if (!username || !password) {
            return alert("Bạn chưa điền thông tin đăng nhập");
        }

        try {
            const isAuth = await userLogin({ username, password });

            if (isAuth.status === "error") {
                return dispatch(loginFail(isAuth.message));
            }

            dispatch(loginSuccess(userInfo));
            dispatch(getUserInfo(username));
            history.push("/");
            return alert("Đăng nhập thành công");

        } catch (error) {
            dispatch(loginFail('Tài khoản hoặc mật khẩu chưa đúng'));
            setUsername('');
            setPassword('');
        }
    }

    return (
        <div className="modal fade" id="modalDangNhap" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="close" data-bs-dismiss="modal" aria-label="Close">
                        <i className="tikicon ico-close"></i>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">

                                <div className="col-4 d-flex align-items-center">
                                    <img className="w-100" src={img} alt="" />
                                </div>

                                <div className="col-8">
                                    {error &&
                                        <div className="alert alert-danger">
                                            {error}
                                        </div>}
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link active" id="pills-DangNhap-tab" data-bs-toggle="pill"
                                                href="#pills-DangNhap" role="tab" aria-controls="pills-DangNhap"
                                                aria-selected="true">Đăng nhập</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-DangKy-tab" data-bs-toggle="pill"
                                                href="#pills-DangKy" role="tab" aria-controls="pills-DangKy"
                                                aria-selected="false">Đăng ký</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <form className="tab-pane fade show active" id="pills-DangNhap" role="tabpanel"
                                            aria-labelledby="pills-DangNhap-tab" onSubmit={handleOnSubmit}>
                                            <div className='labelinput'>
                                                <label for="Username" className='lblInfo'>Tên đăng nhập</label>

                                                <input
                                                    type='text'
                                                    className="form-control form-input"
                                                    placeholder="Username"
                                                    name="username"
                                                    value={username}
                                                    onChange={handleOnChange}
                                                    required
                                                />
                                            </div>
                                            <div className='labelinput'>
                                                <label for="Password" className='lblInfo'>Mật khẩu</label>

                                                <input
                                                    type='password'
                                                    placeholder="Password"
                                                    className="form-control form-input"
                                                    name="password"
                                                    value={password}
                                                    onChange={handleOnChange}
                                                    required
                                                />

                                            </div>
                                            <span className='my-2'>Quên mật khẩu? Nhấn vào <a href="/">đây</a>.</span>
                                            <div className="form-button mt-3">
                                                <button id="btnDangNhap2"
                                                    className="btn btn-warning text-dark justify-content-center"
                                                    ToolTip="Log in">Đăng nhập</button>
                                                <button className="btn btn-success justify-content-center">
                                                    Đăng nhập bằng Số điện thoại</button>
                                                <button className="btn btn-facebook">
                                                    <i className="tikicon icon-facebook"></i>
                                                    Đăng nhập bằng Facebook</button>
                                                <button className="btn btn-google">
                                                    <i className="tikicon icon-google"></i>
                                                    Đăng nhập bằng Google
                                                </button>
                                                <button className="btn btn-zalo">
                                                    <i className="tikicon icon-zalo"></i>
                                                    Đăng nhập bằng Zalo
                                                </button>
                                            </div>
                                        </form>
                                        <div className="tab-pane fade" id="pills-DangKy" role="tabpanel"
                                            aria-labelledby="pills-DangKy-tab">

                                            <form className="needs-validation" novalidate>

                                                <div className='labelinput'>
                                                    <label for="hoTen" className='lblInfo'>Họ tên</label>
                                                    <input type='text' id="txtHoTen" placeholder="Nhập họ tên"
                                                        className="form-control form-input" ToolTip="Nhập họ tên" />
                                                </div>

                                                <div className='labelinput'>
                                                    <label for="txtUser" className='lblInfo'>Tên đăng nhập</label>

                                                    <input type='text' id="txtUser" className="form-control form-input"
                                                        ToolTip="Nhập tên đăng nhập" placeholder="Nhập tên đăng nhập" />

                                                </div>

                                                <div className='labelinput'>
                                                    <label for="txtPass" className='lblInfo'>Mật khẩu</label>

                                                    <input type='text' id="txtPass" TextMode="Password"
                                                        className="form-control form-input" ToolTip="Nhập mật khẩu"
                                                        placeholder="Nhập mật khẩu từ 6 đến 32 ký tự" />

                                                </div>

                                                <div className='labelinput'>
                                                    <label for="txtPass" className='lblInfo'>Địa chỉ</label>

                                                    <input type='text' id="txtDiaChi" className="form-control form-input"
                                                        ToolTip="Nhập địa chỉ" placeholder="Address" />

                                                </div>
                                                <div className='labelinput'>
                                                    <label for="dienThoai" className='lblInfo'>SĐT</label>
                                                    <input type='text' id="txtDienThoai" className="form-control form-input"
                                                        ToolTip="Nhập số điện thoại" placeholder="Nhập số điện thoại" />
                                                </div>
                                                <div className='labelinput'>
                                                    <label for="email" className='lblInfo'>Email</label>

                                                    <input type='text' id="txtEmail" className="form-control form-input"
                                                        ToolTip="Nhập email" placeholder="Nhập email" />
                                                </div>

                                                <div className='labelinput'>
                                                    <label for="gioiTinh" className='lblInfo'>Giới tính</label>
                                                    <div className="form-input">
                                                        <div className="form-check form-check-inline">
                                                            <input type='radio' name='gender' id='male'
                                                                className="form-check-input" />
                                                            <label className="form-check-label" for="male">Nam</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input type='radio' id='female' name='gender'
                                                                className="form-check-input" />
                                                            <label className="form-check-label" for="female">Nữ</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-button mt-3">
                                                    <button id="btnDangKy"
                                                        className="btn btn-warning text-dark justify-content-center">Đăng
                                                        ký</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

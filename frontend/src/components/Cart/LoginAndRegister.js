import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, userLogin, userRegisterVerify } from '../../api/userApi';
import { loginSuccess, loginFail } from '../../features/loginSlice';
import img from '../../style/img/adDangNhap.png';
import validateInfo from '../validateInfo';

function LoginAndRegister() {
    const dispatch = useDispatch();

    const history = useHistory();

    // Login
    const { userInfo, error } = useSelector(state => state.login);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginOnChange = e => {
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

    const handleLoginOnSubmit = async e => {
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

    // Register
    const [newUser, setNewUser] = useState("");
    const [errors, setErrors] = useState({});
    const temp = "$('#pills-DangNhap').trigger('click')";

    useEffect(() => { }, [newUser]);

    const handleRegisterOnChange = (e) => {
        const { name, value } = e.target;

        setNewUser({ ...newUser, [name]: value });
    }

    const handleRegisterOnSubmit = (e) => {
        e.preventDefault();
        const { name, username, password, address, phone, email, gender } = newUser;
        const newRegistration = { name, username, password, address, phone, email, gender };
        setErrors(validateInfo(newUser));
        if (Object.keys(errors).length === 0) {
            dispatch(userRegisterVerify(newRegistration));
            setUsername(newUser.username);
            setPassword(newUser.password);
            alert("Đăng ký thành công")
        }
    }

    return (
        <div className="modal fade" id="modalDangNhap" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalDangNhap" aria-hidden="true">
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
                                            <button className="nav-link active" id="pills-DangNhap-tab" data-bs-toggle="pill"
                                                href="#pills-DangNhap" role="tab" aria-controls="pills-DangNhap"
                                                aria-selected="true">Đăng nhập</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-DangKy-tab" data-bs-toggle="pill"
                                                href="#pills-DangKy" role="tab" aria-controls="pills-DangKy"
                                                aria-selected="false">Đăng ký</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <form className="tab-pane fade show active" id="pills-DangNhap" role="tabpanel"
                                            aria-labelledby="pills-DangNhap-tab" onSubmit={handleLoginOnSubmit}>
                                            <div className='labelinput'>
                                                <label for="Username" className='lblInfo'>Tên đăng nhập</label>

                                                <input
                                                    type='text'
                                                    className="form-control form-input"
                                                    placeholder="Username"
                                                    name="username"
                                                    value={username}
                                                    onChange={handleLoginOnChange}
                                                    required
                                                />
                                            </div>
                                            <div className='labelinput'>
                                                <label htmlFor="Password" className='lblInfo'>Mật khẩu</label>

                                                <input
                                                    type='password'
                                                    placeholder="Password"
                                                    className="form-control form-input"
                                                    name="password"
                                                    value={password}
                                                    onChange={handleLoginOnChange}
                                                    required
                                                />

                                            </div>
                                            <span className='my-2'>Quên mật khẩu? Nhấn vào <a href="/">đây</a>.</span>
                                            <div className="form-button mt-3">
                                                <button id="btnDangNhap2"
                                                    className="btn btn-warning text-dark justify-content-center"
                                                    data-bs-dismiss="modal">Đăng nhập</button>
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

                                            <form className="needs-validation" onSubmit={handleRegisterOnSubmit}>
                                                <div className='labelinput'>
                                                    <label htmlFor="hoTen" className='lblInfo'>Họ tên</label>
                                                    <input
                                                        type='text'
                                                        placeholder="Nhập họ tên"
                                                        name="name"
                                                        value={newUser.name}
                                                        onChange={handleRegisterOnChange}
                                                        className="form-control form-input"
                                                    />
                                                </div>
                                                {errors.name && (
                                                    <div class="text-danger">{errors.name}</div>
                                                )}

                                                <div className='labelinput'>
                                                    <label htmlFor="txtUser" className='lblInfo'>Tên đăng nhập</label>

                                                    <input
                                                        type='text'
                                                        name="username"
                                                        value={newUser.username}
                                                        onChange={handleRegisterOnChange}
                                                        className="form-control form-input"
                                                        placeholder="Nhập tên đăng nhập"
                                                    />

                                                </div>
                                                {errors.username && (
                                                    <div class="text-danger">{errors.username}</div>
                                                )}

                                                <div className='labelinput'>
                                                    <label htmlFor="txtPass" className='lblInfo'>Mật khẩu</label>

                                                    <input
                                                        type='password'
                                                        name="password"
                                                        value={newUser.password}
                                                        onChange={handleRegisterOnChange}
                                                        className="form-control form-input"
                                                        placeholder="Nhập mật khẩu từ 8 đến 32 ký tự"
                                                    />

                                                </div>
                                                {errors.password && (
                                                    <div class="text-danger">{errors.password}</div>
                                                )}

                                                <div className='labelinput'>
                                                    <label htmlFor="txtPass" className='lblInfo'>Địa chỉ</label>

                                                    <input
                                                        type='text'
                                                        name="address"
                                                        value={newUser.address}
                                                        onChange={handleRegisterOnChange}
                                                        className="form-control form-input"
                                                        placeholder="Nhập địa chỉ"
                                                    />

                                                </div>
                                                {errors.address && (
                                                    <div class="text-danger">{errors.address}</div>
                                                )}

                                                <div className='labelinput'>
                                                    <label htmlFor="dienThoai" className='lblInfo'>SĐT</label>
                                                    <input
                                                        type='number'
                                                        name="phone"
                                                        value={newUser.phone}
                                                        onChange={handleRegisterOnChange}
                                                        className="form-control form-input"
                                                        placeholder="Nhập số điện thoại"
                                                    />
                                                </div>
                                                {errors.phone && (
                                                    <div class="text-danger">{errors.phone}</div>
                                                )}

                                                <div className='labelinput'>
                                                    <label htmlFor="email" className='lblInfo'>Email</label>

                                                    <input
                                                        type='email'
                                                        name="email"
                                                        value={newUser.email}
                                                        onChange={handleRegisterOnChange}
                                                        className="form-control form-input"
                                                        placeholder="Nhập email"
                                                    />
                                                </div>
                                                {errors.email && (
                                                    <div class="text-danger">{errors.email}</div>
                                                )}

                                                <div className='labelinput'>
                                                    <label htmlFor="gioiTinh" className='lblInfo'>Giới tính</label>
                                                    <div className="form-input">
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                type='radio'
                                                                name='gender'
                                                                value="1"
                                                                onChange={handleRegisterOnChange}
                                                                id='male'
                                                                className="form-check-input"
                                                                checked="checked"
                                                            />
                                                            <label className="form-check-label" for="male">Nam</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                type='radio'
                                                                id='female'
                                                                name='gender'
                                                                value="0"
                                                                onChange={handleRegisterOnChange}
                                                                className="form-check-input"
                                                            />
                                                            <label className="form-check-label" for="female">Nữ</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                {errors.gender && (
                                                    <div class="text-danger">{errors.gender}</div>
                                                )}

                                                <div className="form-button mt-3">
                                                    <button id="btnDangKy"
                                                        className="btn btn-warning text-dark justify-content-center" onClick={temp}>Đăng
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

export default LoginAndRegister

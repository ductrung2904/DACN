export default function validateInfo(values) {
    let error = {};

    if (!values.username) {
        error.username = "Bạn chưa nhập tên đăng nhập";
    }

    if (!values.name) {
        error.name = "Bạn chưa nhập họ tên";
    }

    if (!values.email) {
        error.email = "Bạn chưa nhập email";
    }
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
        error.email = "Email không hợp lệ";
    }

    if (!values.address) {
        error.address = "Bạn chưa nhập địa chỉ";
    }

    if (!values.phone) {
        error.phone = "Bạn chưa nhập SĐT";
    }
    else if (values.phone.length !== 10) {
        error.phone = "SĐT phải đúng 10 số";
    }

    if (!values.gender) {
        error.gender = "Bạn chưa chọn giới tính";
    }

    if (!values.password) {
        error.password = "Bạn chưa nhập mật khẩu";
    }
    else if (values.password.length < 8) {
        error.password = "Mật khẩu phải từ 8 ký tự trở lên";
    }

    return error;
}
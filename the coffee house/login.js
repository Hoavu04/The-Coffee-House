document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Thực hiện kiểm tra thông tin đăng nhập
        if (username === "admin" && password === "password") {
            alert("Đăng nhập thành công!");
            // Chuyển hướng đến trang web của bạn
            window.location.href = "index.html"; // Thay đổi đường dẫn nếu cần
        } else {
            errorMessage.textContent = "Tên đăng nhập hoặc mật khẩu không chính xác.";
        }
    });
});

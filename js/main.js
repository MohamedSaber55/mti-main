// ScrollReveal({
//     reset: true
// });

// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200,
// });

// ScrollReveal().reveal('.logo', {
//     origin: "top"
// });


// login
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        document.getElementById("message").innerHTML = "تم تسجيل الدخول بنجاح!";
        window.location.href = "login.html";
    } else {
        document.getElementById("message").innerHTML = "اسم المستخدم أو كلمة المرور غير صحيحة!";
    }
});

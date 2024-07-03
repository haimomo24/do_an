// validation form register and register user local storage
const inputNameRegister = document.querySelector(".form-control-lg-name-js");
const inputEmailRegister = document.querySelector(".form-control-lg-email-js");
const inputPasswordRegister = document.querySelector(".form-control-lg-password-js");
const btnRegister = document.querySelector(".btn-register-js");

// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputNameRegister.value === "" ||
    inputEmailRegister.value === "",
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  } else {
    // array user
    const user = {
      name: inputNameRegister.value,
      email: inputEmailRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputEmailRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "login.html";
  }
});




// const register = (e) =>{
//     event.preventDefault();
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var user = {
//         name: name,
//         email: email,
//         password:password
//     };
//     var json = JSON.stringify(user);
//     localStorage.setItem(name, json);
//     alert("dang ki thanh cong ")

// }
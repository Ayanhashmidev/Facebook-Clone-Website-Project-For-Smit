let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginbtn");

// Hardcoded single user
const user = {
  email: "ayanhashmi.pk@gmail.com",
  password: "ayan123"
};

const sweety = (icon, title, message) => {
  Swal.fire({
    icon,
    title,
    text: message,
  });
};

const loginHandler = () => {
  let emailvalue = email.value.trim();
  let passwordvalue = password.value.trim();

  if (emailvalue === "" || passwordvalue === "") {
    sweety("error", "Error", "Please enter all fields!");
    return;
  }

  if (emailvalue === user.email && passwordvalue === user.password) {
    localStorage.setItem("userData", JSON.stringify(user));

    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "Welcome back!",
    }).then(() => {
      window.location.href = "dashbord.html"; // 👈 next page
    });

  } else {
    sweety("error", "Login Failed", "Email or password incorrect!");
  }
};

loginBtn.addEventListener("click", loginHandler);


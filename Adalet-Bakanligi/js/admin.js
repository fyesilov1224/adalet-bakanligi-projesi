// ADMIN GİRİŞ KONTROLÜ
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  // Admin kullanıcı adı ve şifre kontrolü
  if (username === "admin" && password === "admin") {
    window.location.href = "adminpaneli.html"; // Admin panel sayfasına yönlendir
  } else {
    alert("Kullanıcı adı veya şifre yanlış!");
  }
});

// ŞİFREMİ UNUTTUM KUTUSUNU GÖSTER
function showForgotPassword() {
  const forgotBox = document.getElementById("forgotPasswordBox");
  forgotBox.classList.remove("d-none");
}

// ŞİFRE SIFIRLAMA
function sendReset() {
  const emailInput = document.getElementById("resetEmail");
  const forgotBox = document.getElementById("forgotPasswordBox");
  const successBox = document.getElementById("successMessage");

  if (emailInput.value.trim() === "") {
    alert("Lütfen mail adresinizi giriniz!");
    return;
  }

  forgotBox.classList.add("d-none");
  successBox.classList.remove("d-none");
  emailInput.value = "";

  setTimeout(() => {
    successBox.classList.add("d-none");
  }, 3000);
}



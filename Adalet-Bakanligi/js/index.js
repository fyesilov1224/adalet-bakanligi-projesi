// Giriş formu kontrolü
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === "ab121664" && password === "123456") {
    window.location.href = "personelbilgisi.html";
  } else {
    alert("Kullanıcı adı veya şifre yanlış!");
  }
});

// Şifremi unuttum kutusunu göster
function showForgotPassword() {
  const forgotBox = document.getElementById("forgotPasswordBox");
  forgotBox.classList.remove("d-none");
}

// Gönder butonuna basıldığında
function sendReset() {
  const emailInput = document.getElementById("resetEmail");
  const forgotBox = document.getElementById("forgotPasswordBox");
  const successBox = document.getElementById("successMessage");

  if (emailInput.value.trim() === "") {
    alert("Lütfen mail adresinizi giriniz!");
    return;
  }

  // Formu tamamen gizle
  forgotBox.classList.add("d-none");

  // Başarı mesajını göster
  successBox.classList.remove("d-none");

  // Input alanını temizle
  emailInput.value = "";

  // 3 saniye sonra başarı mesajını gizle
  setTimeout(() => {
    successBox.classList.add("d-none");
  }, 3000);
}


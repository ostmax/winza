// Открытие модального окна
function openModal() {
    document.getElementById("registerModal").style.display = "block";
  }
  
  // Закрытие модального окна
  function closeModal() {
    document.getElementById("registerModal").style.display = "none";
  }
  
  // Закрытие по клику вне окна
  window.onclick = function (event) {
    const modal = document.getElementById("registerModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  
  // Обработка формы регистрации
  document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("✅ " + data.message);
        document.getElementById("registerForm").reset();
        closeModal();
      } else {
        alert("⚠️ " + (data.message || "Ошибка регистрации"));
      }
    } catch (error) {
      alert("❌ Ошибка подключения к серверу");
      console.error(error);
    }
  });
  
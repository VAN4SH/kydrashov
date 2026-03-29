var form = document.getElementById("contact-form");
var message = document.getElementById("form-message");

if (form && message) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var text = document.getElementById("message-text").value.trim();

    message.classList.remove("success");
    message.classList.remove("error");

    if (name === "" || email === "" || text === "") {
      message.textContent = "Пожалуйста, заполните все поля.";
      message.classList.add("error");
      return;
    }

    if (email.indexOf("@") === -1) {
      message.textContent = "Введите email со знаком @.";
      message.classList.add("error");
      return;
    }

    message.textContent = "Спасибо! Сообщение отправлено (демо-версия).";
    message.classList.add("success");
    form.reset();
  });
}

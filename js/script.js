var yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Главная страница: случайные факты.
var factButton = document.getElementById("fact-button");
var factBox = document.getElementById("fact-box");

var facts = [
  "Кошки спят примерно 12-16 часов в сутки 😴",
  "Усы помогают кошке понимать, проходит ли она в отверстие 🐾",
  "Кошки любят рутину и стабильный режим дня 📅",
  "Нос у каждой кошки имеет уникальный рисунок 👃"
];

if (factButton && factBox) {
  factButton.addEventListener("click", function () {
    var randomIndex = Math.floor(Math.random() * facts.length);
    factBox.textContent = facts[randomIndex];
  });
}

// Страница "О клубе": простой счетчик встреч.
var showMeetingsBtn = document.getElementById("showMeetingsBtn");
var meetingsText = document.getElementById("meetingsText");

if (showMeetingsBtn && meetingsText) {
  showMeetingsBtn.addEventListener("click", function () {
    meetingsText.textContent = "За этот месяц у нас прошло 4 встречи 🐾";
  });
}

// Страница мероприятий: фильтр списка.
var showAllBtn = document.getElementById("showAllBtn");
var showOfflineBtn = document.getElementById("showOfflineBtn");
var showOnlineBtn = document.getElementById("showOnlineBtn");
var eventItems = document.querySelectorAll(".events-list li");

function showEventsByType(type) {
  for (var i = 0; i < eventItems.length; i++) {
    var currentType = eventItems[i].getAttribute("data-type");

    if (type === "all" || currentType === type) {
      eventItems[i].classList.remove("hidden");
    } else {
      eventItems[i].classList.add("hidden");
    }
  }
}

if (showAllBtn) {
  showAllBtn.addEventListener("click", function () {
    showEventsByType("all");
  });
}

if (showOfflineBtn) {
  showOfflineBtn.addEventListener("click", function () {
    showEventsByType("offline");
  });
}

if (showOnlineBtn) {
  showOnlineBtn.addEventListener("click", function () {
    showEventsByType("online");
  });
}

// Галерея: перемешивание карточек.
var shuffleButton = document.getElementById("shuffleEmojiBtn");
var emojiGrid = document.getElementById("emojiGrid");

if (shuffleButton && emojiGrid) {
  shuffleButton.addEventListener("click", function () {
    var cards = Array.from(emojiGrid.children);

    cards.sort(function () {
      return Math.random() - 0.5;
    });

    for (var i = 0; i < cards.length; i++) {
      emojiGrid.appendChild(cards[i]);
    }
  });
}

// Контакты: простая проверка формы.
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

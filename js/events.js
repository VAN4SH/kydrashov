var showAllBtn = document.getElementById("showAllBtn");
var showOfflineBtn = document.getElementById("showOfflineBtn");
var showOnlineBtn = document.getElementById("showOnlineBtn");
var eventItems = document.querySelectorAll(".events-list li");

function showByType(type) {
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
    showByType("all");
  });
}

if (showOfflineBtn) {
  showOfflineBtn.addEventListener("click", function () {
    showByType("offline");
  });
}

if (showOnlineBtn) {
  showOnlineBtn.addEventListener("click", function () {
    showByType("online");
  });
}

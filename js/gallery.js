var shuffleButton = document.getElementById("shuffleEmojiBtn");
var emojiGrid = document.getElementById("emojiGrid");

function shuffleEmojiCards() {
  if (!emojiGrid) {
    return;
  }

  var cards = Array.from(emojiGrid.children);

  cards.sort(function () {
    return Math.random() - 0.5;
  });

  for (var i = 0; i < cards.length; i++) {
    emojiGrid.appendChild(cards[i]);
  }
}

if (shuffleButton) {
  shuffleButton.addEventListener("click", shuffleEmojiCards);
}

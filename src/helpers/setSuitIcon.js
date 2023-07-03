export const setSuitIcon = (icons, randomSuit) => {
  [...icons].map(icon => {
    let output = "";

    if (randomSuit === "spades") {
      icon.innerHTML = `<h1>&spades;</h1>`;
    }
    if (randomSuit === "clubs") {
      icon.innerHTML = `<h1>&clubs;</h1>`;
    }
    if (randomSuit === "hearts") {
      icon.innerHTML = `<h1 class="text-danger" >&hearts;</h1>`;
    }
    if (randomSuit === "diamons") {
      icon.innerHTML = `<h1 class="text-danger">&diams;</h1>`;
    }
  });
};

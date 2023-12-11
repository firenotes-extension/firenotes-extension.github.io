document.addEventListener("DOMContentLoaded", function () {

  function openInfoPopup() {

    const userLanguage = navigator.language || navigator.userLanguage;

    const popupMessages = {
      "en": 'This widget comes from "https://weatherwidget.org" and the location is obtained by approximating the IP. If you want to know more about how this data is used, please visit the "https://weatherwidget.org" website.',
      "es": 'Este widget proviene de "https://weatherwidget.org" y la ubicación se obtiene mediante una aproximación de la IP. Si quiere saber más de como se usan estos datos, por favor, visite el sitio web de "https://weatherwidget.org".',
      "ca": 'Aquest widget prové de "https://weatherwidget.org" i la ubicació s\'obté mitjançant una aproximació de la IP. Si voleu saber més de com es fan servir aquestes dades, si us plau, visiteu el lloc web de "https://weatherwidget.org".',
      "it": 'Questo widget proviene da "https://weatherwidget.org" e la posizione si ottiene approssimando l\'IP. Se vuoi saperne di più su come vengono utilizzati questi dati, visita il sito web "https://weatherwidget.org".',
    };

    const popupMessage = popupMessages[userLanguage.toLowerCase()] || popupMessages["en"];

    alert(popupMessage);
  }

  const moreInfoButton = document.getElementById("more-info-button");

  if (moreInfoButton) {
    moreInfoButton.addEventListener("click", openInfoPopup);
  }
});

function redirectToFahrenheit() {
  window.location.href = './fahrenheit/index.html';
}

function redirectToCelsius() {
  window.location.href = '../index.html';
}

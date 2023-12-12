document.addEventListener("DOMContentLoaded", function () {

    const userLanguage = navigator.language || navigator.userLanguage;
  
    const translations = {
      "en": {
        title: "Weather Forecast",
        airQuality: "Options:",
        button: 'Change units to "°F"+Info & Privacy'
      },
      "es": {
        title: "Pronóstico del tiempo",
        airQuality: "Opciones:",
        button: 'Cambiar las unidades a "°F"+Información y privacidad'
      },
      "ca": {
        title: "Pronòstic del temps",
        airQuality: "Opcions:",
        button: 'Cambiar unitats a "°F"+Informació i privadesa'
      },
      "it": {
        title: "Previsioni del tempo",
        airQuality: "Opzioni:",
        button: 'Cambia unità in "°F"+Informazioni e privacy'
      }
    };
  
    const titleElement = document.querySelector('h1');
    const airQualityElement = document.querySelector('h2');
    const buttons = document.querySelectorAll('button');
  
    const translation = translations[userLanguage.toLowerCase()] || translations["en"];
  
    titleElement.textContent = translation.title;
    airQualityElement.textContent = translation.airQuality;
    buttons.forEach((button, index) => {
      button.textContent = translation.button.split('+')[index];
    });
  });
  
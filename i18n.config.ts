export default defineI18nConfig(() => ({
  legacy: false,
  locale: "de",
  numberFormats: {
    de: {
      currency: {
        style: "currency",
        currency: "EUR",
        notation: "standard",
      },
    },
  },
  datetimeFormats: {
    de: {
      short: {
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      },
    },
  },
  messages: {
    de: {
      hero: {
        title: "Willkommen",
        body: "Entdecken Sie die Welt von EuroJackpot! Millionen Spieler warten auf den großen Gewinn. Seien Sie dabei und sichern Sie Ihre Chance!",
        button: "Jetzt spielen",
      },
    },
  },
}));

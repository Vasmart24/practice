class Prompt {
  // message: string
  // titles: array
  // values: array
  // description: array
  // format: function (функция для постобработки пользовательского ввода value)
  constructor(message, titles, values, description = [], format = null) {
    this.type = 'select';
    this.name = 'value';
    this.message = message;
    this.format = format;
    this.choices = [];
    for (let i = 0; i < titles.length; i += 1) {
      this.choices.push({
        title: titles[i],
        description: description[i] ? description[i] : null,
        value: values[i],
      });
    }
  }
}

// const myPrompt = new Prompt('city', ['Ратуша', 'Таверна', 'Рынок', 'Центр Инженерии', 'Госпиталь'],
// ['townhallActions', 'tavernActions', 'marketActions', 'engineerActions', 'hospitalActions'],
// ['главное здание города', 'место отдыха и закупки провизией', 'купить аммуницию', 'найм и улучшение войск', 'лечение войск']
// )

export default Prompt;

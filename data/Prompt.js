class Prompt {
  // message: string
  // titles: array
  // values: array
  // description: array
  // format: function (функция для постобработки пользовательского ввода value)
  // disabled: array
  constructor(message, titles, values, description = [], format = null, disabled = []) {
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
        disabled: disabled[i] ? disabled[i] : null
      });
    }
  }
}

export default Prompt;

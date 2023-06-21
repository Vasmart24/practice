class Prompt {
  // message: string
  // titles: array
  // values: array
  // description: array
  constructor(message, titles, values, description) {
    this.type = 'select';
    this.name = 'value';
    this.message = message;
    this.choices = [];
    for (let i = 0; i < titles.length; i += 1) {
      this.choices.push({ 
        title: titles[i],
        value: values[i],
        description: description[i] ? description[i] : null,
      });
    }
  }
}

export default Prompt;

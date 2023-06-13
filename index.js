import prompts from 'prompts';

const userName = async () => {
  const { meaning } = await prompts({
    type: 'text',
    name: 'meaning',
    message: 'What is your name?',
  });
  return meaning;
};

const firstMeeting = async () => {
  const name = await userName();
  console.clear();
  console.log(`Hello, ${name}, nice to meet you`);
};

firstMeeting();

/*
 const userName = await (async () => {
  const response = await prompts({
    type: 'text',
    name: 'meaning',
    message: 'What is your name?'
  });
});

const firstMeeting = () => {
  console.log(`good day ${userName}, ass you can`);
}
await firstMeeting();
*/

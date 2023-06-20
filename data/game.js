
export const game = (promptName, choice) => {
  console.log();
  const action = makeprompt[promptName](choice);
  game(action)
}

function scan(words) {
  let result = [];
  for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
    const word = words[wordIndex];
    if (word === 'contraband') {
      result.push(wordIndex);
    }
  }
  return result;
}
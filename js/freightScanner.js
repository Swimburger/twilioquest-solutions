function scan(words){
  let counter = 0;
  for(let word of words){
    if(word === 'contraband') counter++;
  }
  return counter;
}
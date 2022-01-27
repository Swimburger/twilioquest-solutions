function addFirstToLast(words){
  if(!words.length) return '';
  return words[0] + words[words.length - 1];
}
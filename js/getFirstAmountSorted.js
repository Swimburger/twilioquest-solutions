function getFirstAmountSorted(words, amount){
  words = words.sort();
  return words.slice(0, amount);
}
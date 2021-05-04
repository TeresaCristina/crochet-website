

function shuffle(originalArray) {
  for (let i = originalArray.length - 1; i > 0; i--) {
    const index = Math.floor(Math.random() * (i + 1));
    [originalArray[i], originalArray[index]] = [originalArray[index], originalArray[i]];
  }
}

function select(originalArray, category) {
  return filtFigLinks = originalArray.filter(function (figure) { return figure.cat == category; });
}
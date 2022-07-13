function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function createSymbols(amount, width, height, size) {
  let symbols = [];
  const padd = 0;
  for (let i = 0; i < amount; i++) {
    const type = getRndInteger(1, 4 + 1);
    const x = getRndInteger(padd, width - size - padd);
    const y = getRndInteger(padd, height - size - padd);

    const suitable =
      symbols.every((item) => item.x !== x) ||
      symbols.every((item) => item.y !== y);

    if (suitable) {
      symbols.push({
        type,
        x,
        y,
      });
    }
  }
  return symbols;
}

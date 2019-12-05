const range =
  (start: number, end: number) => Array.from({length: (end - start + 1)}, (v, k) => k + start);

const randomInt = (max: number): number => Math.floor(Math.random() * Math.floor(max));

export {
  range,
  randomInt
}

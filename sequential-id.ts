let num = 0;
const LEN = 5;
const PAD = "0";

export function sequentialId() {
  let id = String(++num);
  while (id.length < LEN) {
    id = PAD + id;
  }
  return id;
}

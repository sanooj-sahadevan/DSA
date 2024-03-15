const a = [2, 99, 10, 4, 1, 6, -5];

function insert(a) {
  for (let i = 0; i < a.length; i++) {
    let NTI = a[i];
    let j = i - 1;

    while (j >= 0 && a[j] > NTI) {
      a[j + 1] = a[j];
      j = j - 1;
    }
    a[j + 1] = NTI;
  }
  return a
}

console.log(insert(a));

const a = [2, 99, 10, 4, 1, 6, -5];

function bubble(a) {
  let swap;
  do {
    swap = false;
    for (i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);
  return a;
}

console.log(bubble(a));


// O(n^2)

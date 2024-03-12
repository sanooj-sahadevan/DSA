const arr = [-5, 2, 4, 6, 10];

function binary(t) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (t === arr[mid]) {
      return mid;
    } else if (t > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid + 1;
    }
  }
  return -1;
}
console.log(binary(10));
console.log(binary(6));
console.log(binary(20));
console.log(binary(6));

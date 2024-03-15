const a = [2, 99, 10, 4, 1, 6, -5];

// function quicksort(a) {
//   if (a.length < 2) {
//     return a;
//   }

//   let pivot = a[a.length - 1]
//   let start = [];
//   let end = [];

//   for (i = 0; i < a.length - 1; i++) {
//     if (a[i] < pivot) {
//       start.push(a[i]);
//     } else {
//       end.push(a[i]);
//     }
//   }
//   return [...quicksort(start), pivot, ...quicksort(end)];
// }
console.log(quicksort(a));

// O(n^2)

function quicksort(a) {
  if (a.length < 2) {
    return a;
  }
  let pivot = a[a.length - 1];
  let left = [];
  let right = [];

  for (i = 0; i < a.length-1; i++) {
    if (a[i] < pivot) {
      left.push(a[i]);
    } else {
      right.push(a[i]);
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
}

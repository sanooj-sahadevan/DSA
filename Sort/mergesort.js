const a = [2, 99, 10, 4, 1, 6, -5];

// function mergesort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }

//   const mid = Math.floor(arr.length / 2);
//   let start = arr.slice(0, mid);
//   let end = arr.slice(mid);
//   return merge(mergesort(start), mergesort(end));
// }

// function merge(start, end) {
//   let sorted = [];

//   while (start.length && end.length) {
//     if (start[0] <= end[0]) {
//       sorted.push(start.shift());
//     } else {
//       sorted.push(end.shift());
//     }
//   }
//   return [...sorted, ...start, ...end];
// }
console.log(mergesort(a));

// O(nlogn)

function mergesort(a) {
  if (a.length < 2) {
    return a;
  }
  let mid = Math.floor(a.length / 2);
  let start = a.slice(0, mid);
  let end = a.slice(mid);
  return merge(mergesort(start), mergesort(end));
}

function merge(start, end) {
  let sorted = [];
  while (start.length && end.length) {
    if (start[0] <= end[0]) {
      sorted.push(start.shift());
    } else {
      sorted.push(end.shift());
    }
  }

  return [...sorted, ...start, ...end];
}

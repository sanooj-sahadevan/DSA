function pm(n) {
  if (n < 2) {
    return false;
  }
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      return true;
    }
  }
  return false
}

console.log(pm(4));

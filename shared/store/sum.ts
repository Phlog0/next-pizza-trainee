export function sum(a: number, b: number) {
  return a + b;
}

export function sumAsync(a: number, b: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

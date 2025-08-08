// silly curry example
export const mul = x => y => z => x* y * z;

console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48
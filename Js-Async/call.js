// rumus phytagoras
const perkalian = (x, y) => x * y;
const akar = (x) => perkalian(x, x);

const phytagoras = (a, b, c) => {
  return akar(a) + akar(b) === akar(c);
};

console.log(phytagoras(3,4,5));

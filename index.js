function createDog(name, age, weight) {
  const dog = { name, age, weight }
  return dog;
}

const dog = createDog('Boo', 8, 50);

console.log(dog);
function createDog(name, age, weight) {
  const dog = { name, age, weight }
  return dog;
}

const dog = createDog('Boo', 8, 50);

console.log(dog);

// alternative efficient way

// const createDog = (name, age, weight) => ({ name, age, weight });

// const dog = createDog('Same', 2) 20
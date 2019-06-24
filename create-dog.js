function createDog(name, age, weight) {
  const dog = { name, age, weight }
  return dog;
}

const dog = createDog('Sam', 2, '20lbs');
console.log(dog)

module.exports = createDog;
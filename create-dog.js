const createDog = (name, age, weight) => ({ 
  name, 
  age, 
  weight
})

const name = process.argv[2]
const age = process.argv[3]
const weight = process.argv[4]

const dog = createDog(name, age, weight)
console.log(dog);

module.exports = createDog;

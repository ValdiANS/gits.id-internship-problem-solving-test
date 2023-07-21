const firstProblemSolution = (num = 0) => {
  const result = [];

  for (let i = 0; i < num; i++) {
    if (i === 0) {
      result.push(1);
      continue;
    }

    const newNumber = (i * (i + 1)) / 2 + 1;

    result.push(newNumber);
  }

  return result.join('-');
};

const test1 = firstProblemSolution(7);
const test2 = firstProblemSolution(9);
const test3 = firstProblemSolution(5);

console.log(test1);
console.log(test2);
console.log(test3);

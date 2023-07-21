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

const test = firstProblemSolution(7);
console.log(test);

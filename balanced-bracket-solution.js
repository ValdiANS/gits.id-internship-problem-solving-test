const balancedBracketSolution = (str = '') => {
  const openingBrackets = '{[(';
  const closingBrackets = ')]}';

  const curlyBrackets = '{}';
  const squareBrackets = '[]';
  const parentheses = '()';

  let isBalanced = true;

  const trimmedStr = str.replace(/ /g, '');

  // If the 'brackets string' has odd length, then return NO, because 'brackets string' is not balanced
  if (trimmedStr.length % 2 === 1) return 'NO';

  for (let i = 0; i < trimmedStr.length - 1; i++) {
    let isCurrentBracketOpeningBracket = false;
    let currentBracketType = '';
    let nextBracketType = '';

    // Check if current character is an opening bracket or closing brackets
    if (openingBrackets.includes(trimmedStr[i])) {
      isCurrentBracketOpeningBracket = true;
    }

    // If the next character is an opening bracket, then continue the loop
    // because if the next character is also an opening bracket, then the 'brackets string' still balanced
    if (openingBrackets.includes(trimmedStr[i + 1])) {
      continue;
    }

    // Check the bracket type of the current bracket
    if (curlyBrackets.includes(trimmedStr[i])) {
      currentBracketType = 'curly';
    }

    if (squareBrackets.includes(trimmedStr[i])) {
      currentBracketType = 'square';
    }

    if (parentheses.includes(trimmedStr[i])) {
      currentBracketType = 'parentheses';
    }

    // Check the bracket type of the next bracket
    if (curlyBrackets.includes(trimmedStr[i + 1])) {
      nextBracketType = 'curly';
    }

    if (squareBrackets.includes(trimmedStr[i + 1])) {
      nextBracketType = 'square';
    }

    if (parentheses.includes(trimmedStr[i + 1])) {
      nextBracketType = 'parentheses';
    }

    // Check whether the current bracket and the next bracket are of the same type
    // If they are the same type, then continue because the 'brackets string' still balanced
    if (currentBracketType === nextBracketType) {
      continue;
    }

    // If the current bracket is an opening bracket and the next character is closing bracket with different type,
    // then set isBalanced to false and break the loop
    if (
      isCurrentBracketOpeningBracket &&
      closingBrackets.includes(trimmedStr[i + 1])
    ) {
      isBalanced = false;
      break;
    }
  }

  return isBalanced ? 'YES' : 'NO';
};

const test1 = balancedBracketSolution('{ [ ( ) ] }');
const test2 = balancedBracketSolution('{ [ ( ] ) }');
const test3 = balancedBracketSolution('{ ( ( [ ] ) [ ] ) [ ] }');

console.log(test1);
console.log(test2);
console.log(test3);

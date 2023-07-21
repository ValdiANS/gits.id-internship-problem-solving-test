const denseRankingSolution = (
  totalPlayer = 0,
  scoreArr = [],
  gitsTotalGame = 0,
  gitsScoreArr = []
) => {
  const sortedScoreArr = scoreArr.sort((a, b) => b - a);
  const scoreArrRank = [];
  const gitsScoreArrRank = [];

  sortedScoreArr.forEach((score, idx, arr) => {
    if (idx === 0) {
      scoreArrRank.push(1);
      return;
    }

    if (score === arr[idx - 1]) {
      scoreArrRank.push(scoreArrRank[idx - 1]);
    } else {
      scoreArrRank.push(scoreArrRank[idx - 1] + 1);
    }
  });

  gitsScoreArr.forEach((score) => {
    for (let i = 0; i < scoreArr.length; i++) {
      if (score === sortedScoreArr[i]) {
        gitsScoreArrRank.push(scoreArrRank[i]);
        return;
      }

      if (score >= sortedScoreArr[0]) {
        gitsScoreArrRank.push(1);
        return;
      }

      if (score < sortedScoreArr[scoreArr.length - 1]) {
        gitsScoreArrRank.push(scoreArrRank[scoreArrRank.length - 1] + 1);
        return;
      }

      if (
        i < scoreArr.length - 1 &&
        sortedScoreArr[i + 1] < score &&
        score < sortedScoreArr[i]
      ) {
        gitsScoreArrRank.push(scoreArrRank[i] + 1);
      }
    }
  });

  return gitsScoreArrRank.join(' ');
};

const test1 = denseRankingSolution(
  7,
  [100, 100, 50, 40, 40, 20, 10],
  4,
  [5, 25, 50, 120]
);

const test2 = denseRankingSolution(4, [100, 80, 80, 70], 3, [60, 70, 100]);

const test3 = denseRankingSolution(
  7,
  [100, 100, 50, 40, 40, 20, 10],
  4,
  [110, 70, 10, 45]
);

console.log(test1);
console.log(test2);
console.log(test3);

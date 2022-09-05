const gugudan = (num1, num2) => {
  let count = 0;
  let totalResult = 0;
  let dataArray = [];

  for (let i = num1; i <= num2; i++) {
    for (let j = 1; j <= 9; j++) {
      count++;
      totalResult += i * j;
      dataArray.push({
        formula: `${i} X ${j}`,
        result: i * j,
        totalResult: totalResult,
        count: `${count}`,
      });
    }
  }
  console.log(dataArray);
  return dataArray;
};

export default gugudan;

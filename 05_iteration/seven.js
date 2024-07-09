myNumbrs = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newnums = myNumbrs.map((num) => num/10)
// console.log(newnums);

const newnums = myNumbrs
                    .map((num) => num/10)
                    .map((num) => num * 100)
                    .filter((num) => {return num > 40})
console.log(newnums);
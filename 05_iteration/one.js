//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5){
//         console.log("5 is the best number");
//     }
//     console.log(element);    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`)
//     for (let j = 0; j <=5; j++) {
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }

// const myArray = ["Thor", "Superman", "Batman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//Break

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("Detected 5")
        break
    }
    console.log(`value of i is ${i}`)
}

//Continue

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("Detected 5")
        continue
    }
    console.log(`value of i is ${i}`)
}
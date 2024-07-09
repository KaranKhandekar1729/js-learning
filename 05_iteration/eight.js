mynums = [1, 2, 3]

const total = mynums.reduce(function(acc, currvalue){
    console.log(`acc: ${acc}, currvalue: ${currvalue}`);
    return acc + currvalue
}, 0)

// console.log(total);

// const mytotal = mynums.reduce((acc, currvalue) => (acc + currvalue), 0)
// console.log(mytotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalSC = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalSC);
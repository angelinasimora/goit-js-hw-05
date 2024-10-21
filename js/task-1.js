function isEnoughCapacity(products, containerSize) {
   let total = 0;

 
    for (const product in products) {
        total += products[product];
    }


    return total <= containerSize;

}

console.log(isEnoughCapacity({ apples: 2, grapes: 4 }, 10)); // true
console.log(isEnoughCapacity({ apples: 10, grapes: 4 }, 10)); // false
console.log(isEnoughCapacity({ apples: 3, grapes: 5, bananas: 2 }, 12)); // true
console.log(isEnoughCapacity({ apples: 3, grapes: 5, bananas: 5 }, 10)); // false
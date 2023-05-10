const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
    (function (iteration) {
        setTimeout(function () {
            console.log('In first decision I am at index ' + array[iteration])
        }, 3000)
    })(i)
}


for (let i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('In second decision I am at index ' + array[i])
    }, 3000)
}
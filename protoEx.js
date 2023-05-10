//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.
Date.prototype.lastYear = function() {
    let stringDate = this

    return stringDate.getFullYear() - 1
}

console.log(new Date('1900-10-10').lastYear())
//'1899'


// Array.prototype.map = function(callback, thisArg = this) {
//     let array = callback(thisArg)
//     for(let i = 0; i < array.length; i++) {
//         array[i] = array[i] + '🗺'
//     }
//     return array
// }
//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
// console.log([1,2,3].map(element => { return element  }))
//1🗺, 2🗺, 3🗺


Function.prototype.bind = function (whoIsCallingMe,) {
    let _this = this
    return function () {
        return _this.apply(whoIsCallingMe, arguments)
    }
}

function a() {
    console.log(36, this)
    console.log(this.name)
}

const getName = a.bind({name: "Stepa"})
getName()

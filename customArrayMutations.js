

console.log(Array);
let methods = {
  customPush: function(newItem) {
    this[this.length] = newItem;
  },
  customPop: function(newItem) {
    let newArr = this.splice(this.length-1)
    console.log(newArr);
    return newArr[0];
  }
}

for (let obj in methods) {
  Array.prototype[obj] = methods[obj]
}

let arr = [];
arr.customPush(1);
arr.customPush(3);
arr.customPush(4);
arr.customPop()
console.log(arr.__proto__);
console.log(Array.prototype);

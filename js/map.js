Array.prototype.ownMap = function (fun) {
  let res = [];
  for(let i = 0; i < this.length; i++) {
    res.push(fun(this[i]));
  }
  return res;
}

let arr = [1,6,3,8,2,9,11];

console.log(arr.ownMap(item => item * 2))

console.log(arr.map(item => item * 2))
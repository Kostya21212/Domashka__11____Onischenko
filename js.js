const arr = [1,2,3]
function some (array, predicate){
 for( let i = 0; i< array.length;i++){
    if(predicate(array[i])){
        return true
    }
 }
 return false
}
const result = some(arr,el => el > 1)
console.log(result)

function filter (array, predicate){
 const result= []
for(let i = 0; i < array.length; i++){
    if(predicate(array[i])) {
    result.push(array[i]);
    }
    
}
return result
}
console.log(filter(arr, function(item){
    return item > 1
}))

function reduce(array, predicate, initialValue) {
  let accumulate = initialValue !== undefined ? initialValue : array[0];
  const startIdx = initialValue !== undefined ? 0 : 1;
  
  for (let i = startIdx; i < array.length; i++) {
    accumulate = predicate(accumulate, array[i]);
  }
  return accumulate;
}

const arr2 = [1, 2, 3];
console.log(reduce(arr2, (sum, el) => sum + el, 0));  // Виведе: 6

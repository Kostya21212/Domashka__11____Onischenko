// debugger
// // // };
// const arr = [
//     {
//       name: "Vitaly",
//       age: 33,
//       sex: "male",
//     },
//     {
//       name: "Maria",
//       age: 32,
//       sex: "female",
//     },
//     {
//       name: "Vitaly",
//       age: 35,
//       sex: "male",
//     },
//     {
//       name: "Anastasya",
//       age: 30,
//       sex: "female",
//     },
//     {
//       name: "Vitaly",
//       age: 10,
//       sex: "male",
//     },
//     {
//       name: "Vita",
//       age: 20,
//       sex: "female",
//     },
//   ];
//   const count = {
//     men: 0,
//     women: 0,
//   };
//   arr.forEach(function (element, index) {
//     element.sex === "male" ? count.men++ : count.women++;
//   });
//   console.log(count);
//   const filter = arr.filter(function (item){
//   return item.name === 'Vitaly'
//   })
//   console.log(filter)
// let arrayFilter = [1,2,3]
// arrayFilter.splice(1,1);//видаляє з 1 масиву 1 елемент
// console.log(arrayFilter)

// let arr = [1,2,3,4,5,6]
// arr.splice(0,4)//видаляє з 0 индексу по 4 всі елементи
// console.log(arr)

// let arr1 = [1,2,3,4,5,6]
// arr1.splice(0,3, 'LENA')//видаляє з 0 индексу по 4 всі елементи
// console.log(arr1)

// let arr2 = [1,2,3,4,5,6,7,8,9,10]
// arr2.splice(5,0, "duck",'pitler')
// console.log(arr2)

// let arr3 = [1,2,3,4,5,6,7,8,9,10]
// arr3.splice(-1,0, 66,54)
// console.log(arr3)

// let arr4 = [1,2,3]
// alert(arr4.concat([4,5]))

// let arr5 = [1,2,3,4]
// const objectUser ={ name: "Ivan",age:25,place:'Kyiv'}
// alert(arr5.concat(objectUser))

// let arr6 = [1,2,3,4]
// const objectUser2 ={ 0: "Ivan",1:25,2:'Kyiv',
// [Symbol.isConcatSpreadable]:true,
// length:3}
// alert(arr6.concat(objectUser2))



// let arr7 = [
//     {id:1, name:'John'},
//     {id:2, name:'Valentyn'},
//     {id:3, name:'Anastasya'}
// ]
// let filterUsers = arr7.filter(item => item.id < 3)
// console.log(filterUsers)
// let arrayNum = [1,2,3]
// function filter (array, predicate){
//   for( let i = 1; i < arrayNum;i--){
//     return arrayNum
//   }
// }
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
 let result= []
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

function reduce (array,predicate,initialValue ){
 let accumulate = initialValue;
 for(let i = 0; i < array.length;i++){
    accumulate = predicate(accumulate, array[i])
 }
 return accumulate
}
console.log(reduce(arr,(sum, el)=> sum + el, 0))
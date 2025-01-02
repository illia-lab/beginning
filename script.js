
// let HelloMessage = ('hello')

// alert(HelloMessage)

//DATA TYPES(primitives)

//string
//alert(typeof('heyhey'))
//nubmer
//alert(typeof(1234))
//boolean
//alert(typeof(true))
//null
//alert(typeof(null))
//undefined
//alert(typeof(undefined))
///////
//DATA TYPES(advanced)
//objest
//let obj = {
  //name: 'illia',
   // gender: 'male',
    //hobby: 'math genius'
//}
//obj.name = 'not illia'
//obj['hobby'] = 'not math genius'
//alert(typeof(obj))
//Big int
//let bigInt = 99999999999999n
//let bigInt2 = BigInt('999999999999')

//alert(Number.MAX_SAFE_INTEGER)

// const userLogging = false
//  if (userLogging) {
//     alert('congratulation!You are logged in!!!')
//  } else {
//     alert('You are not logged in:(')
//  }

// userLogging ? alert('congratulation!You are logged in!!!') : alert('You are not logged in:(')

// let age = 40 

// switch(age) {
//     case 10:
//         alert('you little');
//     break;
//     case 20:
//         alert('u bigger')
//         break;
//         case 30:
//             alert('u much bigger')
//             break;
//             default :
//             alert('aleady buy your coffin')
// }
// function Heyhey(name) {
//     alert('hello ' + name)
// }
// Heyhey('illia')

// const basicName = 'illia'

// function manipulationFunc(name) {
//     const res = name.toUpperCase()
// return res
// }

// alert(manipulationFunc(basicName))

// const arr = [1,2,3,4,5]
// alert(arr)

// const arr2 = new Array('hey', "heyhey", 'heyheyhey')

// let subscribers = [
//     {name: 'user1', age: 16, profession: 'student'},
//     {name: 'user2', age: 17, profession: 'barista'},
//     {name: 'user3', age: 16, profession: 'student'},
//     {name: 'user4', age: 17, profession: 'barista'},
//     {name: 'user5', age: 16, profession: 'student'},
//     {name: 'user6', age: 17, profession: 'barista'},
//     {name: 'user7', age: 16, profession: 'student'},
//     {name: 'user8', age: 17, profession: 'barista'},
//     {name: 'user9', age: 16, profession: 'student'},
//     {name: 'user10', age: 17, profession: 'barista'},
//     {name: 'user1', age: 16, profession: 'student'},
//     {name: 'user2', age: 17, profession: 'barista'},
//     {name: 'user3', age: 16, profession: 'student'},
//     {name: 'user4', age: 17, profession: 'barista'},
//     {name: 'user5', age: 16, profession: 'student'},
//     {name: 'user6', age: 17, profession: 'barista'},
//     {name: 'user7', age: 16, profession: 'student'},
//     {name: 'user8', age: 17, profession: 'barista'},
//     {name: 'user9', age: 16, profession: 'student'},
//     {name: 'user10', age: 17, profession: 'barista'}, {name: 'user1', age: 16, profession: 'student'},
//     {name: 'user2', age: 17, profession: 'barista'},
//     {name: 'user3', age: 16, profession: 'student'},
//     {name: 'user4', age: 17, profession: 'barista'},
//     {name: 'user5', age: 16, profession: 'student'},
//     {name: 'user6', age: 17, profession: 'barista'},
//     {name: 'user7', age: 16, profession: 'student'},
//     {name: 'user8', age: 17, profession: 'barista'},
//     {name: 'user9', age: 16, profession: 'student'},
//     {name: 'user10', age: 17, profession: 'barista'}, {name: 'user1', age: 16, profession: 'student'},
//     {name: 'user2', age: 17, profession: 'barista'},
//     {name: 'user3', age: 16, profession: 'student'},
//     {name: 'user4', age: 17, profession: 'barista'},
//     {name: 'user5', age: 16, profession: 'student'},
//     {name: 'user6', age: 17, profession: 'barista'},
//     {name: 'user7', age: 16, profession: 'student'},
//     {name: 'user8', age: 17, profession: 'barista'},
//     {name: 'user9', age: 16, profession: 'student'},
//     {name: 'user10', age: 17, profession: 'barista'}, {name: 'user1', age: 16, profession: 'student'},
//     {name: 'user2', age: 17, profession: 'barista'},
//     {name: 'user3', age: 16, profession: 'student'},
//     {name: 'user4', age: 17, profession: 'barista'},
//     {name: 'user5', age: 16, profession: 'student'},
//     {name: 'user6', age: 17, profession: 'barista'},
//     {name: 'user7', age: 16, profession: 'student'},
//     {name: 'user8', age: 17, profession: 'barista'},
//     {name: 'user9', age: 16, profession: 'student'},
//     {name: 'user10', age: 17, profession: 'barista'}, {name: 'user1', age: 16, profession: 'student'},
//     {name: 'user2', age: 17, profession: 'barista'},
//     {name: 'user3', age: 16, profession: 'student'},
//     {name: 'user4', age: 17, profession: 'barista'},
//     {name: 'user5', age: 16, profession: 'student'},
//     {name: 'user6', age: 17, profession: 'barista'},
//     {name: 'user7', age: 16, profession: 'student'},
//     {name: 'user8', age: 17, profession: 'barista'},
//     {name: 'user9', age: 16, profession: 'student'},
//     {name: 'user10', age: 17, profession: 'barista'}, {name: 'user1', age: 16, profession: 'student'},
//     {name: 'user2', age: 17, profession: 'barista'},
//     {name: 'user3', age: 16, profession: 'student'},
//     {name: 'user4', age: 17, profession: 'barista'},
//     {name: 'user5', age: 16, profession: 'student'},
//     {name: 'user6', age: 17, profession: 'barista'},
//     {name: 'user7', age: 16, profession: 'student'},
//     {name: 'user8', age: 17, profession: 'barista'},
//     {name: 'user9', age: 16, profession: 'student'},
//     {name: 'user10', age: 17, profession: 'barista'},
//     {name: 'user3', age: 16, profession: 'student'},
//     {name: 'user4', age: 17, profession: 'barista'},
//     {name: 'user5', age: 16, profession: 'student'},
//     {name: 'user6', age: 17, profession: 'barista'},
//     {name: 'user7', age: 16, profession: 'student'},
//     {name: 'user8', age: 17, profession: 'barista'},
//     {name: 'user9', age: 16, profession: 'student'},
//     {name: 'user10', age: 17, profession: 'barista'},
//     {name: 'user3', age: 16, profession: 'student'},
//     {name: 'user4', age: 17, profession: 'barista'},
//     {name: 'user5', age: 16, profession: 'student'},
//     {name: 'user6', age: 17, profession: 'barista'},
//     {name: 'user7', age: 16, profession: 'student'},
//     {name: 'user8', age: 17, profession: 'barista'},
//     {name: 'user9', age: 16, profession: 'student'},
//     {name: 'user10', age: 17, profession: 'barista'},
//     {name: 'user3', age: 16, profession: 'student'},
//     {name: 'user4', age: 17, profession: 'barista'},
//     {name: 'user5', age: 16, profession: 'student'},
//     {name: 'user6', age: 17, profession: 'barista'},
//     {name: 'user7', age: 16, profession: 'student'},
//     {name: 'user8', age: 17, profession: 'barista'},
//     {name: 'user9', age: 16, profession: 'student'},
//     {name: 'user10', age: 17, profession: 'barista'},
//     {name: 'user3', age: 16, profession: 'student'},
//     {name: 'user4', age: 17, profession: 'barista'},
//     {name: 'user5', age: 16, profession: 'student'},
//     {name: 'user6', age: 17, profession: 'barista'},
//     {name: 'user7', age: 16, profession: 'student'},
//     {name: 'user8', age: 17, profession: 'barista'},
//     {name: 'user9', age: 16, profession: 'student'},
//     {name: 'user10', age: 17, profession: 'barista'},
// ]

// function congratsIfMoreThan100(someArr) {
//     if(someArr.length > 100) {
//         alert('Congratulations u have more than 100 subs!')
//     }
//     return
// }

// congratsIfMoreThan100(subscribers)

let isCloseFriend = [
    {name: 'Ivan', isCloseFriends: true},
    {name: 'Vitaly', isCloseFriends: false},
    {name: 'Margo', isCloseFriends: false},
    {name: 'Sasha', isCloseFriends: true},
    {name: 'Daniil', isCloseFriends: true},
    {name: 'Chris', isCloseFriends: true},
    {name: 'Vlad', isCloseFriends: false},
    {name: 'Maks', isCloseFriends: true},
    {name: 'Andrew', isCloseFriends: false},
]

// for(let i = 0; i < isCloseFriend.length; i++){
// if(isCloseFriend[i].isCloseFriends === true){
//     alert(isCloseFriend[i].name)
// }
// }

// for(const item of isCloseFriend){
//     if(item.isCloseFriends === true){
//         alert(item.name)
//     }
//}
// for(const key in isCloseFriend){
//     if(isCloseFriend[key].isCloseFriends === true){
//         alert(isCloseFriend[key].name)
//     }
// }

// let numArr = [2,4,6,8]
// function heyHey(arr){
//     for(const item of numArr){
//     alert(item * item)
// }}

// alert(heyHey(numArr))

//let peopleArray = [
    //{name: 'Illia', sex: 'male'},
    //{name: 'Andrew', sex: 'male'},
    //{name: 'Sandra', sex: 'female'},
  //  {name: 'Anna', sex: 'female'},
//]
//function peopleChecker(arr) {
//for(let i = 0; i < arr.length; i++){
    //peopleArray[i].sex === 'male' ?
      // alert('handsome ' + peopleArray[i].name)
        
    //:
    //    alert('preety ' + peopleArray[i].name)
    
    
  //      }}
//peopleChecker(peopleArray)

const numArr = [2,1,2,5,7,9,2,2]


function getNumArray(numArray,num){
    let counter = 0
for(item of numArray){
    if(item === num){
        counter++
    }}
    return counter > 0 ? counter : 'данного числа немає'

}
alert(getNumArray([1,2,5,7,9,2,2],2))
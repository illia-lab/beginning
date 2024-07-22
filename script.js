
// let HelloMessage = ('hello')

// alert(HelloMessage)

//DATA TYPES(primitives)

//string
alert(typeof('heyhey'))
//nubmer
alert(typeof(1234))
//boolean
alert(typeof(true))
//null
alert(typeof(null))
//undefined
alert(typeof(undefined))
///////
//DATA TYPES(advanced)
//objest
let obj = {
    name: 'illia',
    gender: 'male',
    hobby: 'math genius'
}
obj.name = 'not illia'
obj['hobby'] = 'not math genius'
alert(typeof(obj))
//Big int
let bigInt = 99999999999999n
let bigInt2 = BigInt('999999999999')

alert(Number.MAX_SAFE_INTEGER)

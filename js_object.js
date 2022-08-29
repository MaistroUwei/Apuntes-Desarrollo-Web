let user ={
    name: 'Santiago',
    /*age: 19,
    toString() {
        return `{name: ${user.name}, age: ${this.age}}`;
    }*/
}

//console.log('user', user)

// Template literals
let templateLiteral = `Hello there my name is ${user.name} and 1 + 1 = ${1 + 1}`
console.log('templateLiteral', templateLiteral)

let json = JSON.stringify(user);
console.log('json', json)

let unparedJson = '{"name":"Santiago", "age":200}';
let newUser = JSON.parse(unparedJson);
console.log('newUser.name', newUser.name);
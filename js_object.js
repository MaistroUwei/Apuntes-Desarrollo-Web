let user ={
    name: 'Santiago',
    age: 19,
    toString() {
        return `{name: ${user.name}, age: ${this.age}}`;
    }
}

console.log('user', user)

// Template literals
let templateLiteral = `Hello there my name is ${user.name} and 1 + 1 = ${1 + 1}`
console.log('templateLiteral', templateLiteral)
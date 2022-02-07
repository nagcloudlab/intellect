"use strict"

let person = {
    name: "Nag"
}
Object.preventExtensions(person)

person.age = 39


console.log(person);
let obj = {
    name: "vasya",
    age: 25,
    profession: "programmer"
}

for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}
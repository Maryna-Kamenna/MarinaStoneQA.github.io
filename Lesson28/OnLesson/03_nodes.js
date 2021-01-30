let list = document.body.childNodes;

console.log(list);

for (let i = 0; i < list.length; i++) {
    console.log(list[i].nodeType)
}
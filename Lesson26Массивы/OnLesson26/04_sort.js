let arr = [{
        subject: "HTML",
        rating: 4
    },
    {
        subject: "CSS",
        rating: 2
    },
    {
        subject: "JS",
        rating: 5
    }
]

console.log(arr);

let newArr = arr.sort((a, b) => {
    return b.rating - a.rating
})

console.log(arr);
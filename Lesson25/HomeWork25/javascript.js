// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

//  Функция для вывода на экран информации об автомобиле;

let car = { 
    producer : "Ford",
    model : "Mustang",
    year : 1988,
    speed : 180,
    carInfo: function () {
        return  "producer " + this.producer + " model " + this.model + " year " + this.year + " speed "  + this.speed
    }
}
alert(car.carInfo ());



//  Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
//  Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

let car = { 
    producer : "Ford",
    model : "Mustang",
    year : 1988,
    speed : 180,
    getTime: function () {
        let way = 0;
        way / speed * 60 
        }
    }

alert(car.getTime());


//2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

// function drobi (num1, num1){
//     console.log()
// };


// //Функция сложения 2-х объектов-дробей;
// function drobi (num1, num1){
//     let res1 =  this.num1 + this.num2;
//     console.log(res1)
// };


// //Функция вычитания 2-х объектов-дробей;
// function drobi (num1, num1){
//     let res2 = this.num1 - this.num2;
//     console.log(res2)
// };


// //Функция умножения 2-х объектов-дробей;
// function drobi (num1, num1){
//     let res3 = this.num1 * this.num2;
//     console.log(res3)
// };


// //Функция деления 2-х объектов-дробей;
// function drobi (num1, num1){
//     let res4 = this.num1 / this.num2;
//     console.log(res4)
// };

// Функция сокращения объекта-дроби. -не знаю как это




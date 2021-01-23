// 1.  Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек),
// и написать следующие функции для работы с таким объектом.




// 2. Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена).

// let rectungle = {
//    x1 : 1, y1 : 2, x2 : 3, y2 : 4, a, b,c, d,
//    getInfo: function (nx1,ny1,nx2,ny2) {
//        this.a = {};
//        this.x2 = ny1;
      
//    }
// }

// let rectangle = {    
//     x1: 1,     
//     y1: 2,     
//     x2: 3,     
//     y2: 4,    
//     getInfo: function () {         
//         return "x1: " + this.x1 + ", " + this.y1 + " y1: " + this.x2 + ", " + this.y2 + " x2: " + this.x1 + ", " + this.y2 + " y2: " + this.x2 + ", " + this.y1     
//     } }  

        
// rectangle.getInfo();




// Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена).


// Функция принимает объект-прямоугольник и возвращает его ширину. 

// let rectangle = {    
//     x1: 1,     
//     y1: 2,     
//     x2: 5,     
//     y2: 9,    
//     getInfo: function () {         
//         return "x1: " + this.x1 + ", " + this.y1 + " y1: " + this.x2 + ", " + this.y2 + " x2: " + this.x1 + ", " + this.y2 + " y2: " + this.x2 + ", " + this.y1     
//     }   ,
//     getWidh: function() {
//         this.w = Math.abs(this.x2 - this.x1)
//         return this.w
//     }

// }
// rectangle.getInfo();


// // Функция принимает объект-прямоугольник и возвращает его высоту.
// let rectangle = {    
//     x1: 1,     
//     y1: 2,     
//     x2: 5,     
//     y2: 9,    
//     getInfo: function () {         
//         return "x1: " + this.x1 + ", " + this.y1 + " y1: " + this.x2 + ", " + this.y2 + " x2: " + this.x1 + ", " + this.y2 + " y2: " + this.x2 + ", " + this.y1     
//     }   ,
//     getWidh: function() {
//         this.w = Math.abs(this.x2 - this.x1)
//         return this.w
//     },
//     getHight: function() {
//         this.h = Math.abs(this.y2 - this.y1)
//         return this.h
//     }
// }

// Функция принимает объект-прямоугольник и возвращает его площадь

// let rectangle = {    
//     x1: 1,     
//     y1: 2,     
//     x2: 5,     
//     y2: 9,    
//     getInfo: function () {         
//         return "x1: " + this.x1 + ", " + this.y1 + " y1: " + this.x2 + ", " + this.y2 + " x2: " + this.x1 + ", " + this.y2 + " y2: " + this.x2 + ", " + this.y1     
//     }   ,
//     getWidh: function() {
//         this.w = Math.abs(this.x2 - this.x1)
//         return this.w
//     },
//     getHight: function() {
//         this.h = Math.abs(this.y2 - this.y1)
//         return this.h
//     },
//     getSquire: function() {
//         this.s = this.getWidh()  * this.getHight()
//         return this.s
//     }
// }


// Функция принимает объект-прямоугольник и возвращает его периметр. 

// let rectangle = {    
//     x1: 1,     
//     y1: 2,     
//     x2: 5,     
//     y2: 9,    
//     getInfo: function () {         
//         return "x1: " + this.x1 + ", " + this.y1 + " y1: " + this.x2 + ", " + this.y2 + " x2: " + this.x1 + ", " + this.y2 + " y2: " + this.x2 + ", " + this.y1     
//     }   ,
//     getWidh: function() {
//         this.w = Math.abs(this.x2 - this.x1)
//         return this.w
//     },
//     getHight: function() {
//         this.h = Math.abs(this.y2 - this.y1)
//         return this.h
//     },
//     getSquire: function() {
//         this.s = this.getWidh()  * this.getHight()
//         return this.s
//     },
//     getP: function() {
//         this.p = (this.getWidh()  * this.getHight()) * 2
//         return this.p
//     }
// }



// Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить ширину. 

let rectangle = {    
    x1: 1,     
    y1: 2,     
    x2: 5,     
    y2: 9,    
    getInfo: function () {         
        return "x1: " + this.x1 + ", " + this.y1 + " y1: " + this.x2 + ", " + this.y2 + " x2: " + this.x1 + ", " + this.y2 + " y2: " + this.x2 + ", " + this.y1     
    }   ,
    getWidh: function() {
        this.w = Math.abs(this.x2 - this.x1)
        return this.w
    },
    getHight: function() {
        this.h = Math.abs(this.y2 - this.y1)
        return this.h
    },
    getSquire: function() {
        this.s = this.getWidh()  * this.getHight()
        return this.s
    },
    getP: function() {
        this.p = (this.getWidh()  * this.getHight()) * 2
        return this.p
    },
    getModivfW: function(stepW) {
        this.x2 = this.x2 + stepW;
      return  this.x2
    }
}



// Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить высоту.



// Функция изменения ширины и высоты прямоугольника. Она принимает объект-прямоугольник и два значения – для изменения ширины и высоты. 


let rectangle = {    
    x1: 1,     
    y1: 2,     
    x2: 5,     
    y2: 9,    
    getInfo: function () {         
        return "x1: " + this.x1 + ", " + this.y1 + " y1: " + this.x2 + ", " + this.y2 + " x2: " + this.x1 + ", " + this.y2 + " y2: " + this.x2 + ", " + this.y1     
    }   ,
    getWidh: function() {
        this.w = Math.abs(this.x2 - this.x1)
        return this.w
    },
    getHight: function() {
        this.h = Math.abs(this.y2 - this.y1)
        return this.h
    },
    getSquire: function() {
        this.s = this.getWidh()  * this.getHight()
        return this.s
    },
    getP: function() {
        this.p = (this.getWidh()  * this.getHight()) * 2
        return this.p
    },
    getModivfW: function(stepW) {
        this.x1 = this.x1 + stepW;
        this.x2 = this.x2 + stepW;
    },
checkIsIncludeRectangle: function(a, b){
   if  (a>= this.x1 && a<= this.x2 && b>= this.y1 && b<= this.y2) {
 return 'Находится точка внутри прямоугольника'
   } else {
        return 'Точка находится не внутри прямоугольника'

    }
}
}
// Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.
// Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.
// Функция смещения прямоугольника и по оси X и по  оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y.
// Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и координаты точки.
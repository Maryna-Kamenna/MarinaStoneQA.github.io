// №1 Возраст

// let age = prompt('Введите свой возраст');

// if (age <12)
// console.log('Вы ребенок-как вы тут чтото пишете?');

// else if(age <19>12)
// console.log('А ты то пиздюк');

// else if (age <61>18)
// console.log('А вы то уже подросли до взрослого!))');

// else if(age >60)
// console.log('А вы то уже пиздюк пенсионного возраста');


//№2 Символы

// let simb = + prompt ('Введите чимсло от 0 до 9');
// switch (simb) {
//     case 1:
//         console.log ('!')
//         break;
//         case 2:
//             console.log ('@')
//             break;
//             case 3:
//                 console.log ('#')
//                 break;
//                 case 4:
//                     console.log ('$')
//                     break;
//                     case 5:
//                         console.log ('%')
//                         break;
//                         case 6:
//                             console.log ('^')
//                             break;
//                             case 7:
//                                 console.log ('&')
//                                 break;
//                                 case 8:
//                                     console.log ('*')
//                                     break;
//                                     case 9:
//                                         console.log ('(')
//                                         break;
//                                         case 0:
//                                             console.log (')')
//                                             break;
// default:
//     console.log('Шо не понятно - от 0 до 9 сказано же!')                                          
// }


// №3 трехзначное число

// let num = prompt('Введите трехзначное число',0);
// if( num[0] == num[1] || num[0]==num[2] || num[2] == num[1])
// {
//     console.log('Тут есть одинковые цифры');
// }
// else
//     console.log('Тут нет одиниковых цифер');



//  №4 Высокосный год

//  let num = prompt(' Веедите год')
//  if (num % 400 ==0 || num % 4 == 0 && num % 100 !=0 ){
//     console.log('Год высокосный')
//  }else{
//    console.log('Год не высокосный')
//    };
    

// // №5 полиндром не знаю 




// №6 конвектор валют

// let usd = +prompt('Введите количство USD')
// const eur = 1.22;
// const uan = 0.036;
// const azn = 0.59;
// if (usd * eur, usd * uan, usd * azn) {
//     console.log(usd * eur, usd * uan, usd * azn)
// } else {
//     alert("Шо ты тут буквы пишешь-это же конвектор валют!");
//     result = undefined;
// }



//  №7 покупки
// let num = +prompt('Веедите сумму к оплате')
// if (num >200&& num <300) {
//     console.log('Сумма скидки 3 %')
// }
// else if  (num >300&& num >500) {
//     console.log('Сумма скидки 5 %')
// } 
// else if (num >500) {
//     console.log('Сумма скидки 7 %')
// }
// else{
//     console.log('Скидочки не будет!!!!')
// };


// №8 Окружность не знаю как сравнить эти формулы с  Math.PI

// let circle = prompt('Введите длину окружности')
// let square = prompt('Введите периметр квадрата')
// if 


// №9 3 вопроса 
    let sev = prompt('Сумма чисел 2+5? 1 - семь 2 - восемь 3 - три');
    let ten = prompt('Сумма чисел 3+7? 1 - десять 2 - девять 3 - восемь');
    let nine = prompt('Сумма чисел 5+4? 1 - восемь  2 - четыре 3 - девять');
    let score = 0;
    if (sev == 1)
        score += 2;
    if (ten == 1)
        score += 2;
    if (nine == 3)
        score += 2;
    alert('Вы набрали ' + score);



// №10 Запросить дату и вывести следущую за ней дату- но это я спионерила- как ее решить без всяких сплитов?

// let date = prompt('Введите дату в формате день-месяц-год');
//     date = date.split('-');
//     let oldDate = new Date(date[2], date[1]-1, date[0]); 
//     oldDate.setDate(oldDate.getDate()+1);
//     alert(oldDate);
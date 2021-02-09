// // Реализовать клас  PrintMachine  который состоит из:
// // размер шрифта
// // цвет шрифта 
// // семейство шрифта 
// // метод print(), который принимает текст и печатает его соответсвующим шрифтом
// // с помощью  document.write()
// // Создать обьект такого класса и продемонстрировать работу метода


// // class PrintMachine{
// //     constructor(_size, _color, _family) {
//         // this.size = _size;
//         // this.color =_color;
//         // this._family = _family;
// //     }
// //     print(str){
// //         let text = `<p style="font-size: ${this.size}px; 
// //         color:${this.color}; 
// //         font-family:${this.family};"> ${str} </p>`;
// //         document.write(text);
// //     }
// // }

// // let printText = new PrintMachine('30px', 'red', ' Arial');
// // let printText1 = new PrintMachine('18px', 'blue', 'Arial');


// //  Реализовать класс описывающий  новость 
// // (заголовок, текст, масив тегов, дата публикации)
// // В классе необходимо реализовать один метод   print б который выводит всю информацию через  document.write
// // Если с даты  публикации прошло менее недели


// class PrintNews{
//     constructor(title, text, tags, date){
//         this.title = title;
//         this.text = text;
//         this.tags = tags;
//         this.data = date;
//     }
//     print() {
//         let tags = this.tags;
//         let tags = '';

// for ( let i=0; i <this.tags.length; i++){
//     newTags += `<li> ${tags[i]} </li>`;
// }

// let now = new Date ()
// var date2 = new Date(this.date);
// var daysLag = Math.ceil(Math.abs(date2.getTime() - now.getTime() ) / (1000 * 3600 * 24));

// let dateMassage = this.date;
// if (daysLag ==1 ) {
//     dateMassage = 'Сегодня';
// } else if ( daysLag < 9) {
//     dateMassage = `${daysLag - 1} дней назад` ;

// }

//         let text = `<h2>${this.title}</h2>`;
//             text += `<p>${this.text}</p>`;
//             text += `<ul>${newTags}</ul>`
//             text += `<p>${dateMassage}</p>`;
//                 document.write(text);
//             }
//     }
//     let newa = new PrintNews ('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');


// /*   Это вариант Леши 

// class PrintNews {
//     constructor(title, text, tags, date) {
//         this.title = title;
//         this.text = text;
//         this.tags = tags;
//         this.date = date;
//     }
//     print() {

//         let tags = "<ul>"
//         for (let i = 0; i < this.tags.length; i++) {
//             tags = tags + <li> ${this.tags[i]} </li>
//         }
//         tags = tags + </ul>

//         let text = <h2>${this.title}</h2>
//         text = text += <p>${this.text}</p>
//         text = text + tags

//         let curDate = new Date()
//         let date = new Date(this.date);
//         let dateDiff = 0;
//         var options = {
//             year: 'numeric',
//             month: 'numeric',
//             day: 'numeric',
//             timezone: 'UTC'
//         }
//         if (curDate.getMonth() == date.getMonth()) {
//             dateDiff = curDate.getDate() - date.getDate();
//         }
//         if (dateDiff == 0) {
//             text = text + <p>Today</p>
//         } else if (dateDiff <= 7) {
//             text = text + <p>${dateDiff} дней назад</p>
//         } else {
//             text = text + <p>${date.toLocaleString("ru", options)}</p>
//         }
//         document.write(text)
//         console.log(dateDiff)

//     }
// }


// let c = new PrintNews("Заголовок", "Текст", ["Реал", "Барселона", "Бавария"], "2021-01-11");
// c.print();

// */

// // реализовать класс описывающий новостную ленту Класс долен содержать:
// // Массив новостей 
// // get свойство, которое возвращает количество новостей
// //вывод всех новостей на экран



// class makeNews extends PrintNews {
//     constructor(title, text, tags, date) {
//     super (title, text, tags, date);
//     }

//     print(){
//         super.print();
//     }
    

//     make() {
//         let news = {
//             title: this.title,
//             text: this.tags,
//             tags : this.tags,
//             date: this.date
//         };
//         return news;
//     }
//  }
// }

// let news1 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26').make();
// let news2 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');

 
// class NewsLetter {
//     constructor(news) {
//         this.news = this.news;
//     }
//     get countNews(){
//         return this.news.length;
//     }
// }
// getNews() {
//     let news = this.news;
//     for (let i = 0; i < news.length; i++) {
//         news[i].print()
//     }
// }
    


// //let newLett = new NewsLetter([new1, new2]);

// //console.log(newLett);

// //NewsLetter.countNews;



// //метод для добавления новости

// class makeNews extends PrintNews {
//     constructor(title, text, tags, date) {
//     super (title, text, tags, date);
//     }

//     print(){
//         super.print();
//     }
    

//     make() {
//         let news = {
//             title: this.title,
//             text: this.tags,
//             tags : this.tags,
//             date: this.date
//         };
//         return news;
//     }
//  }


// let news1 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');
// let news2 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');
// let news3 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');
// let news4 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');

 
// class NewsLetter {
//     constructor(news) {
//         this.news = news;
//     }
//     get countNews(){
//         return this.news.length;
//     }
// }
// getNews() {
//     let news = this.news;
//     for (let i = 0; i < news.length; i++) {
//         news[i].print();
//     }
// }

//  pushNews (freshNews) {
//      let news = this.news;
//      news.push(freshNews)
//  }
    
//  let newsLett = new NewsLetter([news1, news2]);

//  console.log(newsLett.countNews);

//  newsLett.getNews();

//  newsLett.pushNews(news3);
//  newsLett.pushNews(news4);



 //метод удаления новости


//  class makeNews extends PrintNews {
//     constructor (title, text, tags, date) {
//     super (title, text, tags, date);
//     }

//     print(){
//         super.print();
//     }
    

//     make() {
//         let news = {
//             title: this.title,
//             text: this.tags,
//             tags : this.tags,
//             date: this.date,
//         };
//         return news;
//     }
// }


// let news1 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');
// let news2 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');
// let news3 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');
// let news4 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');

 
// class NewsLetter {
//     constructor(news) {
//         this.news = news;
//     }

//     get countNews(){
//         return this.news.length;
//     }


// getNews() {
//     let news = this.news;
//     for (let i = 0; i < news.length; i++) {
//         news[i].print();
//     }
// }
// }

//  pushNews (freshNews) {
//      let news = this.news;
//      news.push(freshNews)
//  }

//  deleteNews (title) {
//     let news = this.news;
//     let index = news.indexOf(title);

//     for ( let i = 0; i< news.length; i++){
//         if (news[i].title == title){
//             index = 1;
//         }
//     }

//       if (index >= 0) {
//           news.splice(index, 1);
//       }
//  }

    
//  let newsLett = new NewsLetter([news1, news2,]);

//  console.log(newsLett.countNews);

//  newsLett.getNews();

//  newsLett.pushNews(news3);

//  newsLett.pushNews(news3.title);

//  deleteNews(title)


//  //метод для сортировки новостей по дате  11.40 - гдето там он оббясняет что мы берем  из всей каши

//  class makeNews extends PrintNews {
//     constructor (title, text, tags, date) {
//     super (title, text, tags, date);
//     }

//     print(){
//         super.print();
//     }
    

//     make() {
//         let news = {
//             title: this.title,
//             text: this.tags,
//             tags : this.tags,
//             date: this.date,
//         };
//         return news;
//     }
// }


// let news1 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');
// let news2 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');
// let news3 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');
// let news4 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');

 
// class NewsLetter {
//     constructor(news) {
//         this.news = news;
//     }

//     sortNews (){
//         let news = this.news;
//         news.sort(
//             function (a,b) {
//                 const date1 = new Date(a.date);
//                 const date2 = new Date(b.date);
//                 return   date2 - date1;
//             }
//     };
// }


//  let newsLett = new NewsLetter([news1, news2, news3, news4]);
//    newsLett.sortNews();



// возвращает массив новостей по тегу 



class PrintNews{
    constructor(title, text, tags, date){
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.data = date;
    }
    print() {
        let tags = this.tags;
        let tags = '';

for ( let i=0; i <this.tags.length; i++){
    newTags += `<li> ${tags[i]} </li>`;
}

let now = new Date ()
var date2 = new Date(this.date);
var daysLag = Math.ceil(Math.abs(date2.getTime() - now.getTime() ) / (1000 * 3600 * 24));

let dateMassage = this.date;
if (daysLag ==1 ) {
    dateMassage = 'Сегодня';
} else if ( daysLag < 9) {
    dateMassage = `${daysLag - 1} дней назад` ;

}

        let text = `<h2>${this.title}</h2>`;
            text += `<p>${this.text}</p>`;
            text += `<ul>${newTags}</ul>`
            text += `<p>${dateMassage}</p>`;
                document.write(text);
            }
    }




class makeNews extends PrintNews {
    constructor (title, text, tags, date) {
    super (title, text, tags, date);
    }

    print(){
        super.print();
    }
    

    make() {
        let news = {
            title: this.title,
            text: this.tags,
            tags : this.tags,
            date: this.date,
        };
        return news;
    }
}

let news1 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');
let news2 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');
let news3 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');
let news4 = new makeNews('заголовок', 'текст', ['спорт', 'победа', 'наши выиграли'],  '2021-01-26');

 
class NewsLetter {
    constructor(news) {
        this.news = news;
    }

    sortNews (){
        let news = this.news;
        news.sort(
            function (a,b) {
                const date1 = new Date(a.date);
                const date2 = new Date(b.date);
                return   date2 - date1;
            }
        );
    }


findNews(tag) {
    let news = this.news;
    let findedNews = [];
    for ( let i = 0; i< news.length; i++) {
        for ( let j= 0; j < news[i].tags.length; j++) {
            if (news [i].tags[j]== tag){
                findedNews = new [i];
        }
    }

return console.length(findedNews)
}

    
 let newsLett = new NewsLetter([news1, news2, news3, news4]);
   newsLett.sortNews();
   newsLett.findNews('победа');
   
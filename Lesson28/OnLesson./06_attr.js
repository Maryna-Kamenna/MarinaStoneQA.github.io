


// let p = document.createElement("p");
//     p.innerHTML = 'Some Text';


// let b =  document.createElement ("button");
//     p.innerHTML = 'Show/hide'
//     b.setAttribute("onclick", "toggle()");

//     document.querySelector("class1").append(p);

//     document.body.append(b);

// document.body.append(p, b);


// function toggle(){
//     let text = document.querySelector("p");
    // if (text.style.display === 'none')  {
    //     text.style.display = 'block';
    // } else {  
    // text.style.display = 'none';
    // }
// }
// //img.classList.add("newImage");


/*создать html-страницу с вкладками.
 С левой стороны страницы отображается не сколько вкладoк, по которым можно 
 переключатся.У каждой вкладки есть свое содержимое, но в один момент времени 
 отображается содержимое только активной вкладки4 */
 



//  <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

//     <div class="menu"> 
//         <ul>
//             <li><button onclick="showContent(1)"></button></li>
//             <li><button onclick="showContent(2)"></button></li>
//             <li><button onclick="showContent(3)"></button></li>
//         </ul>
//     </div>
//     <div class="content">
//         <div class="text1">Text 1</div>
//         <div class="text2">Text 2</div>
//         <div class="text3">Text 3</div>
//     </div>
//     <style>
//         body{display: flex;}
//         .menu {
//             flex: 1;
//         }
//         .content {
//             flex: 3;
//         }
//         .content div {
//             position: absolute;
//         }
//         .text2, .text3 {
//             display: none;
//         }
//     </style>
//     <script src="06_attr.js" > </script>
// </body>
// </html>


//  function showContent(num){

//      let texts =  document.querySelector(".content div");

//      for (let i = 0; i < texts.length ; i++ ){
//          texts [i].style.display = 'none'
//      }
    
//         texts[num - 1].style.display = 'block';
    
//     }





//Создать HTML страницу с progressbar  и кнопкой при нажатии на которую заполненость  progressbar увеличивается на 5%

function increas(){
    let barWidth = document.querySelector(".bar").clientWidth;
    let progress = document.querySelector(".progress");
    let progressWidth = progress.clientWidth;

    if (progressWidth < barWidth) {
        progress.style.width = progressWidth + barWidth * 0.05 + 'px';
    }else {
      progress.style.width = barWidth * 0.05 + 'px';
        }
}
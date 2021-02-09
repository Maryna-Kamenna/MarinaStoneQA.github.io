//  let playList = [
//   {
//    author: "LED ZEPPELIN",
//    song:"STAIRWAY TO HEAVEN"
//   },
//   {
//    author: "QUEEN", 
//    song:"BOHEMIAN RHAPSODY"
//   }, 
//   {
//    author: "LYNYRD SKYNYRD",
//    song:"FREE BIRD"
//   },
//   {
//    author: "DEEP PURPLE",
//    song:"SMOKE ON THE WATER"
//   },
//   {
//    author: "JIMI HENDRIX",
//    song:"ALL ALONG THE WATCHTOWER"
//   },
//   {
//    author: "AC/DC",
//    song:"BACK IN BLACK"
//   },
//   {
//    author: "QUEEN",
//    song:"WE WILL ROCK YOU"
//   },
//   {
//    author: "METALLICA",
//    song:"ENTER SANDMAN"
//   }
//   ];
//   let list = document.getElementsByTagName("body")[0];
//   let numList = document.createElement('ol');
//   list.append(numList);

//   for(let i in playList){
//       let li = document.createElement('li');
//       li.textContent = ' author ' + playList[i].author + ' song ' + playList[i].song;
//       numList.append(li);
//   }
  

  // 3. Создать HTML-страницу со светофором и кнопкой, 
  // которая переключает светофор на следующий цвет.

  let count = 0;
  document.querySelector('button').onclick = function(){
      count++;
      if(count==4){
          count=1;
      }
      nextLight();
  }
  
      function nextLight(){
          if(count == 1){
            document.querySelector('.red').style.backgroundColor = 'red';
            document.querySelector('.orange').style.backgroundColor = 'grey';
            document.querySelector('.green').style.backgroundColor = 'grey';
          } else if(count == 2){
              document.querySelector('.red').style.backgroundColor = 'grey';
              document.querySelector('.orange').style.backgroundColor = 'orange';
              document.querySelector('.green').style.backgroundColor = 'grey';
          } else {
              document.querySelector('.red').style.backgroundColor = 'grey';
              document.querySelector('.orange').style.backgroundColor = 'grey';
              document.querySelector('.green').style.backgroundColor = 'green';
          }
          
      }

  
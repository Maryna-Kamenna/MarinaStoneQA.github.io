let playList = [

  {
   author: "LED ZEPPELIN",
   song:"STAIRWAY TO HEAVEN"
  },
  {
   author: "QUEEN", 
   song:"BOHEMIAN RHAPSODY"
  }, 
  {
   author: "LYNYRD SKYNYRD",
   song:"FREE BIRD"
  },
  {
   author: "DEEP PURPLE",
   song:"SMOKE ON THE WATER"
  },
  {
   author: "JIMI HENDRIX",
   song:"ALL ALONG THE WATCHTOWER"
  },
  {
   author: "AC/DC",
   song:"BACK IN BLACK"
  },
  {
   author: "QUEEN",
   song:"WE WILL ROCK YOU"
  },
  {
   author: "METALLICA",
   song:"ENTER SANDMAN"
  }
  ];
  let list = document.getElementsByTagName("body")[0];
  let numList = document.createElement('ol');
  list.append(numList);
  for(let i in playList){
      let li = document.createElement('li');
      li.textContent = 'Song ' + playList[i].song + ' of author ' + playList[i].author;
      numList.append(li);
  }
  
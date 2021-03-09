const container = document.querySelector('.container');
container.innerHTML = '<p> Interesting facking  text </p>'


import './styles/main.scss'

function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
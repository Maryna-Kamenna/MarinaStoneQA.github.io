//  Функция для вывода на экран информации об автомобиле;

let mashina = {
    production: "Toyota",
    model: "Rav",
    year: "2018",
    avgSpeed: 150,

    show: function () {
      alert("production - " + this.production + ", " + "model - " + this.model + ", " + "year - " + this.year +", " +"avg speed - " +this.avgSpeed);
    },
  };

  mashina.show();
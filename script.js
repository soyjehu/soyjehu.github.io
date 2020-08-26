var removeOpenClass = function (event) {
  document.getElementById('bigimagecontainer').classList.remove('open');
}

var CARTONES = [
  'https://soyjehu.github.io/assets/cartones/acupuntura-derecho.jpg',
  'https://soyjehu.github.io/assets/cartones/brazos-peludos.jpg',
  'https://soyjehu.github.io/assets/cartones/desayuno.jpg',
  'https://soyjehu.github.io/assets/cartones/fila.jpg',
];

var HISTORIETAS = [
  'https://soyjehu.github.io/assets/historietas/Comic_Banarse.jpg',
  'https://soyjehu.github.io/assets/historietas/Comic_Dolores.jpg',
  'https://soyjehu.github.io/assets/historietas/Comic_Domingo_Apocaliptico.jpg',
  'https://soyjehu.github.io/assets/historietas/Comic_Domingo_Celular.jpg',
  'https://soyjehu.github.io/assets/historietas/Comic_Domingo_Gemelo.jpg',
  'https://soyjehu.github.io/assets/historietas/Comic_Domingo_Mosqueado.jpg',
  'https://soyjehu.github.io/assets/historietas/Comic_Martes.jpg',
  'https://soyjehu.github.io/assets/historietas/Comic_Pajaro_Negro.jpg',
  'https://soyjehu.github.io/assets/historietas/Comic_Transgenico.jpg',
  'https://soyjehu.github.io/assets/historietas/El_hombre_cabeza_de_lavadora.jpg',
];

var ILUSTRACIONES = [
  'https://soyjehu.github.io/assets/ilustraciones/autorretrato.jpg',
  'https://soyjehu.github.io/assets/ilustraciones/carro.jpg',
  'https://soyjehu.github.io/assets/ilustraciones/garza_asada.jpg',
  'https://soyjehu.github.io/assets/ilustraciones/gato_estirandose.jpg',
  'https://soyjehu.github.io/assets/ilustraciones/jiustonenvivo.jpg',
  'https://soyjehu.github.io/assets/ilustraciones/monje.jpg',
  'https://soyjehu.github.io/assets/ilustraciones/sabila.jpg',
  'https://soyjehu.github.io/assets/ilustraciones/taquitos_con_marco.jpg',
  'https://soyjehu.github.io/assets/ilustraciones/tuna_no.jpg',
  'https://soyjehu.github.io/assets/ilustraciones/yo_cuarentena.jpg',
];

var LIBROS = [
  'https://soyjehu.github.io/assets/libroscompletos/ComediantesDeprimidos.png',
  'https://soyjehu.github.io/assets/libroscompletos/FuiArrastradoDebajoDeLaCamaPorUnDemonio-Jehu.png',
  'https://soyjehu.github.io/assets/libroscompletos/La-luz-que-no-ilumina-todo-Jehu-1.png',
];

var loadArray = function (datasetArray, option) {
  datasetArray.forEach((element, key) => {
    var id = option + (key + 1);
    var _img = document.getElementById(id);
    var newImg = new Image;
    newImg.onload = function () {
      _img.style.backgroundImage = "url(" + this.src + ")";
      _img.classList.remove("loading");
    }
    newImg.src = element;
  });
};

var loadSection = function (option) {
  switch (option) {
    case 'cartones':
      loadArray(CARTONES, option);
      break;
    case 'historietas':
      loadArray(HISTORIETAS, option);
      break;
    case 'ilustraciones':
      loadArray(ILUSTRACIONES, option);
      break;
    case 'libros':
      loadArray(LIBROS, option);
      break;
    default:
      break;
  }
}


window.onload = function () {
  var BTN_CARTONES = document.getElementById('cartonesButton');
  var BTN_HISTORIETAS = document.getElementById('historietasButton');
  var BTN_ILUSTRACIONES = document.getElementById('ilustracionesButton');
  var BTN_LIBROS = document.getElementById('librosButton');

  var BACK_CARTONES = document.getElementById('cartonesBack');
  var BACK_HISTORIETAS = document.getElementById('historietasBack');
  var BACK_ILUSTRACIONES = document.getElementById('ilustracionesBack');
  var BACK_LIBROS = document.getElementById('librosBack');

  var changeRoute = function (event) {
    loadSection(event.target.dataset.name);
    document.getElementById(event.target.dataset.name).classList.add("active");
  }

  var goBackToHome = function (event) {
    document.getElementById(event.target.dataset.name).classList.remove("active");
  }

  var imagesContainer = document.getElementsByClassName("maximize");
  var booksContainer = document.getElementsByClassName("download");

  document.getElementById('bigimagecontainer').addEventListener("click", closeImage);

  var closeImage = function (event) {
    document.getElementById('bigimagecontainer').classList.remove(event.target);
  }

  var maximizeImage = function (event) {
    document.getElementById('bigimagecontainer').classList.add('open');
    document.getElementById('maximizeThisImagePlease').style.backgroundImage = 'url(' + event.target.dataset.imager + ')';
  };

  for (var i = 0; i < imagesContainer.length; i++) {
    imagesContainer[i].addEventListener('click', maximizeImage, false);
  }

  var downloadBook = function (event) {
    window.open(event.target.dataset.book, '_blank');
  };

  for (var i = 0; i < booksContainer.length; i++) {
    booksContainer[i].addEventListener('click', downloadBook, false);
  }

  BTN_CARTONES.addEventListener("click", changeRoute);
  BTN_HISTORIETAS.addEventListener("click", changeRoute);
  BTN_ILUSTRACIONES.addEventListener("click", changeRoute);
  BTN_LIBROS.addEventListener("click", changeRoute);

  BACK_CARTONES.addEventListener("click", goBackToHome);
  BACK_HISTORIETAS.addEventListener("click", goBackToHome);
  BACK_ILUSTRACIONES.addEventListener("click", goBackToHome);
  BACK_LIBROS.addEventListener("click", goBackToHome);
};


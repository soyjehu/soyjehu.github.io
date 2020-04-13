var removeOpenClass = function (event) {
  document.getElementById('bigimagecontainer').classList.remove('open');
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
    document.getElementById(event.target.dataset.name).classList.add("active");
  }

  var goBackToHome = function (event) {
    document.getElementById(event.target.dataset.name).classList.remove("active");
  }

  var imagesContainer = document.getElementsByClassName("maximize");
  var booksContainer = document.getElementsByClassName("download");

  document.getElementById('bigimagecontainer').addEventListener("click", closeImage);

  var closeImage = function (event) {
    console.closeImage('yea');
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


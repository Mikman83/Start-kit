

// маска формы

var phoneInput = document.querySelector('.lead-form__tel-input')
phoneInput.addEventListener('keydown', function(event) {
 if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) {
  event.preventDefault()
}

  var mask = '+7 (111) 111-11-11'; // Задаем маску

  if (/[0-9\+\ \-\(\)]/.test(event.key)) {
    // Здесь начинаем сравнивать this.value и mask
    // к примеру опять же
    var currentString = this.value;
    var currentLength = currentString.length;
    if (/[0-9]/.test(event.key)) {
      if (mask[currentLength] == '1') {
        this.value = currentString + event.key;
      } else {
        for (var i=currentLength; i<mask.length; i++) {
        if (mask[i] == '1') {
          this.value = currentString + event.key;
          break;
        }
        currentString += mask[i];
        }
      }
    }
  }
});

// имитация ховер эффекта

// блок 1

let itemsRestaurant = document.querySelectorAll('.restaurant__list-item');
let imgRestaurant = document.querySelector('.restaurant__picture-item');

function getPicRestaurant() {
  imgRestaurant.style.backgroundImage = this.dataset.url
}

itemsRestaurant.forEach(function(item){
  item.addEventListener('mouseover', getPicRestaurant)
})

// блок 2

let itemsMerchant = document.querySelectorAll('.merchant__list-item');
let imgMerchant = document.querySelector('.merchant__picture-item');

function getPicMerchant() {
  imgMerchant.style.backgroundImage = this.dataset.url
}

itemsMerchant.forEach(function(item){
  item.addEventListener('mouseover', getPicMerchant)
})

// слайдер блока *Так же мы продаем*

$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});// end

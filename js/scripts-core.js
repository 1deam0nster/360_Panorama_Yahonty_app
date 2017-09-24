// // Add target="_blank" when user opens external link
// (function() {
//   var a = document.querySelectorAll('a');
//   for (var i = 0; i < a.length; i++) {
//     if (a[i].host !== location.host) {
//       a[i].setAttribute('target', '_blank');
//       a[i].setAttribute('rel', 'noopener noreferrer');
//     }
//   }
// }());

// var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// },

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//     modal.style.display = "none";
// },

// var viewer.img = function() {
//   alert("test");
// },

// Photos modal menu 
function open_img1() {
  $.fancybox.open([
    {
      src  : 'https://c1.staticflickr.com/9/8148/29324593462_abebaddc38_k.jpg',
      opts : {
        caption : 'First caption',
        thumb   : 'https://c1.staticflickr.com/9/8148/29324593462_f890687b7a_m.jpg'
      }
    },
    {
      src  : 'https://c2.staticflickr.com/6/5499/30972532232_051e1dc57e_h.jpg',
      opts : {
        caption : 'Second caption',
        thumb   : 'https://c2.staticflickr.com/6/5499/30972532232_e9a298a0c5_m.jpg'
      }
    }
  ], {
    loop : false
  });
}



function openModal() {
  document.getElementById('myModal').style.display = "block";    
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
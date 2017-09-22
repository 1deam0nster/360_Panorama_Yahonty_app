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

// // Sub-menu
// (function($) {
// 	$.fn.menumaker = function(options) {  
// 	 var cssmenu = $(this), settings = $.extend({
// 	   format: "dropdown",
// 	   sticky: false
// 	 }, options);
// 	 return this.each(function() {
// 	   $(this).find(".button").on('click', function(){
// 		 $(this).toggleClass('menu-opened');
// 		 var mainmenu = $(this).next('ul');
// 		 if (mainmenu.hasClass('open')) { 
// 		   mainmenu.slideToggle().removeClass('open');
// 		 }
// 		 else {
// 		   mainmenu.slideToggle().addClass('open');
// 		   if (settings.format === "dropdown") {
// 			 mainmenu.find('ul').show();
// 		   }
// 		 }
// 	   });
// 	   cssmenu.find('li ul').parent().addClass('has-sub');
// 	multiTg = function() {
// 		 cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
// 		 cssmenu.find('.submenu-button').on('click', function() {
// 		   $(this).toggleClass('submenu-opened');
// 		   if ($(this).siblings('ul').hasClass('open')) {
// 			 $(this).siblings('ul').removeClass('open').slideToggle();
// 		   }
// 		   else {
// 			 $(this).siblings('ul').addClass('open').slideToggle();
// 		   }
// 		 });
// 	   };
// 	   if (settings.format === 'multitoggle') multiTg();
// 	   else cssmenu.addClass('dropdown');
// 	   if (settings.sticky === true) cssmenu.css('position', 'fixed');
// 	resizeFix = function() {
// 	  var mediasize = 1000;
// 		 if ($( window ).width() > mediasize) {
// 		   cssmenu.find('ul').show();
// 		 }
// 		 if ($(window).width() <= mediasize) {
// 		   cssmenu.find('ul').hide().removeClass('open');
// 		 }
// 	   };
// 	   resizeFix();
// 	   return $(window).on('resize', resizeFix);
// 	 });
// 	  };
// 	})(jQuery);
	
// 	(function($){
// 	$(document).ready(function(){
// 	$("#cssmenu").menumaker({
// 	   format: "multitoggle"
// 	});
// 	});
// 	})(jQuery);
	
AOS.init();
/*----------Hrader Menu Bar----------*/
$(window).on("load", function () {
	$("#header .nav-menu ul li").on("click", function () {
	  $("#header .nav-menu ul li").removeClass("nav-item-active");
	  $(this).addClass("nav-item-active");
	});
  });


/*---------toggler icon----------*/
var header = document.getElementById("header");
var rsid = document.getElementById("rsId");
var menuid = document.getElementById("menuId");
var crossid = document.getElementById("crossId");
var mainid = document.getElementById("mainId");
function togglerMenu() {
  header.style.left = "0";
  rsid.style.marginLeft = "300px";
  menuid.style.display = "none";
  crossid.style.display = "block";
  //mainid.style.marginLeft="300px";
}
function togglerCross() {
  header.style.left = "-300px";
  rsid.style.transition = "1s";
  rsid.style.marginLeft = "0px";
  menuid.style.display = "block";
  crossid.style.display = "none";
  //mainid.style.marginLeft="0px";
}
/*---------typing-----------*/
if ($(".typed").length) {
  var typed_strings = $(".typed").data("typed-items");
  typed_strings = typed_strings.split(",");
  new Typed(".typed", {
    strings: typed_strings,
    typeSpeed: 150,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
  });
}

/*-------Testimonials carousel------
$(".testimoni-carousel .owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 30,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    650: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
-----------------------------*/
/*-------------Certificate-----------*/
$(window).on("load", function () {
  var portfolio_all_items = $(".certificate-all-items").isotope({});
  $(".certificate-nav-items li").on("click", function () {
    $(".certificate-nav-items li").removeClass("certificate-filter-active");
    $(this).addClass("certificate-filter-active");

    portfolio_all_items.isotope({
      filter: $(this).data("filter"),
    });
  });
});
AOS.init();

$(document).ready(function () {
  $(".venobox").venobox();
});
/*--------Scroll Top----------*/
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#scroll-top").fadeIn();
  } else {
    $("#scroll-top").fadeOut();
  }
});
$("#scroll-top").click(function () {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});

$(document).ready(function(){
  var chart = new CanvasJS.Chart("chartContainer", {
  	animationEnabled: true,
  	title: {
  		text: "Our Company Achivment"
  	},
  	data: [{
  		type: "pie",
  		startAngle: 300,
  		yValueFormatString: "##0.00\"%\"",
  		indexLabel: "{label} {y}",
  		dataPoints: [
  			{y: 79.45, label: "Google"},
  			{y: 7.31, label: "Bing"},
  			{y: 7.06, label: "Baidu"},
  			{y: 4.91, label: "Yahoo"},
  			{y: 1.26, label: "Others"}
  		]
  	}]
  });
  chart.render();

  $('.gearcheck').on('click' , function(){
     $('.coloroption').slideToggle(1000);
  });
  $('.coloroption ul li:first-of-type').on('click' , function(){

  });

// Change Theme Color On click
$('.coloroption ul li').eq(0).css("background-color" , "#f00");

$('.coloroption ul li').on("click" , function(){
var y =   $(this).data('value') ;
$("link[href*='theme']").attr("href" , y);
});
// Start Scroll Top
  $(window).on("scroll" , function(){
     if($(this).scrollTop() >= $('.features').offset().top ){
      $('#scroll-top').fadeIn(500);
      //console.log($(this).scrollTop());
      // console.log($('.features').offset().top);
    }
    else {
      $('#scroll-top').fadeOut(500);
    }
  });
// onClick
$('#scroll-top').on('click' , (function(){
  $('body, html').animate({
    scrollTop : 0,

  } , 2000);
}));
new WOW().init();
 $("body").niceScroll({
cursorcolor:"#e74c3c",
cursorwidth:"10px",
});

});
// Loading Page
$(window).on('load' ,(function(){
  $('.loading-overlay .spinner').delay(1000).fadeOut(1000 , function(){
    $('.loading-overlay').fadeOut(5000)
    $('body').css("overflow" , "auto");

  });

$(this).remove();
}));

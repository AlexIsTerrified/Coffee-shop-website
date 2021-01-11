$(window).on("load", function(){
	$(".owl-carousel").owlCarousel({
			center:true,
			loop: true,
			margin: 30,
			stagePadding: 0,
			nav: true,
			navText:['<','>'],
			responsive:{
				0:{
					items:1
				},
				400:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
	
	$(".window-loader").fadeOut("slow");
	
	if(document.getElementById('visits') != null){
		const obj = document.getElementById('visits');
		animateValue(obj, 0, parseInt(obj.getAttribute('data-value')), 3000);

		const obj2 = document.getElementById('subs');
		animateValue(obj2, 0, parseInt(obj2.getAttribute('data-value')), 4000);
		
		const obj3 = document.getElementById('shares');
		animateValue(obj3, 0, parseInt(obj3.getAttribute('data-value')), 3000);
	}
	
	if(window.innerWidth <= 840){
		navShow()
	}
	
	var darkmode = document.getElementById('darkmode');
	darkmode.addEventListener( 'change',function(){
		if(darkmode.checked){
			$('.main-body').addClass('dark');
		}else{
			$('.main-body').removeClass('dark');
		}
	});
});

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function navShow(){
	var nav = $('nav');
	if(nav.hasClass('show')){
		nav.removeClass('show');
	}else{
		nav.addClass('show');
	}
}
$('#menu').click(function(){
	navShow()
});
/* SUPERFISH DROPDOWN MENU */
$(document).ready(function() { 
	$('ul#navigation').superfish(); 
	$('ul#top-navigation').superfish();
}); 

/* TABS */
$(document).ready(function() { 
	$("ul.tabs").tabs("> .tab-content");
	$(".tabs-wrapper ul.tabs").tabs("> .tab-content");	
}); 

/* TOGGLE & GAMEINFO */
$(document).ready(function() { 
	
	$(".toggle-content").hide(); 

	$("h5.toggle").toggle(function(){
		$(this).addClass("active");
		}, function () {
		$(this).removeClass("active");
	});

	$("h5.toggle").click(function(){
		$(this).next(".toggle-content").slideToggle();
	});
	
	$(".gameinfo-content").hide(); 

	$("h5.gameinfo").toggle(function(){
		$(this).addClass("active");
		}, function () {
		$(this).removeClass("active");
	});

	$("h5.gameinfo").click(function(){
		$(this).next(".gameinfo-content").slideToggle();
	});
	
});


/* SCORE SETTINGS */
$(function() {

	$('.score-bg').animate({width: 'toggle'},{duration: 2000});

});

/* BACK TO TOP */
$(function() {
	$('#back-top a').click(function(){
			
		$('html, body').animate({scrollTop: '0'}, 1000);
			
		return false;
	});
});

/* FANCYBOX */
$(document).ready(function() {
	
	$("a.grouped_elements").fancybox({
			'transitionIn'		: 'fade',
			'transitionOut'		: 'none',
			'titlePosition' 	: 'over',
			'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
});

$(document).ready(function() {	
	
	//Calculate the total width - sum of all sub-panels width
	//Width is generated according to the width of #mask * total of sub-panels
	$('#panel').width(parseInt($('#mask').width() * $('#panel div').length));
	
	//Set the sub-panel width according to the #mask width (width of #mask and sub-panel must be same)
	$('#panel div').width($('#mask').width());
	
	//Get all the links with rel as panel
	$('a[rel=panel]').click(function () {
	
		//Get the height of the sub-panel
		var panelheight = $($(this).attr('href')).height();
		
		//Set class for the selected item
		$('a[rel=panel]').removeClass('selected');
		$(this).addClass('selected');
		
		//Resize the height
		$('#mask').animate({'height':panelheight},{queue:false, duration:500});			
		
		//Scroll to the correct panel, the panel id is grabbed from the href attribute of the anchor
		$('#mask').scrollTo($(this).attr('href'), 800);		
		
		//Discard the link default behavior
		return false;
	});
	
});
$(document).ready(function(){

	$('#basicuse').jflickrfeed({
		limit: 14,
		qstrings: {
			id: '76830659@N05'
		},
		itemTemplate: '<div class="span4 flicker"><p><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" class="flicker"/></a></p></div>'
	});
	
});

$(document).ready(function(){

	$('#basicuse').jflickrfeed({
		limit: 14,
		qstrings: {
			id: '37304598@N02'
		},
		itemTemplate: '<div class="span4"><p><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" class="flicker"/></a></p></div>'
	});
	
});

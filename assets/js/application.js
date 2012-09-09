APPLICATION = {
  TABS: ['/', 'about_us', 'contact_us', 'donate', 'our_projects'],
  currentTab: function(){
    var tabs;
    var path = window.location.pathname; 
    for(tabs = 0;tabs<APPLICATION.TABS.length;tabs++){
      if( path.match(APPLICATION.TABS[tabs]) ){
         $("a[uri='"+ APPLICATION.TABS[tabs] + "']").addClass('white');
         break;
      }  
    }  
  }
}

$(function(){
  APPLICATION.currentTab();
  $("#slides").slides({
		preload: true,
		play:5000,
		pause: 5000,
		slideSpeed: 1500,
		crossfade:true,
		generateNextPrev: false,
		generatePagination: false,
		preloadImage: 'assets/img/loadimage.gif',
		generateNextPrev: false,
		generatePagination: false,
 }); 
});

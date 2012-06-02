APPLICATION = {
  TABS: ['/', 'about_us', 'contact_us', 'donate', 'our_projects'],
  currentTab: function(){
    var tabs;
    var path = window.location.pathname; 
    for(tabs = 0;tabs<APPLICATION.TABS.length;tabs++){
      if( path.match(APPLICATION.TABS[tabs]) ){
         $("a[uri="+ APPLICATION.TABS[tabs] + "]").addClass('white');
         break;
      }  
    }  
  }
}
$(function(){
  APPLICATION.currentTab();
})

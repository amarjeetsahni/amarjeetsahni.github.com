$(document).ready(function(){

  $('#SliderName_2').jflickrfeed({
    limit: 14,
    qstrings: {
      id: '76830659@N05'
    },
    itemTemplate: '<img src="{{image_b}}" alt="{{title}}" class="flicker"/>'
    
  }, function(data){
     effectsDemo2 = 'rain,stairs,fade';
  var demoSlider_2 = Sliderman.slider({container: 'SliderName_2', width: 700, height: 450, effects: effectsDemo2,
    display: {
      autoplay: 3000,
      loading: {background: '#000000', opacity: 0.5, image: '/assets/img/loading.gif'},
      buttons: {hide: true, opacity: 1, prev: {className: 'SliderNamePrev_2', label: ''}, next: {className: 'SliderNameNext_2', label: ''}},
      description: {hide: true, background: '#000000', opacity: 0.4, height: 50, position: 'bottom'}
    }
  });   
  });
  //<div class="span4 flicker"><p><a href="{{image_b}}"><img src="{{image_m}}" alt="{{title}}" class="flicker"/></a></p></div>
  
 /*
  
*/

});


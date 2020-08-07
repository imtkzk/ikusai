
/*  header
-------------------------------------------------------*/

var header = document.getElementById('header');
var submenu = document.getElementById('navi-submenu-head');
header.onclick = function() {
  this.classList.toggle("is-open");
  document.getElementById("navigation").classList.toggle("is-open");
  document.getElementById("toggle").classList.toggle("is-active");
};


/*  page top
-------------------------------------------------------*/

var px_change = 1;
window.addEventListener('scroll', function(e) {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if ( scrollTop > px_change ) {
    document.getElementById( "pagetop" ).classList.add( "is-show" );
  } else {
    document.getElementById( "pagetop" ).classList.remove( "is-show" );
  }
});


/*  tab menu
-------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function(){
  const tabs = document.getElementsByClassName('available-tab');
  for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch);
  }
  function tabSwitch(){
    document.getElementsByClassName('is-active')[0].classList.remove('is-active');
    this.classList.add('is-active');
    document.getElementsByClassName('is-show')[0].classList.remove('is-show');
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName('available-box')[index].classList.add('is-show');
  };
});


/*  MoveTo
-------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function(){
  const moveTo = new MoveTo();
  const triggers = document.getElementsByClassName('pagetop');
  for (var i = 0; i < triggers.length; i++) {
    moveTo.registerTrigger(triggers[i]);
  }
});

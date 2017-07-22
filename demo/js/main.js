$(document).ready(function(){
    $("#menu").click(function(){
      if ($("#navright").css("height")=="0px") {
        $("#navright").css("height", "150px");
        $("#header").css("height", "150px");
    }
        else{
          $("#navright").css("height", "0px");
          $("#header").css("height", "auto");
        };
    });
});

window.onscroll = function () 
{
    // var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? 
    //                 document.documentElement.scrollTop : document.body.scrollTop);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.getElementById('header').style;
    if(scrollTop >= 200)
    {
    	header.paddingTop = "0";
    	header.backgroundColor = "rgba(0,0,0,.7)";
    }
    else{
    	header.paddingTop = "20px";
    	header.backgroundColor = "rgba(0,0,0,0)";
    }
}



$.fn.moveIt = function(){
  var $els = $(this);
  var $window = $(window);
  var scrollPos = $window.scrollTop();
  
  $window.on('scroll', function(){
    scrollPos = $window.scrollTop();
    $els.each(moveEl);
  });
  
  function moveEl(){
    var $this = $(this);
    var scrollSpeed = parseInt($this.data('scroll-speed'));
    var elPos = scrollPos / scrollSpeed;
    
    $this.css('margin-top', '-' + elPos + 'px');
  }
}

$(function(){
  $('[data-scroll-speed]').moveIt();
});

    
function scrollToElement(theElement) {
    if (typeof theElement === "string") theElement = document.getElementById(theElement);
 
    var selectedPosX = 0;
    var selectedPosY = 0;
 
    while (theElement != null) {
        selectedPosX += theElement.offsetLeft;
        selectedPosY += theElement.offsetTop;
        theElement = theElement.offsetParent;
    }
 
    window.scrollTo(selectedPosX, selectedPosY);
}
var that;
var label;
function expandin(num) {
  if (num==1) {
    that = document.getElementById("inpyt" + num).style;
    that.transform = "rotateX(0deg)";
    document.getElementById("inpytone").focus();
    label = document.getElementById("lab" + num).style;
    label.borderTop = "0px solid #007688";
  }
}

// // MODAL
function modal(){
   $("#modal").css("display", "block");
   $("body").css("overflow-y", "hidden");
}
function closemodal(){
   $("#modal").css("display", "none");
   $("body").css("overflow-y", "scroll");
}
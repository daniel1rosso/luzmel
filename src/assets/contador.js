import * as gsap from 'gsap';

function count(){
  var counter = { var: 0 };
  gsap.TweenMax.to(counter, 3, {
    var: 100, 
    onUpdate: function () {
      var number = Math.ceil(counter.var);
      $('.counter').html(number);
      if(number === counter.var){ count.kill(); }
    },
    onComplete: function(){
      count();
    },    
    ease:gsap.Circ.easeOut
  });
}

count();
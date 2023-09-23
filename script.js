document.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var layers = document.querySelectorAll('.layer');
  
  // Define different speed for each layer
  var speeds = [0, 0.08, 0.1, 0.15];
  
  for (var i = 0; i < layers.length; i++) {
    var speed = speeds[i];
    var offset = -scrollTop * speed;
    layers[i].style.transform = `translateY(${offset}px)`;
  }
});

// document.addEventListener('scroll', function() {
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   var layers = document.querySelectorAll('.pet');
  
//   for (var i = 0; i < layers.length; i++) {
//     var speed = 0.18;
//     var offset = -scrollTop * speed;
//     layers[i].style.transform = `translateY(${offset}px)`;
//   }
// });

// prevent "rubber band" scrolling effect
document.addEventListener('wheel', function(event) {
  if (event.deltaY < 0 && window.scrollY <= 0) {
    event.preventDefault();
  } else if (event.deltaY > 0 && window.scrollY + window.innerHeight >= document.body.scrollHeight) {
    event.preventDefault();
  }
}, { passive: false });

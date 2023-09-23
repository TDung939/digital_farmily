let lastX = 140;
let targetX = 0;
let speed = 3;

function moveObject() {
  const object = document.getElementById('hai');
  const direction = targetX > lastX ? 'right' : 'left';

  object.style.transform = direction === 'right' ? 'scaleX(1)' : 'scaleX(-1)';

  if (Math.abs(targetX - lastX) > speed) {
    object.classList.remove('hai_idle');
    object.classList.add('hai_moving');

    lastX += (targetX - lastX > 0 ? speed : -speed);
    object.style.left = lastX + 'px';
    requestAnimationFrame(moveObject);
  } else {
    object.classList.remove('hai_moving');
    object.classList.add('hai_idle');
  }
}

document.addEventListener('click', function(event) {
  targetX = event.clientX;
  requestAnimationFrame(moveObject);
});

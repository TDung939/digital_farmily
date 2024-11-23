
let speed = 3;

const objects = [
  // { el: document.getElementById('oe'), lastX: 60, targetX: 0, speed: 6},
  { el: document.getElementById('bong'), lastX: 940, targetX: 0, speed: 4},
  { el: document.getElementById('hai'), lastX: 640, targetX: 0, speed: 2},
  { el: document.getElementById('bep'), lastX: 230, targetX: 0, speed: 3}
];

function moveObject(obj) {
  const direction = obj.targetX > obj.lastX ? 'right' : 'left';

  obj.el.style.transform = direction === 'right' ? 'scaleX(1)' : 'scaleX(-1)';

  if (Math.abs(obj.targetX - obj.lastX) > obj.speed) {
    obj.el.classList.remove(`${obj.el.id}_idle`);
    obj.el.classList.add(`${obj.el.id}_moving`);

    obj.lastX += (obj.targetX - obj.lastX > 0 ? obj.speed : -obj.speed);
    obj.el.style.left = obj.lastX + 'px';
    requestAnimationFrame(() => moveObject(obj));
  } else {
    obj.el.classList.remove(`${obj.el.id}_moving`);
    obj.el.classList.add(`${obj.el.id}_idle`);
  }
}

document.addEventListener('click', function(event) {
  const targetX = event.clientX;

  objects.forEach((obj) => {
    obj.targetX = targetX;
    requestAnimationFrame(() => moveObject(obj));
  });
});
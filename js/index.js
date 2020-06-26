let diff = 0;
let ticking = false;

const wheelEvent = 'onwheel' in document.createElement("div") ? 'wheel' : 'mousewheel';

const list = document.querySelector('.slide-ul');

function doSomething(diff) {
  list.scrollLeft += (diff);
}

list.addEventListener('wheel', function(e) {
  diff = e.deltaY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(diff);
      ticking = false;
    });
  }
  ticking = true;
}, { passive: true });

document.querySelector('button').addEventListener('click', function () { document.body.classList.toggle('tapir')}, null);
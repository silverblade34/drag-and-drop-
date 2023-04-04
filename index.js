const containers = document.querySelectorAll('.group-tarj');
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('dragend', dragend);
});

function dragstart() {
  this.classList.add('dragging');
}

function dragend() {
  this.classList.remove('dragging');
}

containers.forEach(container => {
  container.addEventListener('dragover', dragover);
  container.addEventListener('drop', drop);
});

function dragover(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function drop() {
  const card = document.querySelector('.dragging');
  this.appendChild(card);
  this.classList.remove('hovered');
}

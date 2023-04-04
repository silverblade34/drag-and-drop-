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



function prueba(){
    console.log("---------------1")
    var tour = {
        id: "mi-guia",
        steps: [
            {
                title: "Paso 1",
                content: "Este es el primer paso de la guía",
                target: "paso1",
                placement: "right",
                xOffset: 20,
                arrowOffset: 60,
                zindex: 999
            },
            {
                title: "Paso 2",
                content: "Este es el segundo paso de la guía",
                target: "paso2",
                placement: "bottom",
                xOffset: 20,
                arrowOffset: 60,
                zindex: 999
            }
        ]
    };
    console.log("---------------2")
    hopscotch.startTour(tour);
    console.log("---------------3")
}
function startGuide() {
    var tour = {
        id: "mi-guia",
        steps: [
            {
                title: "Paso 1",
                content: "Este es el primer paso de la guía",
                target: "paso1",
                placement: "right",
                xOffset: 20,
                arrowOffset: 60,
                zindex: 999
            },
            {
                title: "Paso 2",
                content: "Este es el segundo paso de la guía",
                target: "paso2",
                placement: "bottom",
                xOffset: 20,
                arrowOffset: 60,
                zindex: 999
            }
        ]
    };

    hopscotch.startTour(tour);
}


const size = 64;
genDivs(size);

function genDivs(v) {
    var e = document.querySelector('.container');
    for (var i = 0; i < v; i++) {
        for (var x = 0; x < v; x++) {
            var cell = document.createElement("div");
            cell.className = "grid-item";
            //cell.innerText = (i * v) + x;
            e.appendChild(cell);
        }
    }
    assignEventListeners();
}


function assignEventListeners(){
    const griditems = document.querySelectorAll('.grid-item');

    griditems.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "red";
        });
    });
}


function reset() {

    const parent = document.querySelector('.container');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    let size = prompt("Please enter the desired size for the board. (Range 1-100)", "32");
    while (size > 100 || size < 0) {
        size = prompt("Please enter a number in range. (Range 1-100)", "32");
    }

    const container = document.querySelector('.container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    genDivs(size);
}

const size = 16;
genDivs(size);

function genDivs(v) {
    var e = document.querySelector('#container');
    for (var i = 0; i < v; i++) {
        var row = document.createElement("div");
        row.className = "row";
        for (var x = 1; x <= v; x++) {
            var cell = document.createElement("div");
            cell.className = "gridsquare";
            //cell.innerText = (i * v) + x;
            row.appendChild(cell);
        }
        e.appendChild(row);
    }
}

const gridsquares = document.querySelectorAll('.gridsquare');

gridsquares.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.style.backgroundColor = "red";
  });
});


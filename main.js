// hexagon
canvas = document.getElementById('canvas')
cxt = canvas.getContext('2d')
var marks = 0;
var shapes = [{
    shape: 'triangle',
    sides: 3
},
{
    shape: 'square',
    sides: 4
},
{
    shape: 'pentagon',
    sides: 5
},
{
    shape: 'hexagon',
    sides: 6
},
{
    shape: 'heptagon',
    sides: 7
},
{
    shape: 'octagon',
    sides: 8
}, {
    shape: 'nonagon',
    sides: 9
},
{
    shape: 'decagon',
    sides: 10
}];

item = random_item(shapes);
console.log(marks)
numberOfSides = item.sides;
shape = item.shape;
size = 50;
Xcenter = canvas.width / 2;
Ycenter = canvas.height / 2;
function change() {
    if (document.getElementById('shapeInput').value == shape) {
        marks++;
        document.getElementById('marks').innerHTML = marks
        if (marks == 10) {
            document.getElementById('confetti_div').style.visibility = 'visible';
        }
    }
    cxt.clearRect(0, 0, canvas.width, canvas.height)
    item = random_item(shapes);
    numberOfSides = item.sides;
    shape = item.shape;
    cxt.beginPath();
    cxt.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));
    for (var i = 1; i <= numberOfSides; i += 1) {
        cxt.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }
    cxt.strokeStyle = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    cxt.lineWidth = 1;
    cxt.stroke();
}
function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}
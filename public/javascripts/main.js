const partitions = 4;
var palette = []
const paletteSize = 768;

window.onload = function(e) {
    //this.drawMandelbrot();
    this.createPalette();
}

function createPalette() {
    for (let c = 0; c <= 767; c++) {
        let colorValR = 0
        let colorValG = 0;
        let colorValB = 0;
        if (c >= 512) {
            colorValR = c - 512;
            colorValG = 255- colorValR;
        } else if (c >=256) {
            colorValG = c - 256;
            colorValB = 255 - colorValG;
        } else {
            colorValB = c;
        }
        let rgb = 256 * 256 * colorValR + 256 * colorValG + colorValB;
        palette[c] = "#" + rgb.toString(16);
        palette[c] = palette[c].padEnd(7,'0');
        console.log(palette[c]);
    }
}

function compute() {
    let xposition = document.getElementById("xposition").value;
    let yposition = document.getElementById("yposition").value;
    let zoom = document.getElementById("zoom").value;
    let resolution = document.getElementById("resolution").value;
    let depth = document.getElementById("depth").value;
    //lets put xposition,yposition in the center of the map
    //let's compute startx and starty (upper left corner)
    let startx = xposition - zoom / 2;
    let starty = yposition + zoom / 2;
    const sdistance = zoom / partitions;

    for (let y = 0;y < partitions; y++) {
        for (let x = 0;x < partitions; x++) {
            var xhr = new XMLHttpRequest();
            let xpos = startx + x * sdistance ;
            let ypos = starty - y * sdistance ;
            xhr.open("GET","/mandelbrot?startx="+xpos+"&starty="+ypos+"&distance="+sdistance+"&resolution="+resolution+"&depth="+depth);
            xhr.onreadystatechange = function() {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        //console.log(this.responseText);
                        drawPortion(this.responseText,x,y,resolution,depth);
                    } else {
                        console.error(this.statusText);
                    }
                }
            }
            xhr.send(null);
        }
    }

}

function drawPortion(grid,x,y,resolution,depth) {
    console.log(grid,x,y);
    var canvas = document.getElementById("mandelbrot");
    var ctx = canvas.getContext("2d");
    var g = JSON.parse(grid);
    for (let j = 0;j < g.length; j++) {
        for (let i = 0; i < g[j].length; i++) {
            ctx.fillStyle=palette[g[i][j]];
            ctx.fillRect(x * 1024 / partitions + i * 1024 / partitions / resolution,
                y * 1024 / partitions + j * 1024 / partitions / resolution,
                1024 / partitions / resolution, 
                1024 / partitions / resolution);
        }
    }
}


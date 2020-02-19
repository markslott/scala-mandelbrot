const paletteSize = 768;
const partitionSize = 256; //size of a rendered partion in pixels squared. this is also the max resolution

var palette = [];
var canvasWidth = 1024;
var canvasHeight = 1024;
var mandelbrotX = -0.75;
var mandelbrotY = 0.0;
var canvasZoom = 1;

function relMouseCoords(event) {
  var totalOffsetX = 0;
  var totalOffsetY = 0;
  var canvasX = 0;
  var canvasY = 0;
  var currentElement = this;

  do {
    totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
    totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
  } while ((currentElement = currentElement.offsetParent));

  canvasX = event.pageX - totalOffsetX;
  canvasY = event.pageY - totalOffsetY;

  return { x: canvasX, y: canvasY };
}
HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;

window.onload = function(e) {
  //this.makeColorGradient(0.011, 0.011, 0.011, 0, 2, 4, 128, 127, 768);
  this.makeColorGradient(
    0.0325,
    0.0325,
    0.0325,
    3.3 + (2 * Math.PI) / 3,
    3.3 + Math.PI / 3,
    3.3 + 0.0,
    128,
    127,
    768
  );
  var canvas = document.getElementById("mandelbrot");
  canvas.addEventListener("click", this.canvasClicked);
  this.compute();
};

function canvasClicked(evt) {
  //var rect = canvas.getBoundingClientRect();
  var coords = this.relMouseCoords(evt);
  //compute the position in the mandelbrot drawing
  let startx = mandelbrotX - ((canvasZoom / 2) * canvasWidth) / partitionSize;
  let starty = mandelbrotY + ((canvasZoom / 2) * canvasHeight) / partitionSize;
  let xwidth = (2 * ((canvasZoom / 2) * canvasWidth)) / partitionSize;
  let ywidth = (2 * ((canvasZoom / 2) * canvasHeight)) / partitionSize;
  let xtransform = startx + (coords.x / canvasWidth) * xwidth;
  let ytransform = starty - (coords.y / canvasHeight) * ywidth;
  document.getElementById("xposition").value = xtransform;
  document.getElementById("yposition").value = ytransform;
}

function randomInterestingPoint() {
  var theta = Math.random() * 2 * 3.1415926535;
  var r = 0.25;
  var x = r * Math.cos(theta) - 1;
  var y = r * Math.sin(theta);
  document.getElementById("xposition").value = x;
  document.getElementById("yposition").value = y;
  document.getElementById("zoom").value = 0.025;
}

function updateCanvasWidthSlider() {
  var slider = document.getElementById("canvasWidthSliderValue");
  slider.innerText = document.getElementById("canvas-width").value;
}

function updateCanvasHeightSlider() {
  var slider = document.getElementById("canvasHeightSliderValue");
  slider.innerText = document.getElementById("canvas-height").value;
}

function updateCanvasDepthSlider() {
  var slider = document.getElementById("canvasDepthSliderValue");
  slider.innerText = document.getElementById("depth").value;
}

function updateCanvasResolutionSlider() {
  var slider = document.getElementById("canvasResolutionSliderValue");
  slider.innerText = document.getElementById("resolution").value;
}

function RGB2Color(r, g, b) {
  return "#" + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return (
    String(nybHexString.substr((n >> 4) & 0x0f, 1)) +
    nybHexString.substr(n & 0x0f, 1)
  );
}

function makeColorGradient(
  frequency1,
  frequency2,
  frequency3,
  phase1,
  phase2,
  phase3,
  center,
  width,
  len
) {
  if (center == undefined) center = 128;
  if (width == undefined) width = 127;
  if (len == undefined) len = 50;
  len = len / 2;
  for (var i = 0; i < len + 1; ++i) {
    var red = Math.sin(frequency1 * i + phase1) * width + center;
    var grn = Math.sin(frequency2 * i + phase2) * width + center;
    var blu = Math.sin(frequency3 * i + phase3) * width + center;
    palette[i] = RGB2Color(red, grn, blu);
  }
  for (var i = len; i > 1; --i) {
    var red = Math.sin(frequency1 * i + phase1) * width + center;
    var grn = Math.sin(frequency2 * i + phase2) * width + center;
    var blu = Math.sin(frequency3 * i + phase3) * width + center;
    palette[2 * len - i] = RGB2Color(red, grn, blu);
  }
}

function compute() {
  let xposition = parseFloat(document.getElementById("xposition").value);
  let yposition = parseFloat(document.getElementById("yposition").value);
  let zoom = parseFloat(document.getElementById("zoom").value);
  let resolution = parseInt(document.getElementById("resolution").value);
  let depth = parseInt(document.getElementById("depth").value);
  let width = parseInt(document.getElementById("canvas-width").value);
  let height = parseInt(document.getElementById("canvas-height").value);

  //let's compute how many partitions (divide and conquer) for the canvas size.
  //let's make a partition (or a square block to be computed) 256x256
  let xpartitions = Math.ceil(width / partitionSize);
  let ypartitions = Math.ceil(height / partitionSize);

  //lets put xposition,yposition in the center of the map
  //let's compute startx and starty (upper left corner)
  let startx = xposition - ((zoom / 2) * width) / partitionSize;
  let starty = yposition + ((zoom / 2) * height) / partitionSize;
  console.log(xposition, yposition, zoom, width, height, partitionSize);
  console.log(startx, starty);

  var canvas = document.getElementById("mandelbrot");
  canvas.height = height;
  canvas.width = width;

  //stash the canvas image state in case we click on it
  canvasWidth = width;
  canvasHeight = height;
  mandelbrotX = xposition;
  mandelbrotY = yposition;
  canvasZoom = zoom;

  for (let y = 0; y < ypartitions; y++) {
    for (let x = 0; x < xpartitions; x++) {
      var xhr = new XMLHttpRequest();
      let xpos = startx + x * zoom;
      let ypos = starty - y * zoom;
      console.log(x, y, xpos, ypos);
      xhr.open(
        "GET",
        "/mandelbrot?startx=" +
          xpos +
          "&starty=" +
          ypos +
          "&xdistance=" +
          zoom +
          "&ydistance=" +
          zoom +
          "&resolution=" +
          resolution +
          "&depth=" +
          depth
      );
      xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
          if (this.status === 200) {
            console.log(this.responseText);
            drawPortion(
              this.responseText,
              x,
              y,
              resolution,
              width,
              height,
              depth
            );
          } else {
            console.error(this.statusText);
          }
        }
      };
      xhr.send(null);
    }
  }
}

function drawPalette() {
  var canvas = document.getElementById("mandelbrot");
  var ctx = canvas.getContext("2d");
  canvas.height = palette.length;
  canvas.width = 768;
  for (let i = 0; i < palette.length; i++) {
    ctx.fillStyle = palette[i];
    ctx.fillRect(0, i, 768, 1);
  }
}

function drawPortion(grid, x, y, resolution, width, height, depth) {
  const xpartitions = Math.ceil(width / partitionSize);
  const ypartitions = Math.ceil(height / partitionSize);
  const aspectRatio = width / height;

  //console.log(grid,x,y);
  var canvas = document.getElementById("mandelbrot");
  var ctx = canvas.getContext("2d");
  var g = JSON.parse(grid);
  for (let j = 0; j < g.length; j++) {
    for (let i = 0; i < g[j].length; i++) {
      var colorpick = Math.round(g[i][j]) % palette.length;
      ctx.fillStyle = palette[colorpick];
      ctx.fillRect(
        Math.ceil(
          (x * width) / xpartitions + (i * width) / xpartitions / resolution
        ),
        Math.ceil(
          (y * height) / ypartitions + (j * height) / ypartitions / resolution
        ),
        Math.ceil(partitionSize / resolution),
        Math.ceil(partitionSize / resolution)
      );
    }
  }
}

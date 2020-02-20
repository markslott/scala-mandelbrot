//global vars
const partitionSize = 256; //size of a rendered partion in pixels squared. this is also the max resolution
var palette = [];
var canvasWidth = 1024;
var canvasHeight = 1024;
var mandelbrotX = -0.75;
var mandelbrotY = 0.0;
var canvasZoom = 1;

//used to determine [x,y] of a mouse click in an HTMLCanvasElement
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
    3.3,
    128,
    127,
    768
  );
  var canvas = document.getElementById("mandelbrot");
  canvas.addEventListener("dblclick", this.canvasClicked);
  this.compute();
};

//recenters the fractal where the user double clicked in the canvas
//and redraws the fractal
function canvasClicked(e) {
  var coords = this.relMouseCoords(e);
  //compute the position in the mandelbrot drawing
  let startx = mandelbrotX - ((canvasZoom / 2) * canvasWidth) / partitionSize;
  let starty = mandelbrotY + ((canvasZoom / 2) * canvasHeight) / partitionSize;
  let xwidth = (2 * ((canvasZoom / 2) * canvasWidth)) / partitionSize;
  let ywidth = (2 * ((canvasZoom / 2) * canvasHeight)) / partitionSize;
  let xtransform = startx + (coords.x / canvasWidth) * xwidth;
  let ytransform = starty - (coords.y / canvasHeight) * ywidth;
  document.getElementById("xposition").value = xtransform;
  document.getElementById("yposition").value = ytransform;
  compute();
}

//finds a random point along the edge of the mandelbrot set
function randomInterestingPoint() {
  var theta = Math.random() * 2 * 3.1415926535;
  var r = 0.25;
  var x = r * Math.cos(theta) - 1;
  var y = r * Math.sin(theta);
  document.getElementById("xposition").value = x;
  document.getElementById("yposition").value = y;
  document.getElementById("zoom").value = 0.025;
}

//form controls
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

function updateCanvasFilterSlider() {
    var blur = document.getElementById("blur").value;
    document.getElementById("canvasBlurSliderValue").innerText = blur;
    var hue = document.getElementById("hue-rotate").value;
    document.getElementById("canvasHueRotateSliderValue").innerText = hue;
    var sat = document.getElementById("saturation").value;
    document.getElementById("canvasSaturationSliderValue").innerText = sat;
    var grayscale = document.getElementById("grayscale").value;
    document.getElementById("canvasGrayscaleSliderValue").innerText = grayscale;
    var contrast = document.getElementById("contrast").value;
    document.getElementById("canvasContrastSliderValue").innerText = contrast;
    var brightness = document.getElementById("brightness").value;
    document.getElementById("canvasBrightnessSliderValue").innerText = brightness;
    var invert = document.getElementById("invert").checked;
    var invertval = invert ? 1 : 0;
    var canvas = document.getElementById("mandelbrot");
    
    canvas.style.filter = "blur("+blur+"px) hue-rotate("+hue+"deg) saturate("+sat+"%) grayscale("+grayscale+"%) contrast("+contrast+"%) brightness("+ brightness +"%) invert("+invertval+")" ;
}


//Color gradient generator
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


//Makes API calls to get a portion of the fractal. It then stitches together
//the portions by drawing them on the canvas in the right place. The browser
//permits 6 open calls at the same time... any more than that and they get 
//queued up, so at most 6 image fragments will get computed at the same time
function compute() {
  let xposition = parseFloat(document.getElementById("xposition").value);
  let yposition = parseFloat(document.getElementById("yposition").value);
  let zoom = parseFloat(document.getElementById("zoom").value);
  let resolution = Math.pow(2,parseInt(document.getElementById("resolution").value));
  let depth = parseInt(document.getElementById("depth").value);
  let width = parseInt(document.getElementById("canvas-width").value);
  let height = parseInt(document.getElementById("canvas-height").value);

  //let's compute how many partitions (divide and conquer) for the canvas size.
  //let's make a partition (or a square block to be computed) 256x256
  let numBlocksX = Math.ceil(width / partitionSize);
  let numBlocksY = Math.ceil(height / partitionSize);

  //lets put xposition,yposition in the center of the map
  //let's compute startx and starty (upper left corner)
  let startx = xposition - ((zoom / 2) * width) / partitionSize;
  let starty = yposition + ((zoom / 2) * height) / partitionSize;
  //console.log(xposition, yposition, zoom, width, height, partitionSize);
  //console.log(startx, starty);

  var canvas = document.getElementById("mandelbrot");
  canvas.height = height;
  canvas.width = width;

  //stash the canvas image state in case we click on it
  canvasWidth = width;
  canvasHeight = height;
  mandelbrotX = xposition;
  mandelbrotY = yposition;
  canvasZoom = zoom;

  for (let y = 0; y < numBlocksY; y++) {
    for (let x = 0; x < numBlocksX; x++) {
      var xhr = new XMLHttpRequest();
      let xpos = startx + x * zoom;
      let ypos = starty - y * zoom;
      //console.log(x, y, xpos, ypos);
      xhr.open(
        "GET",
        "/mandelbrot?startx=" +
          xpos +
          "&starty=" +
          ypos +
          "&distance=" +
          zoom +
          "&resolution=" +
          resolution +
          "&depth=" +
          depth
      );
      xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
          if (this.status === 200) {
            //console.log(this.responseText);
            drawFractal(this.responseText, x, y, resolution, width, height);
          } else {
            console.error(this.statusText);
          }
        }
      };
      xhr.send(null);
    }
  }
}

function drawFractal(grid, x, y, res, width, height) {
  const numBlocksX = Math.ceil(width / partitionSize);
  const numBlocksY = Math.ceil(height / partitionSize);
  var canvas = document.getElementById("mandelbrot");
  var ctx = canvas.getContext("2d");
  var g = JSON.parse(grid);
  for (let j = 0; j < g.length; j++) {
    for (let i = 0; i < g[j].length; i++) {
      var colorpick = Math.round(g[i][j]) % palette.length;
      ctx.fillStyle = palette[colorpick];
      let canvasX = Math.ceil(
        (x * width) / numBlocksX + (i * width) / numBlocksX / res
      );
      let canvasY = Math.ceil(
        (y * height) / numBlocksY + (j * height) / numBlocksY / res
      );
      let length = Math.ceil(partitionSize / res);
      ctx.fillRect(canvasX, canvasY, length, length);
    }
  }
}

//Shows the generated color pallette. This can be altered by changing the params
//that feed the makeColorGradient function
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

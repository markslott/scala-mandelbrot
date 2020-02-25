import { LightningElement, api } from "lwc";
import { relMouseCoords, partitionSize, palette } from "my/library";

HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;

export default class FractalCanvas extends LightningElement {
  
  @api xposition;
  @api yposition;
  @api zoom;
  @api resolution;
  @api depth;
  @api width;
  @api height;
  @api hue;
  @api blur;
  @api saturation;
  @api grayscale;
  @api contrast;
  @api brightness;
  @api inverted;

  percentComplete;
  _blocksCompleted = 0;
  _totalBlocks;
  _initialized = false;

  renderedCallback() {
    if (!this._initialized) {
      var canvas = this.template.querySelector("canvas");
      canvas.addEventListener("dblclick", this.canvasClicked.bind(this));
      this.compute();
      this._initialized = true;
    }
  }

  @api 
  performImageTransform() {
      var styles = "";
      styles += "blur("+this.blur+"0px) ";
      styles += "hue-rotate("+this.hue+"deg) ";
      styles += "saturate("+this.saturation+"%) ";
      styles += "grayscale("+this.grayscale+"%) ";
      styles += "contrast("+this.contrast+"%) ";
      styles += "brightness("+this.brightness+"%) ";
      styles += "invert("+this.inverted+")";
      var canvas = this.template.querySelector("canvas[data-id='mandelbrot']");
      canvas.style.filter = styles;
  }

  @api
  saveImage() {
    var canvas = this.template.querySelector("canvas[data-id='mandelbrot']");
    var canvas2 = this.template.querySelector("canvas[data-id='mandelbrot-copy']");
    canvas2.height = canvas.height;
    canvas2.width = canvas.width;
    var filter = getComputedStyle(canvas).filter;
    var ctx2 = canvas2.getContext("2d");
    ctx2.filter = filter;
    ctx2.drawImage(canvas, 0, 0);
    var img = canvas2.toDataURL("image/jpeg");
    var iframe =
      "<iframe width='" +
      canvas.width +
      "px' height='" +
      canvas.height +
      "px' src='" +
      img +
      "'></iframe>";
    var x = window.open();
    x.document.open();
    x.document.write(iframe);
    x.document.close();
  }

  //recenters the fractal where the user double clicked in the canvas
  //and redraws the fractal
  canvasClicked(event) {
    var coords = event.target.relMouseCoords(event);
    //compute the position in the mandelbrot drawing
    let startx =
      this.xposition - ((this.zoom / 2) * this.width) / partitionSize;
    let starty =
      this.yposition + ((this.zoom / 2) * this.height) / partitionSize;
    let xwidth = (2 * ((this.zoom / 2) * this.width)) / partitionSize;
    let ywidth = (2 * ((this.zoom / 2) * this.height)) / partitionSize;
    let xtransform = startx + (coords.x / this.width) * xwidth;
    let ytransform = starty - (coords.y / this.height) * ywidth;
    this.xposition = xtransform;
    this.yposition = ytransform;
    this.dispatchEvent(
      new CustomEvent("newposition", {
        detail: { xposition: this.xposition, yposition: this.yposition },
        bubbles: true
      })
    );
    this.compute();
  }

  async callAPI(x, y, xpos, ypos, zoom, res, depth, canvas, fractalFunction) {
    var xhr = new XMLHttpRequest();
    var uri =
      "/mandelbrot?startx=" +
      xpos +
      "&starty=" +
      ypos +
      "&distance=" +
      zoom +
      "&resolution=" +
      res +
      "&depth=" +
      depth;
    const response = await fetch(uri);
    const data = await response.json();
    fractalFunction(data, x, y, res, this.width, this.height, canvas);
    this._blocksCompleted++;
    this.percentComplete = Math.round(
      (this._blocksCompleted / this._totalBlocks) * 100
    );
  }

  //Makes API calls to get a portion of the fractal. It then stitches together
  //the portions by drawing them on the canvas in the right place. The browser
  //permits 6 open calls at the same time... any more than that and they get
  //queued up, so at most 6 image fragments will get computed at the same time
  @api
  compute() {
    const res = Math.pow(2, this.resolution);

    //let's compute how many partitions (divide and conquer) for the canvas size.
    //let's make a partition (or a square block to be computed) 256x256
    let numBlocksX = Math.ceil(this.width / partitionSize);
    let numBlocksY = Math.ceil(this.height / partitionSize);

    //lets put xposition,yposition in the center of the map
    //let's compute startx and starty (upper left corner)
    let startx =
      this.xposition - this.zoom * (this.width / 2 / partitionSize);
    let starty =
      this.yposition + this.zoom * (this.height / 2 / partitionSize);

    var canvas = this.template.querySelector("canvas");
    canvas.height = this.height;
    canvas.width = this.width;

    this._totalBlocks = numBlocksX * numBlocksY;
    this._blocksCompleted = 0;
    this.percentComplete = 0;

    for (let y = 0; y < numBlocksY; y++) {
      for (let x = 0; x < numBlocksX; x++) {
        let xpos = startx + x * this.zoom;
        let ypos = starty - y * this.zoom;
        this.callAPI(
          x,
          y,
          xpos,
          ypos,
          this.zoom,
          res,
          this.depth,
          canvas,
          this.drawFractal
        );
      }
    }
  }

  drawFractal(grid, x, y, res, width, height, canvas) {
    const numBlocksX = Math.ceil(width / partitionSize);
    const numBlocksY = Math.ceil(height / partitionSize);
    var ctx = canvas.getContext("2d");
    var g = grid;
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
}

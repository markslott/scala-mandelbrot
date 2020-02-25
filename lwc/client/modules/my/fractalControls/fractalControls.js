import { LightningElement, api } from "lwc";

export default class FractalControls extends LightningElement {
  @api width = 1024;
  @api height = 1024;
  @api resolution = 6;
  @api xposition = -0.75;
  @api yposition = 0.0;
  @api zoom = 1.0;
  @api depth = 60;

  //finds a random point along the edge of the mandelbrot set
  @api
  randomInterestingPoint() {
    var theta = Math.random() * 2 * 3.1415926535;
    var r = 0.25;
    var x = r * Math.cos(theta) - 1;
    var y = r * Math.sin(theta);
    this.xposition = x;
    this.yposition = y;
    this.zoom = 0.025;
  }

  updateWidth(event) {
    this.width = event.target.value;
  }

  updateHeight(event) {
    this.height = event.target.value;
  }

  updateResolution(event) {
    this.resolution = event.target.value;
  }

  updateXPosition(event) {
    this.xposition = event.target.value;
  }

  updateYPosition(event) {
    this.yposition = event.target.value;
  }

  updateZoom(event) {
    this.zoom = event.target.value;
  }

  updateDepth(event) {
    this.depth = event.target.value;
  }
}

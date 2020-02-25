import { LightningElement } from "lwc";
import "@lwc/synthetic-shadow"; //use this to get CSS to work

export default class App extends LightningElement {
  _initialized = false;

  renderedCallback() {
    if (!this._initialized) {
      this.compute();
      this._initialized = true;
    }
  }
  newPosition(event) {
    var controls = this.template.querySelector("my-fractal-controls");
    controls.xposition = event.detail.xposition;
    controls.yposition = event.detail.yposition;
  }

  imageTransform(event) {
    var fractal = this.template.querySelector("my-fractal-canvas");
    fractal.hue = event.detail.hue;
    fractal.blur = event.detail.blur;
    fractal.saturation = event.detail.saturation;
    fractal.grayscale = event.detail.grayscale;
    fractal.contrast = event.detail.contrast;
    fractal.brightness = event.detail.brightness;
    fractal.inverted = event.detail.inverted;
    fractal.performImageTransform();
  }

  imageSnapshot(event) {
    var fractal = this.template.querySelector("my-fractal-canvas");
    fractal.saveImage();
  }

  connectedCallback() {
    console.log("app connected callback");
    this.template.addEventListener("newposition", this.newPosition.bind(this));
  }

  compute() {
    var fractal = this.template.querySelector("my-fractal-canvas");
    var controls = this.template.querySelector("my-fractal-controls");
    fractal.xposition = controls.xposition;
    fractal.yposition = controls.yposition;
    fractal.zoom = controls.zoom;
    fractal.resolution = controls.resolution;
    fractal.depth = controls.depth;
    fractal.width = controls.width;
    fractal.height = controls.height;
    fractal.compute();
  }

  findInterestingPoint() {
    var controls = this.template.querySelector("my-fractal-controls");
    controls.randomInterestingPoint();
  }
}

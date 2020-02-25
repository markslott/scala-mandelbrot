import { LightningElement, api } from "lwc";

export default class FractalControls extends LightningElement {
  @api hue = 0;
  @api blur = 0;
  @api brightness = 100;
  @api contrast = 100;
  @api saturation = 100;
  @api grayscale = 0;
  @api inverted = 0;

  @api get params() {
    return {
      hue: this.hue,
      blur: this.blur,
      brightness: this.brightness,
      contrast: this.contrast,
      saturation: this.saturation,
      grayscale: this.grayscale,
      inverted: this.inverted
    };
  }

  updateHue(event) {
    this.hue = event.target.value;
    this.sendEvent();
  }

  updateBlur(event) {
    this.blur = event.target.value;
    this.sendEvent();
  }

  updateBrightness(event) {
    this.brightness = event.target.value;
    this.sendEvent();
  }

  updateContrast(event) {
    this.contrast = event.target.value;
    this.sendEvent();
  }

  updateSaturation(event) {
    this.saturation = event.target.value;
    this.sendEvent();
  }

  updateGrayscale(event) {
    this.grayscale = event.target.value;
    this.sendEvent();
  }

  updateInverted(event) {
    var invert = event.target.checked;
    this.inverted = invert ? 1 : 0;
    this.sendEvent();
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent("change", { detail: this.params }));
  }
}

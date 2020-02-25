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
    var palette = [];
    const hexchars = "0123456789ABCDEF";
    var byte2Hex = n =>
      String(hexchars.substr((n >> 4) & 0x0f, 1)) + hexchars.substr(n & 0x0f, 1);
    var RGB2Color = (r, g, b) => "#" + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
  
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
    return palette;
  }
  
var palette = makeColorGradient(
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
  
const partitionSize = 256;

export { relMouseCoords, makeColorGradient, partitionSize, palette}
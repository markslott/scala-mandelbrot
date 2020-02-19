package services

import play.api.libs.json.Json
import play.api.libs.json._

class Mandelbrot {

    val escaperadius = 2; //must be set to at least 2

    def squared(x:Double) = x*x;

    //where the magic happens - is a given complex number a member of the mandelbrot set
    //or not? The number of iterations it takes escape (or not) determines the color
    //using a smoothing algorithm to make the color transitons look smooth
    def compute(z0 : Complex, depth : Long) : Long =  {
        
        def mandelbrot = (z0: Complex) => {
            var (i,z) = (0,z0.copy());
            while ((z.abs < escaperadius) && (i < depth)) {
                z = z * z + z0;
                i += 1;
            } 
            (z,i,i >= depth)
         }
        val (finalZ,iterations,didNotEscape) = mandelbrot(z0);
        def smoothValue(i:Long,x:Double) = i - Math.log(Math.log(x))/Math.log(2);
        val mu = smoothValue(iterations,squared(finalZ.abs));
        val color = if (didNotEscape) 0.0 else if (mu < 0) 0.0 else mu;
        color.toInt % 768; //that's the size of the pallette. maybe should do this on the client size
    }

    //takes a square grid and computes the color for each individual point. Returns a two 
    //dimensional array as a JSON data structure
    def draw(start : Complex, distance : Double, resolution : Integer, depth : Long) : JsValue = {
        var grid = Array.ofDim[Long](resolution,resolution);
        for (y <- 0 until resolution; x <- 0 until resolution) {
            grid(x)(y) = compute(Complex(start.r + distance * x / resolution ,start.i - distance * y / resolution), depth);
        }
        Json.toJson(grid);
    }
    
}

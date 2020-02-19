package services

import play.api.libs.json.Json
import play.api.libs.json._

class Mandelbrot {

    val escaperadius = 2; //must be set to at least 2

    //where the magic happens - is a given complex number a member of the mandelbrot set
    //or not? The number of iterations it takes escape (or not) determines the color
    //using a smoothing algorithm to make the color transitons look smooth
    def compute(z0 : Complex, depth : Long) : Long =  {
        var iterations = 0;
        var z = z0.copy();
        while ((z.abs < escaperadius) && (iterations < depth)) {
            z = z * z + z0;
            iterations += 1;
        }
        var color = 0.0;
        var modulus = z.abs;
        var modulusSquared = modulus * modulus;
        if (iterations < depth) {
            val mu = iterations - Math.log(Math.log(modulusSquared))/Math.log(2);
            color = mu;
            if (color < 0)
                color = 0;
        }
        color.toInt % 768;
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

package services

import scala.util.control.Breaks._
import play.api.libs.json.Json
import play.api.libs.json._


class Mandelbrot {

    val escaperadius = 2

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
            //color = mu / iterations * 768;
            color = mu;
            /*if (color >= 767)
                color = 767;
            else*/ if (color < 0)
                color = 0;
        }
        color.toInt % 768;
    }

    def draw(start : Complex, xdistance : Double, ydistance : Double, resolution : Integer, depth : Long) : JsValue = {
        var grid = Array.ofDim[Long](resolution,resolution);
        for (y <- 0 until resolution; x <- 0 until resolution) {
            grid(x)(y) = compute(Complex(start.r + xdistance * x / resolution ,start.i - ydistance * y / resolution), depth);
        }
        Json.toJson(grid);
    }
    
}

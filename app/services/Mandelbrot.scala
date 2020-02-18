package services

import scala.util.control.Breaks._
import play.api.libs.json.Json
import play.api.libs.json._


class Mandelbrot {

    val escaperadius = 50

    def compute(z0 : Complex, depth : Long) : Long =  {
        var iterations = 0;
        var z = z0.copy();
        while ((z.abs < escaperadius) && (iterations < depth)) {
            z = z * z + z0;
            iterations += 1;
        }
        var color = 0.0;
        if (iterations < depth) {
            /*z = z * z + z0;
            iterations += 1;
            z = z * z + z0;
            iterations += 1;*/
            val mu = iterations - Math.log(Math.log(z.abs))/Math.log(2);
            color = mu / iterations * 768;
            if (color >= 767)
                color = 767;
            else if (color < 0)
                color = 0;
        }

        
             //smooth color
        //var nsmooth = iterations + 1 - Math.log(Math.log(z.abs))/Math.log(2);
       
        color.toInt;
    }

    def draw(start : Complex, distance : Double, resolution : Integer, depth : Long) : JsValue = {
        var grid = Array.ofDim[Long](resolution,resolution);
        for (y <- 0 until resolution; x <- 0 until resolution) {
            grid(x)(y) = compute(Complex(start.r + distance * x / resolution ,start.i - distance * y / resolution), depth);
        }
        Json.toJson(grid);
    }
    
}

package services

import play.api.libs.json.Json
import play.api.libs.json._

class Mandelbrot {

    val escaperadius = 4; //must be set to at least 2

    def squared(x:Double) = x*x;

    //where the magic happens - is a given complex number a member of the mandelbrot set
    //or not? The number of iterations it takes escape (or not) determines the color
    //using a smoothing algorithm to make the color transitons look smooth
<<<<<<< HEAD
    def compute(z0 : Complex, depth : Long) : Long =  {
        //to-do make recursive so it's cool in a scala way
        //look up scala conventios
        def mandelbrot = (z0: Complex) => {
            var (i,z) = (0,z0.copy());
            while ((z.abs < escaperadius) && (i < depth)) {
                z = z * z + z0;
                i += 1;
            } 
            (z,i,i >= depth)
         }
        val (finalZ,iterations,didNotEscape) = mandelbrot(z0)
=======
    def compute(c : Complex, depth : Long) : Long =  {
        
        def mandelbrot = (c: Complex) => {
            def accumulator (c : Complex, z : Complex = new Complex(0,0), n : Long = 0) : (Complex,Long,Boolean) = n match {
                case 0 => accumulator(c,c,1)
                case _ => if ((z.abs > escaperadius) || (n >= depth)) (z,n, n>=depth) else accumulator(c,z*z+c,n+1)
            }
            accumulator(c)
         }
        val (finalZ,iterations,didNotEscape) = mandelbrot(c)
>>>>>>> 533d3cae59c8896caef4d094da7a829e2904d00e
        def smoothValue(i:Long,x:Double) = i - Math.log(Math.log(x))/Math.log(2)
        val mu = smoothValue(iterations,squared(finalZ.abs))
        val color = if (didNotEscape) 0.0 else if (mu < 0) 0.0 else mu
        color.toInt
    }

    //takes a square grid and computes the color for each individual point. Returns a two 
    //dimensional array as a JSON data structure. Start refers to the top left corner of 
    //the mandelbrot image to be computed.  Distance is how far down and to the right (computes
    //a square, resolution defines how granular. For example a resolution of 12 will make a 12x12
    //and only sample 144 points in the defined square. Depth is how far down to look - deeper zoom
    //levels will need larger depth values to see if that point escapes or not.
    def draw(start : Complex, distance : Double, resolution : Integer, depth : Long) : JsValue = {
        var grid = Array.ofDim[Long](resolution,resolution)
        for (y <- 0 until resolution; x <- 0 until resolution) {
            grid(x)(y) = compute(Complex(start.r + distance * x / resolution ,start.i - distance * y / resolution), depth)
        }
        Json.toJson(grid)
    }
    
}

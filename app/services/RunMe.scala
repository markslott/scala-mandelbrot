package services

import scala.math._

object RunMe {
    def main(args: Array[String]) {
       /* println("run me");
        val width = 80;
        val height = 28;
        val startx = -2.25;
        val starty = 1.5;
        val xdistance = 3.0;
        val ydistance = 3.0;
        val m = new Mandelbrot();
        for (y <- 0 to height; x <- 0 to width) {

            val z = m.compute(Complex(startx + (xdistance * x / width) ,starty - (ydistance * y / height)),50);
            //println(Complex(startx + (xdistance * x / width) ,starty - (ydistance * y / height)) + " " + z);
            if (z == 0) {
                if (x < width) print(" ");
                else println(" ");
            } else {
                if (x < width) print(Math.floorMod(z,10));
                else println(Math.floorMod(z,10));
            }
        }
        println(m.draw(Complex(startx,starty),2,40,50).toString());*/
    }
}
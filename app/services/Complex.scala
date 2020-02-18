package services

case class Complex(r : Double, i : Double) {

    def +(c : Complex) = Complex(r + c.r,i + c.i);
    def -(c : Complex) = Complex(r - c.r, i - c.i);
    def *(c : Complex) = Complex(r * c.r - i * c.i, r * c.i + i * c.r);
    def /(c : Complex) = {
        val conjugate = Complex(c.r, -c.i);
        val denominator = (c * conjugate).r;
        val numerator = this * conjugate;
        Complex(numerator.r / denominator,numerator.i / denominator);
    }
    def abs = Math.sqrt(r * r + i * i);
    override def toString() = "" + r + (if (i >= 0) "+" else "") + i + "i"
}
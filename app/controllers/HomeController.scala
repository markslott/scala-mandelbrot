package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import services._

@Singleton
class HomeController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  // look at routes in conf to determine with URL matches which method

  def index() = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.index())
  }

  def mandelbrot(startx : Double, starty : Double, distance : Double, resolution : Integer, depth : Long) =
     Action { implicit request: Request[AnyContent] =>
     val m = new Mandelbrot();
     val c = Complex(startx,starty);
     val json = m.draw(c,distance,resolution,depth);
     Ok(json);
  }
}

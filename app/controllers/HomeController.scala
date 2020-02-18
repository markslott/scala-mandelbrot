package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import services._
/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
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

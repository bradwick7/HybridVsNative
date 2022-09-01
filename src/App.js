import "./App.css";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="container">
      <section id="section_1" className="section centered">
        <div className="flex_container width80 marginTop20">
          <span className="author marginTop20">Actividad 2</span>
          <span className="author">Bradley Addiel González Flores</span>
          <span className="title marginTop20 marginBottom20">
            Aplicaciones híbridas
          </span>
          <span className="question">¿Qué son las aplicaciones híbridas?</span>
          <span className="answer">
            Son aplicaciones móviles diseñadas con un lenguaje de programación
            web y junto con un framework que permite adaptar la vista web a
            cualquier vista de un dispositivo móvil. De esta manera, diseñamos y
            creamos la aplicación una sola vez y que funcione en diversos
            dispositivos.
          </span>
        </div>

        <div className="flex_container width80 marginTop20">
          <span className="question">¿Cuándo usarlas?</span>
          <span className="answer">
            Dependiendo del tipo de requerimientos del proyecto usaremos un tipo
            de aplicación, si contamos con mayor presupuesto y queremos la mejor
            experiencia de usuario posible, con pleno acceso e integración con
            las funciones de hardware del dispositivo y APIs nativas, tiempos de
            respuesta mucho más cortos y plena utilidad sin conexión a internet,
            escogeremos el desarrollo de una aplicación nativa, en cambio si no
            contamos con un presupuesto tan elevado, podemos optar por
            desarrollar una aplicación híbrida, este tipo de aplicaciones
            también tienen sus ventajas como reducir el tiempo de desarrollo,
            solo se hace mantenimiento a una fuente de código, una menor
            complejidad para mantener el código, entre otras.
          </span>
        </div>

        <Link
          activeClass="active"
          to="section_2"
          spy={true}
          smooth={true}
          duration={500}
          className="buttonDown centered"
        >
          &darr;
        </Link>
      </section>

      <section id="section_2" className="section centered">
        <div className="flex_container width80 marginTop20">
          <span className="title marginBottom20">
            Tabla comparativa: Híbridas vs Nativas
          </span>
          <table>
            <thead>
              <tr className="border_bottom">
                <th>Características</th>
                <th>Aplicaciones Híbridas</th>
                <th>Aplicaciones Nativas</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border_bottom">
                <td>Mayor nivel de seguridad</td>
                <td>&#10006;</td>
                <td>&#10004;</td>
              </tr>
              <tr className="border_bottom">
                <td>Mejor rendimiento</td>
                <td>&#10006;</td>
                <td>&#10004;</td>
              </tr>
              <tr className="border_bottom">
                <td>Soporta multiplataforma</td>
                <td>&#10004;</td>
                <td>&#10006;</td>
              </tr>
              <tr className="border_bottom">
                <td>Mejor control de procesos</td>
                <td>&#10006;</td>
                <td>&#10004;</td>
              </tr>
              <tr className="border_bottom">
                <td>Mayor experiencia de usuario</td>
                <td>&#10006;</td>
                <td>&#10004;</td>
              </tr>
              <tr className="border_bottom">
                <td>Menor costo</td>
                <td>&#10004;</td>
                <td>&#10006;</td>
              </tr>
              <tr className="border_bottom">
                <td>Tiempo de desarrollo más corto</td>
                <td>&#10004;</td>
                <td>&#10006;</td>
              </tr>
              <tr className="border_bottom">
                <td>Alto nivel de personalización</td>
                <td>&#10006;</td>
                <td>&#10004;</td>
              </tr>
              <tr className="border_bottom">
                <td>Más complejo para mantener</td>
                <td>&#10006;</td>
                <td>&#10004;</td>
              </tr>
              <tr className="border_bottom">
                <td>Escalable</td>
                <td>&#10004;</td>
                <td>&#10006;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Link
          activeClass="active"
          to="section_1"
          spy={true}
          smooth={true}
          duration={500}
          className="buttonUp centered"
        >
          &uarr;
        </Link>

        <Link
          activeClass="active"
          to="section_3"
          spy={true}
          smooth={true}
          duration={500}
          className="buttonDown centered"
        >
          &darr;
        </Link>
      </section>

      <section id="section_3" className="section centered">
        <div className="flex_container width80 marginTop20">
          <span className="title marginBottom20">Conclusión</span>
          <span className="answer">
            Es importante identificar los requerimientos de la aplicación y en
            base a estos, desarrollar una aplicación híbrida o nativa. Tanto el
            desarrollo de aplicaciones híbridas como nativas tienen sus propias
            ventajas y desventajas, ventajas como código fuente único,
            tecnologías multiplataforma, actualizaciones fáciles y los costos
            más bajos hacen que las aplicaciones híbridas sean más viables. Una
            de las desventajas más importantes para las aplicaciones híbridas es
            que requieren más tiempo para las correcciones y optimizar el código
            para minimizar los problemas de rendimiento. Las aplicaciones
            nativas también tienen ventajas como ofrecer un mejor rendimiento,
            una experiencia de usuario más fluida, un mayor nivel de seguridad y
            acceso a todas las API nativas. Aunque la inversión inicial sea más
            alta, le ahorra tiempo y dinero a la larga.
          </span>
        </div>
        <Link
          activeClass="active"
          to="section_2"
          spy={true}
          smooth={true}
          duration={500}
          className="buttonDown centered"
        >
          &uarr;
        </Link>
      </section>
    </div>
  );
}

export default App;

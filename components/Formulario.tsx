import { FunctionComponent } from "preact/src/index.d.ts";



const Formulario:FunctionComponent = () => {

  

  return (
    <div>
      <h2>Enviar número de teléfono</h2>
      <h3>Escribe tu número de teléfono en formato +34651476320</h3>
      <form method="post">
        <input type="string" name="tel" value="" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Formulario
import { FunctionalComponent } from "preact/src/index.d.ts";
import { PhoneAPI } from "../utils/types.ts";




const Overview:FunctionalComponent<PhoneAPI> = (props: PhoneAPI) => {

  return (
    <div>
        <ul>
          <li><h3>Número de teléfono: {props.format_international}</h3></li>
          <li><h3>País: {props.country}</h3></li>
        </ul>
      </div>
  )


}


export default Overview
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Formulario from "../components/Formulario.tsx";
import Overview from "../components/Overview.tsx";
import { PhoneAPI } from "../utils/types.ts";




export const handler:Handlers<PhoneAPI> = {


  POST: async (req, ctx) => {
    const form = await req.formData();
    const tel = form.get("tel")?.toString();

    const json = await fetch ('https://api.api-ninjas.com/v1/validatephone?number=' + tel, { headers: {
      'X-Api-Key': 'msI4RH/0VJb1HMJKPkINTQ==kSlzHcZF8PWrfApA'
    } })

    const response:PhoneAPI = await json.json()

    if (response.is_valid) {
      return (ctx.render(response))
    }



    const headers = new Headers();
    headers.set("location", "/");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  }, 
}


const Home = (props: PageProps<PhoneAPI>) => {


  console.log (props.data)


  if (props.data) {
    return (
      <Overview {... props.data}/>
    )
  }

  return (
    <Formulario></Formulario>
  );

}

export default Home
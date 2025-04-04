import { FreshContext, Handlers } from "$fresh/server.ts";
import { fromFileUrl } from "$std/path/from_file_url.ts";




const handler:Handlers = {
  POST: async (req, ctx) => {
    const form = await req.formData();
    const tel = form.get("tel")?.toString();

    // Redirect user to thank you page.
    const headers = new Headers();
    headers.set("location", "/");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
}


const Home = () => {

  return (
    <>
      <form method="post">
        <input type="tel" name="tel" value="" />
        <button type="submit">Enviar</button>
      </form>
    </>
  );

}

export default Home
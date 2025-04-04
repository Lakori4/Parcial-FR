import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";

export default function Layout({ Component }: PageProps) {
  // do something with state here
  return (
    <div class="layout">
      <a href="/"><h1>Home</h1></a>
      <Component />
      <Footer/>
    </div>
  );
}
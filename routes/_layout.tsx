import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";

export default function Layout({ Component }: PageProps) {
  // do something with state here
  return (
    <div class="layout">
      <a href="/">Home</a>
      <Component />
      <Footer/>
    </div>
  );
}
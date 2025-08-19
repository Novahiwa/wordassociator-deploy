import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner2/Banner2";
import {useUser} from "../app/context/UserContext"

export default function Home() {
  return <>
      <main className="overflow-x-hidden bg-white text-[var(--dark)]">
      <Hero />
      <Services />
      <Banner />
      <Banner2 />
    </main>
  </>;
}

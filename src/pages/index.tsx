import Blogs from "@/components/home/Blogs";
import Branch from "@/components/home/Branch";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Team from "@/components/home/Team";
import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Branch/>
      <Services/>
      <Blogs/>
      <Team/>
      <Footer/>
    </>
  )
}


import Footer from "@/components/navbar/footer";
import { Navbar } from "@/components/navbar/navbar";
import ScrollToTop from "@/components/scroll-to-top";
import About from "@/container/about";
import Contact from "@/container/contact";
import HomeSection from "@/container/home";
import Projects from "@/container/projects";
import Skills from "@/container/skills";


export default function Home() {
  return (
    <main className="pt-12">
      <Navbar/>
      <div className="container space-y-16 py-28 mx-auto px-40  ">
            <HomeSection/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
      </div>
            <ScrollToTop/>
            <Footer/>
    </main>
  );
}

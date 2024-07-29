import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Social from "./components/Social";
import ShinyButton from "@/components/magicui/shiny-button";

function App() {
  return (
    <>
      <div className="max-w-[672px] px-6 overflow-hidden mx-auto ">
        {/* <Navbar /> */}
        <Header />
        <About />
        <Skills />
        <Projects />
        <Social />
        <div
          className="mx-auto max-w-[460px] flex flex-col items-center justify-center mb-36"
          id="contact"
        >
          <h1 className="text-3xl font-bold mb-3">Get in Touch</h1>
          <p className="text-justify mb-6">
            Want to chat? Just shoot me a dm with a direct question on WhatsApp
            and I'll respond.
          </p>{" "}
          <a href="https://wa.me/918925453955?text=Hi there👋." target="_blank">
            <ShinyButton
              text={"Text me"}
              className="bg-white text-black font-black "
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;

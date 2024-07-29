import img from "../assets/image/user.jpg";
import WordRotate from "@/components/magicui/word-rotate";

function Header() {
  return (
    <div id="home">
      <header className="flex items-center justify-center gap-6 mt-20 md:flex-row flex-col">
        <img src={img} className="size-44 rounded-full" />

        <div className="grow ">
          <div className="flex items-center gap-x-3 gap-y-0 mb-2 flex-wrap sm:justify-normal justify-center">
            <h1 className="text-4xl font-semibold ">Hi, I'm </h1>
            <WordRotate
              className="font-black text-red-500 text-4xl"
              words={["Ganesh A R", "React Developer", "Web Developer"]}
              duration={2000}
            />
          </div>

          <p className="text-neutral-300 text-lg ">
            I develop User Interface and Web Pages.
          </p>
        </div>
      </header>
    </div>
  );
}

export default Header;

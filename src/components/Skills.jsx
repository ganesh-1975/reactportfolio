import ShinyButton from "@/components/magicui/shiny-button";
import { IconCloud } from "@/components/magicui/icon-cloud";

function Skills() {
  const slugs = [
    // "typescript",
    "javascript",
    // "dart",
    // "java",
    "react",
    // "flutter",
    // "android",
    "html5",
    "css3",
    // "nodedotjs",
    // "express",
    // "nextdotjs",
    // "prisma",
    // "amazonaws",
    // "postgresql",
    "firebase",
    // "nginx",
    "visualstudiocode",
    "vercel",
    // "testinglibrary",
    // "jest",
    // "cypress",
    // "docker",
    "git",
    "jira",
    "github",
    // "gitlab",
    // "androidstudio",
    // "sonarqube",
    "figma",
    "tailwindcss",
    "bootstrap",
  ];

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <>
      <div
        className="flex flex-col justify-center items-center mb-4"
        id="skill"
      >
        <h1 className="text-4xl font-bold mb-6 ">Skills</h1>

        {/* <div className="relative flex h-[200px] w-[400px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Border Bea
          </span>
          <BorderBeam size={250} duration={12} delay={9} />

        </div> */}

        <div className="flex gap-2 justify-center flex-wrap ">
          {slugs.map((skill) => (
            <ShinyButton
              text={skill}
              className="bg-white text-black font-black"
            />
          ))}
        </div>

        <div className="relative flex  w-full  items-center justify-center overflow-hidden rounded-full  bg-black bordr   pb-20 pt-8 ">
          <IconCloud images={images} />
        </div>
      </div>
    </>
  );
}

export default Skills;

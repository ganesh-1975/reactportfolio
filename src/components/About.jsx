import resume from "../assets/image/Adboxer Ganesh resume.pdf";

function About() {
  return (
    <>
      <div className="my-14" id="about">
        {/* <img
          src={img}
          alt="user pic"
          className="w-fit h-[470px] rounded-2xl"
        /> */}

        <div className="w-">
          <h1 className="text-3xl font-bold mb-3 text-center">About Me</h1>
          <p className="text-justify text-neutral-300 mb-1">
            I am a Fresher software developer with experience in HTML, CSS, and
            JavaScript, and expertise in{" "}
            <span className="text-white underline">React frameworks.</span> I am
            a fast learner and work closely with my team to{" "}
            <span className="text-white underline">
              create efficient, scalable, and user-friendly solutions
            </span>{" "}
            that solve real-world problems and also looking to build a career
            where I can apply my logical and technical skills, and work as a key
            player in a challenging and creative environment. Let's collaborate
            to bring your ideas to life!
          </p>

          <p className="text-neutral-500 mb-6">
            <a href={resume} download>
              click here to dowmload Ganesh Resume{" "}
            </a>
          </p>

          <div>
            <p className="text-xl font-bold mb-1">Education</p>
          </div>

          <div>
            <ul>
              <li className="mb-2">
                <p className="text-red-500 text-lg">
                  Jeppiaar Engineering college, Anna University, Chennai
                </p>
                <p className="text-sm text-neutral-300">
                  Bachelors: Electronics and Communication Engineering, with
                  <span className="text-white text-base">
                    {" "}
                    CGPA of 8.2,
                  </span>{" "}
                  2019 -2023.
                </p>
              </li>
              <li>
                <p className="text-red-500 text-lg">
                  Sri Vidhya Mandir, Uthangarai
                </p>
                <p className="text-sm text-neutral-300">
                  <span className="text-white text-base"> 75% </span>in 12th,
                  (2018-19) and{" "}
                  <span className="text-white text-base"> 96% </span>in 10th,{" "}
                  (2016-17){" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

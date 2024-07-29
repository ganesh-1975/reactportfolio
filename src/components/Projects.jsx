import Card from "./Card";
import vehicle from "../assets/image/vehicle.jpg";
import weather from "../assets/image/weather.png";
import phonebook from "../assets/image/phonebook.png";
import todo from "../assets/image/todo.png";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

let details = [
  {
    img: vehicle,
    title: "Vehicle Damage Assessment",
    desc: "It can be used by insurance companies for faster processing of claims if users can upload pics and the model can assess damage and estimates the cost of the damage.",
    skill: ["CSS", "Python", "Flask", "ML", "JavaScript"],
    link: [
      {
        src: "https://drive.google.com/drive/folders/1hy0kBP5KTL1PaRyJEWVkKOTR7VpuygNT?usp=sharing",
        name: "Website",
        icon: <FaGlobe />,
      },
      {
        src: "https://drive.google.com/drive/folders/1hy0kBP5KTL1PaRyJEWVkKOTR7VpuygNT?usp=sharing",
        name: "Source",
        icon: <FaGithub />,
      },
    ],
  },
  {
    img: todo,
    title: "Todo App",
    desc: "ToDoApp is a React-based task management application leveraging Firebase for real-time updates and cloud storage. It features responsive design and user-friendly interfaces with Tailwind CSS. Manage tasks efficiently with real-time synchronization and secure access across all devices.",
    skill: ["CSS", "JavaScript", "React", "FireBase"],
    link: [
      {
        src: "https://ganesh-todo.netlify.app/",
        name: "Website",
        icon: <FaGlobe />,
      },
      {
        src: " https://github.com/ganesh-1975/TodoApi",
        name: "Source",
        icon: <FaGithub />,
      },
    ],
  },
  {
    img: weather,
    title: "Weather Forecast App ",
    desc: "It provides instant weather reports based on the locations using API integration. Responsive Design: The weather App looks and works great on any device. It gives precise data on temperature, humidity, wind speed",
    skill: ["CSS", "JavaScript", "React"],
    link: [
      {
        src: "https://ganesh-weather.netlify.app/ ",
        name: "Website",
        icon: <FaGlobe />,
      },
      {
        src: "https://github.com/ganesh-1975/Weatherapp1",
        name: "Source",
        icon: <FaGithub />,
      },
    ],
  },
  {
    img: phonebook,
    title: "Phone Book App",
    desc: "Developed a phonebook application using React with a focus on simplicity and elegance. Implemented local storage functionality to persist phone numbers entered by users. Developed the search bar feature.",
    skill: ["CSS", "JavaScript", "React"],
    link: [
      {
        src: "https://ganesh-phonebook.netlify.app/",
        name: "Website",
        icon: <FaGlobe />,
      },
      {
        src: "https://github.com/ganesh-1975/phoneBook",
        name: "Source",
        icon: <FaGithub />,
      },
    ],
  },
];

function Projects() {
  return (
    <div id="projects" className="mb-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>

      <div className="flex gap-3 flex-wrap justify-center">
        {details.map((detail) => (
          <Card
            img={detail.img}
            title={detail.title}
            desc={detail.desc}
            skill={detail.skill}
            link={detail.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

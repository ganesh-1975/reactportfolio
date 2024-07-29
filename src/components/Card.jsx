function Card({ img, title, desc, skill, link }) {
  return (
    <div className="w-[300px]  border border-neutral-700 rounded-lg ">
      <img
        src={img}
        alt=""
        className=" h-[180px] w-full object-cover rounded-t-lg"
      />

      <div className="p-2 my-1 ">
        <h3 className="text-xl font-bold ">{title}</h3>
        <p className="text-neutral-400 text-justify mb-3">{desc}</p>
        <div className="flex gap-2 mb-3 flex-wrap">
          {skill.map((e) => (
            <button className="bg-neutral-600 px-2 rounded-md">{e}</button>
          ))}
        </div>

        <div className="flex gap-2">
          {link.map((obj) => (
            <a href={obj.src} target="_blank">
              <span className="bg-white  text-black  flex w-28 items-center gap-2 font-semibold rounded-lg justify-center text-lg  ">
                {obj.icon} {obj.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;

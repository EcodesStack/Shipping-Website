import React from "react";
import backgroundImg from "../assets/background1.png";

const services = [
  {
    id: 1,
    title: "Quality management system",
  },
  {
    id: 2,
    title: "E-commerce logistics solution",
  },
  {
    id: 3,
    title: "Logistics & Aftermarket logistics",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. The point of using Lorem Ipsum",
    isBlurred: true,
  },
  {
    id: 4,
    title: "Quality management system",
  },
];

const Services = () => {
  const [activeId, setActiveId] = React.useState(null);

  return (
    <section
      className="hidden md:block relative w-full h-[500px] text-white"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30 bg-opacity-30" />

      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ id, title, description, isBlurred }) => {
          const isActive = activeId === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveId(id)}
              className={`flex flex-col justify-end p-6 border-r border-white/10 backdrop-brightness-90 transition
                ${isBlurred ? "backdrop-blur-sm bg-white/10" : "bg-white/5"}
                ${isActive ? "hover:bg-white/30 bg-white/20" : "hover:bg-white/10"}
                outline-none focus:ring-2 focus:ring-white min-h-[200px] flex-1`}
              style={{ height: "100%" }}
            >
              <div className="text-lg font-semibold mb-1">
                {id < 10 ? `0${id}` : id}
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              {description && (
                <p className="text-sm mb-4 leading-snug">{description}</p>
              )}
              <span className="w-8 h-8 bg-white/20 border border-white rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">{">"}</span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
export default Services;

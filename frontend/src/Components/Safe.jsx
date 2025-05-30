import React from "react";
import {
  FaGem,
  FaUsers,
  FaShieldAlt,
  FaCogs,
  FaLightbulb,
  FaChartLine,
  FaStar,
  FaClock,
} from "react-icons/fa";

const features = [
    {
        icon: <FaStar size={24} className="text-[#FFA500]" />,
        title: "Integrity properties",
        description:
            "We uphold the highest standards of integrity, ensuring your cargo is handled with honesty and transparency at every stage.",
    },
    {
        icon: <FaClock size={24} className="text-[#FFA500]" />,
        title: "Long-sightedness",
        description:
            "Our forward-thinking approach allows us to anticipate challenges and provide reliable, future-proof shipping solutions.",
    },
    {
        icon: <FaUsers size={24} className="text-[#FFA500]" />,
        title: "Challenging staff",
        description:
            "Our dedicated team is trained to tackle complex logistics challenges, ensuring your cargo is always in expert hands.",
    },
    {
        icon: <FaShieldAlt size={24} className="text-[#FFA500]" />,
        title: "Privacy and safety",
        description:
            "We prioritize the privacy and safety of your shipments, using advanced security measures to protect your goods.",
    },
    {
        icon: <FaGem size={24} className="text-[#FFA500]" />,
        title: "Quality services",
        description:
            "Experience top-tier shipping services, with attention to detail and a commitment to exceeding your expectations.",
    },
    {
        icon: <FaChartLine size={24} className="text-[#FFA500]" />,
        title: "Continuous",
        description:
            "We strive for continuous improvement, optimizing our processes to deliver faster and more efficient shipping.",
    },
    {
        icon: <FaLightbulb size={24} className="text-[#FFA500]" />,
        title: "Innovation solutions",
        description:
            "Our innovative solutions leverage the latest technology to streamline your shipping experience.",
    },
    {
        icon: <FaCogs size={24} className="text-[#FFA500]" />,
        title: "Operational excellence",
        description:
            "We maintain operational excellence through rigorous standards and a focus on delivering consistent, high-quality results.",
    },
];

const Safe = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-medium text-gray-700">
          Your cargo is safe with us
        </h2>
        <hr className="border-none outline-none h-0.5 bg-[#FFA500] mx-auto mt-3 w-16" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded p-6 flex flex-row items-start gap-4 hover:shadow-lg transition duration-300"
          >
            <div className="flex-shrink-0 pt-1">{feature.icon}</div>
            <div className="flex-grow text-left w-full break-words">
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Safe;

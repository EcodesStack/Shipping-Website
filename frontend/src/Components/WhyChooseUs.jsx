import React from "react";
import {
  FaShippingFast,
  FaProjectDiagram,
  FaClipboardCheck,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast size={24} className="text-primary" />,
    title: "Supply Chain Solutions",
    description:
      "Receive premium planning from top-tier financial institutions. Program flows fast for various allocations.",
    link: "#",
  },
  {
    icon: <FaProjectDiagram size={24} className="text-primary" />,
    title: "End to End Transportation",
    description:
      "With Consulting 101, you'll get no surprises. We execute every mission smoothly after evaluation.",
    link: "#",
  },
  {
    icon: <FaClipboardCheck size={24} className="text-primary" />,
    title: "Contract Logistics",
    description:
      "Scale faster and grow with the smartest, leanest logistics services on your distribution model choice.",
    link: "#",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-200 py-15 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-medium text-gray-600">
          Why traders choose us
        </h2>
        <hr className="border-none outline-none h-0.5 bg-primary mx-auto mt-3 w-16" />
      </div>
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded p-7 flex flex-row items-start gap-4 hover:shadow-lg transition duration-300"
          >
            <div className="flex-shrink-0 pt-1">{feature.icon}</div>
            <div className="flex-grow text-left w-full break-words">
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                {feature.description}
              </p>
              <a
                href={feature.link}
                className="text-sm text-blue-600 hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

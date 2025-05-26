import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaReact, FaNodeJs, FaDatabase, FaBox, FaGift } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BsFillGiftFill } from "react-icons/bs";

const techItems = [
  {
    icon: <FaBox className="text-blue-500 w-full " size={70}/>,
    title: "Smart Home Box",
    description: "Transform your home into a smart home with curated smart devices",
  },
  {
    icon:  <FaBox className="text-purple-500 w-full " size={70}/>,
    title: "AI Learning Kit",
    description: "Master AI with monthly kits including hands-on projects",
  },
  {
    icon:  <FaBox className="text-green-500 w-full " size={70}/>,
    title: "Cybersecurity Toolbox",
    description: "Stay secure online with quarterly boxes full of tools",
  },
  {
    icon: <FaGift className="text-green-500 w-full " size={70}/>,
    title: "Tech Gadgets Mystery Box",
    description: "Receive a surprise selection of the latest and coolest tech gadgets each month",
  },
  {
    icon: <BsFillGiftFill className="text-green-500 w-full " size={70}/>,
    title: "Robotics Pro Kit",
    description: "Dive into robotics with complete build kits",
  },
];

const TechBoxSlide = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative  w-80 h-80 bg-white rounded-2xl shadow-lg p-6">
        {/* Custom Arrows */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-1 rounded-full z-10"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft className="w-4 h-4 text-gray-700" />
        </button>

        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-1 rounded-full z-10"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight className="w-4 h-4 text-gray-700" />
        </button>

        {/* Swiper with dots */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          className="h-full"
        >
          {techItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
                {item.icon}
                <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TechBoxSlide;

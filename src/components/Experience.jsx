import React from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      className="
        p-6 rounded-lg flex flex-col items-center text-center 
        bg-[rgba(25,25,60,0.5)] backdrop-blur-md border border-[rgba(255,255,255,0.1)]
        shadow-lg shadow-blue-900/30 
        transition-all duration-300 
        hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50
        cursor-pointer
      "
      style={{ minHeight: "320px", perspective: "1000px" }}
      whileHover={{
        scale: 1.08,
        rotateY: [0, 3, -3, 2, 0],
        transition: { duration: 0.7, ease: "easeInOut" },
      }}
    >
      <div className="w-20 h-20 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] flex justify-center items-center mb-4 overflow-hidden shadow-inner shadow-purple-500/30">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
      <h3 className="text-white font-bold text-[20px] mb-2">
        {experience.title}
      </h3>
      <p className="text-purple-200 text-[16px] font-semibold mb-2">
        {experience.company_name}
      </p>
      <p className="text-purple-300 text-[14px] mb-4 italic">
        {experience.date}
      </p>
      <ul className="list-disc space-y-2 text-left pl-5">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-purple-100 text-[14px] tracking-wider leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} text-purple-200`}>
          What I have done so far
        </p>
        <h2
          className={`
            ${styles.sectionHeadText} 
            text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300 
            drop-shadow-lg
          `}
        >
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-10 overflow-visible relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{
            padding: "20px 0",
          }}
        >
          {experiences.map((experience, index) => (
            <SwiperSlide
              key={`experience-${index}`}
              className="flex justify-center items-center"
            >
              <ExperienceCard experience={experience} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

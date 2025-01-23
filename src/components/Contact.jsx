import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { PhoneCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="
          flex-[0.75]
          p-8 
          rounded-2xl 
          relative
          bg-[rgba(10,10,50,0.5)] 
          backdrop-blur-lg
          border border-[rgba(255,255,255,0.1)]
          shadow-lg shadow-blue-800/50
        "
      >
        <p className={`${styles.sectionSubText} text-white`}>Get in touch</p>
        <h3
          className={`${styles.sectionHeadText} text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg`}
        >
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="
                py-4 px-6 
                rounded-lg 
                border border-[rgba(255,255,255,0.2)]
                bg-[rgba(255,255,255,0.1)] 
                placeholder:text-gray-300 
                text-white 
                outline-none 
                font-medium 
                focus:border-blue-500 
                hover:scale-[1.02]
                transition-transform
              "
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="
                py-4 px-6 
                rounded-lg 
                border border-[rgba(255,255,255,0.2)]
                bg-[rgba(255,255,255,0.1)] 
                placeholder:text-gray-300 
                text-white 
                outline-none 
                font-medium
                focus:border-blue-500 
                hover:scale-[1.02]
                transition-transform
              "
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="
                py-4 px-6 
                rounded-lg 
                border border-[rgba(255,255,255,0.2)]
                bg-[rgba(255,255,255,0.1)] 
                placeholder:text-gray-300 
                text-white 
                outline-none 
                font-medium
                focus:border-blue-500 
                hover:scale-[1.02]
                transition-transform
              "
            />
          </label>

          <button
            type="submit"
            className="
              py-3 px-8 
              rounded-xl 
              outline-none 
              w-fit 
              text-white font-bold 
              bg-gradient-to-r from-blue-700 to-purple-700 
              hover:from-blue-500 hover:to-purple-500
              shadow-md shadow-blue-500/50
              hover:scale-105 
              transition-transform 
              duration-300 
              ease-in-out
            "
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="
          xl:flex-1 xl:h-auto 
          md:h-[550px] 
          h-[350px] 
          relative
          flex items-center justify-center
        "
      >
        <div className="w-full h-full">
          <PhoneCanvas />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

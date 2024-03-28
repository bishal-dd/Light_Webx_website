import React, { useRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsLetter = () => {
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    await axios.post('https://6lgthqn9rl.execute-api.ap-south-1.amazonaws.com/dev/emailList', {
      email,
    });
    toast.success('Subscribed successfully!');
    e.target.reset();
  };
  return (
    <>
      <ToastContainer />
      <div
        className="wow fadeInUp relative mb-12 overflow-hidden rounded-[5px] bg-primary px-11 py-[60px] text-center lg:px-8"
        data-wow-delay=".1s"
      >
        <h3 className="mb-[6px] text-[28px] font-semibold leading-[40px] text-white">
          Join our newsletter!
        </h3>
        <p className="mb-5 text-base text-white">
          Enter your email to receive our latest newsletter.
        </p>
        <form method="POST" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            required
            ref={emailRef}
            placeholder="Your email address"
            className="mb-4 h-[50px] w-full rounded-md border border-transparent bg-white/10 text-center text-base text-white outline-none placeholder:text-white/60 focus:border-white focus-visible:shadow-none"
          />
          <input
            type="submit"
            value="Subscribe Now"
            className="mb-4 h-[50px] w-full cursor-pointer rounded-md bg-secondary text-center text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-[#0BB489] hover:bg-opacity-90"
          />
        </form>
        <p className="text-sm font-medium text-white">Don't worry, we don't spam</p>

        <div>
          <span className="absolute right-0 top-0">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="1.39737"
                cy="44.6026"
                r="1.39737"
                transform="rotate(-90 1.39737 44.6026)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="1.39737"
                cy="7.9913"
                r="1.39737"
                transform="rotate(-90 1.39737 7.9913)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="13.6943"
                cy="44.6026"
                r="1.39737"
                transform="rotate(-90 13.6943 44.6026)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="13.6943"
                cy="7.9913"
                r="1.39737"
                transform="rotate(-90 13.6943 7.9913)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="25.9911"
                cy="44.6026"
                r="1.39737"
                transform="rotate(-90 25.9911 44.6026)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="25.9911"
                cy="7.9913"
                r="1.39737"
                transform="rotate(-90 25.9911 7.9913)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="38.288"
                cy="44.6026"
                r="1.39737"
                transform="rotate(-90 38.288 44.6026)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="38.288"
                cy="7.9913"
                r="1.39737"
                transform="rotate(-90 38.288 7.9913)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="1.39737"
                cy="32.3058"
                r="1.39737"
                transform="rotate(-90 1.39737 32.3058)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="13.6943"
                cy="32.3058"
                r="1.39737"
                transform="rotate(-90 13.6943 32.3058)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="25.9911"
                cy="32.3058"
                r="1.39737"
                transform="rotate(-90 25.9911 32.3058)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="38.288"
                cy="32.3058"
                r="1.39737"
                transform="rotate(-90 38.288 32.3058)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="1.39737"
                cy="20.0086"
                r="1.39737"
                transform="rotate(-90 1.39737 20.0086)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="13.6943"
                cy="20.0086"
                r="1.39737"
                transform="rotate(-90 13.6943 20.0086)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="25.9911"
                cy="20.0086"
                r="1.39737"
                transform="rotate(-90 25.9911 20.0086)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="38.288"
                cy="20.0086"
                r="1.39737"
                transform="rotate(-90 38.288 20.0086)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
            </svg>
          </span>
          <span className="absolute bottom-0 left-0">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="1.39737"
                cy="44.6026"
                r="1.39737"
                transform="rotate(-90 1.39737 44.6026)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="1.39737"
                cy="7.9913"
                r="1.39737"
                transform="rotate(-90 1.39737 7.9913)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="13.6943"
                cy="44.6026"
                r="1.39737"
                transform="rotate(-90 13.6943 44.6026)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="13.6943"
                cy="7.9913"
                r="1.39737"
                transform="rotate(-90 13.6943 7.9913)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="25.9911"
                cy="44.6026"
                r="1.39737"
                transform="rotate(-90 25.9911 44.6026)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="25.9911"
                cy="7.9913"
                r="1.39737"
                transform="rotate(-90 25.9911 7.9913)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="38.288"
                cy="44.6026"
                r="1.39737"
                transform="rotate(-90 38.288 44.6026)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="38.288"
                cy="7.9913"
                r="1.39737"
                transform="rotate(-90 38.288 7.9913)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="1.39737"
                cy="32.3058"
                r="1.39737"
                transform="rotate(-90 1.39737 32.3058)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="13.6943"
                cy="32.3058"
                r="1.39737"
                transform="rotate(-90 13.6943 32.3058)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="25.9911"
                cy="32.3058"
                r="1.39737"
                transform="rotate(-90 25.9911 32.3058)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="38.288"
                cy="32.3058"
                r="1.39737"
                transform="rotate(-90 38.288 32.3058)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="1.39737"
                cy="20.0086"
                r="1.39737"
                transform="rotate(-90 1.39737 20.0086)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="13.6943"
                cy="20.0086"
                r="1.39737"
                transform="rotate(-90 13.6943 20.0086)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="25.9911"
                cy="20.0086"
                r="1.39737"
                transform="rotate(-90 25.9911 20.0086)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
              <circle
                cx="38.288"
                cy="20.0086"
                r="1.39737"
                transform="rotate(-90 38.288 20.0086)"
                fill="white"
                fillOpacity="0.44"
              ></circle>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;

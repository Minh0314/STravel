"use client";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
library.add(faStar);

function ForYou() {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const listCountries = useSelector((state) => state.preferential.countries);
  const itemDetail = listCountries[0];

  const { name, img, title, tour, price, star } = itemDetail;
  const left = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const right = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  function StarRating(star) {
    const totalStars = 5; // Tổng số sao tối đa

    const renderStars = () => {
      const stars = [];

      // Render sao đã tô màu
      for (let i = 0; i < star; i++) {
        stars.push(
          <FontAwesomeIcon icon={faStar} className="text-orange-400" key={i} />
        );
      }

      // Render sao chưa tô màu
      for (let i = star; i < totalStars; i++) {
        stars.push(
          <FontAwesomeIcon
            icon={faRegularStar}
            key={i}
            className="text-orange-400"
          />
        );
      }

      return stars;
    };

    return <div className="flex">{renderStars()}</div>;
  }

  return (
    <div
      className={
        "my-32 w-full flex flex-col items-center justify-center" +
        (darkTheme ? "bg-[#333]" : "")
      }
    >
      <div className="w-10/12 flex flex-col justify-content-center ">
        <div className="flex gap-4 items-center justify-center pb-6">
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12  p-2 rounded text-center ">
            C
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            H
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            O
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            {" "}
            B
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            Ạ
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            N
          </span>
        </div>

        <motion.div
          className={`col-span-1 rounded-xl flex flex-col transition duration-150 ease-linear hover:shadow-2xl ${
            darkTheme ? "bg-gray-800" : "bg-white"
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={left}
        >
          <div className="detail  w-12/12 mx-auto max-h-60 overflow-hidden p-2">
            <div className="mx-auto  w-full">
              <Image
                src={img[0].url}
                alt="detail"
                className="object-cover rounded-xl"
                width={1600}
                height={700}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          className={`col-span-1 rounded-xl flex flex-col transition duration-150 ease-linear hover:shadow-2xl ${
            darkTheme ? "bg-gray-800" : "bg-white"
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={right}
        >
          <div className="desc flex flex-col gap-2 p-5">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                className=" text-orange-400"
              />
              <span className="text-xl font-medium"> {name}</span>
            </div>
            <span className="text-gray-500 text-lg">{title}</span>
            <span className="text-gray-500 text-lg"></span>
            <span>{StarRating(star)}</span>
            <button className="w-40 h-10 bg-orange-400 text-white rounded">
              <Link href={"/locations/ha-noi"}>Đặt ngay</Link>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ForYou;

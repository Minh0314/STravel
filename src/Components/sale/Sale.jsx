"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
library.add(faStar);

function Sale() {
  const listCountries = useSelector((state) => state.preferential.countries);
  const newListCountries = listCountries.slice(0, 4);
  const twoCountries = listCountries.slice(3, 6);

  const darkTheme = useSelector((state) => state.theme.darkTheme);

  const [isClient, setIsClient] = useState(false);
  const bottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  useEffect(() => {
    setIsClient(true);
  }, []);

  function formatCurrency(price) {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }

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

  if (!isClient) {
    return null; // Hoặc một loading spinner
  }

  return (
    <div
      className={` my-32   w-full flex flex-col items-center justify-center ${
        darkTheme ? "bg-[#333]" : ""
      }`}
      id="sale"
    >
      <div className="w-10/12 flex flex-col  ">
        <div className="flex gap-4 items-center justify-center py-5">
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center">
            Ư
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center">
            U
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center">
            Đ
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center">
            Ã
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center">
            I
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {newListCountries.map((item, index) => (
            <motion.div
              key={index}
              className={`col-span-1 rounded-xl flex flex-col transition duration-150 ease-linear hover:shadow-2xl ${
                darkTheme ? "bg-gray-800" : "bg-white"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={bottom}
            >
              <div className="p-3 shadow-lg">
                <Image
                  className="h-72 w-full object-cover rounded-xl"
                  src={item.img[0].url}
                  alt="detail"
                  width={1200}
                  height={1000}
                  priority={true}
                />

                <div className="flex flex-col gap-2 pb-3 mt-3">
                  <div
                    className={`text-xl font-medium ${
                      darkTheme ? "text-orange-400" : ""
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className=" text-orange-400"
                    />
                    {item.name}
                  </div>
                  <span className="text-gray-500 text-lg">{item.title}</span>
                  <span className="text-gray-500 text-lg">{item.tour}</span>

                  {StarRating(item.star)}
                  <span
                    className={`text-xl ${darkTheme ? "text-orange-400" : ""}`}
                  >
                    {formatCurrency(item.price)}
                  </span>
                </div>
                <button className="w-40 h-10 bg-orange-400 text-white rounded">
                  <Link href={`/locations/${item.keyword}`}>Đặt ngay</Link>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
          {twoCountries.map((item, index) => (
            <motion.div
              key={index}
              className={`col-span-1 rounded-xl flex flex-col transition duration-150 ease-linear hover:shadow-2xl ${
                darkTheme ? "bg-gray-800" : "bg-white"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={bottom}
            >
              <div key={index} className="p-3 shadow-lg">
                <Image
                  className="h-80 w-full object-cover rounded-xl"
                  src={item.img[1].url}
                  alt=""
                  width={1200}
                  height={1000}
                  priority={true}
                />
                <div className="flex flex-col gap-2 pb-3">
                  <div
                    className={`text-xl font-medium ${
                      darkTheme ? "text-orange-400" : ""
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className=" text-orange-400"
                    />
                    {item.name}
                  </div>
                  <span className="text-gray-500 text-lg h-4">
                    {item.title}
                  </span>
                  <span className="text-gray-500 text-lg">{item.tour}</span>
                  {StarRating(item.star)}
                  <span
                    className={`text-xl ${darkTheme ? "text-orange-400" : ""}`}
                  >
                    {formatCurrency(item.price)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sale;

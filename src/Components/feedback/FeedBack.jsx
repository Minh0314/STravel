"use client";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
function FeedBack() {
  const users = useSelector((state) => state.users.users);
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  function StarRating(star, size) {
    const totalStars = 5;

    const renderStars = () => {
      const stars = [];

      for (let i = 0; i < star; i++) {
        stars.push(
          <FontAwesomeIcon
            icon={faStar}
            className={`text-orange-400 mr-2 text-${size}`}
            key={i}
          />
        );
      }

      for (let i = star; i < totalStars; i++) {
        stars.push(
          <FontAwesomeIcon
            icon={faRegularStar}
            className={`text-orange-400 mr-2 text-${size}`}
            key={i}
          />
        );
      }

      return stars;
    };

    return <div className="flex">{renderStars()}</div>;
  }

  return (
    <div
      className={"pb-20 py-6 px-28 w-full " + (darkTheme ? "bg-[#333]" : "")}
      id="feedback"
    >
      <div className="p-4 ">
        <div className="flex gap-4 items-center justify-center pb-8">
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12  p-2 rounded text-center ">
            Đ
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            Á
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            N
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            H
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            G
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            I
          </span>
          <span className="text-orange-400 text-3xl font-bold bg-orange-200 w-12 p-2 rounded text-center ">
            Á
          </span>
        </div>

        <div className="form-feedback  grid gird-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 ">
          <div className=" flex flex-col gap-3 items-center ">
            <span className="text-3xl font-medium text-orange-400 pb-2">
              Đánh Giá Chuyến Đi Của Bạn
            </span>
            {StarRating(5, "3xl")}
          </div>

          <div className=" flex-col gap-3 lg:w-full">
            <textarea
              id="message"
              rows="4"
              name=""
              className="w-full min-h-36 border border-orange-400 p-3"
              placeholder="Viết Đánh Giá Của Bạn"
            ></textarea>
            <button className="w-full py-3 bg-orange-400 text-white">
              Gửi Tới Chúng Tôi
            </button>
          </div>
        </div>

        <div className="form-user">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {users.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full h-80  shadow-xl py-5 px-9 flex flex-col items-center m-5 ">
                    <div className="flex sm:flex-row md:flex-col">
                      <Image
                        className="rounded-full"
                        src={item.avatar}
                        alt="user"
                        width={100}
                        height={100}
                      />
                    </div>

                    <div className="text-xl font-semibold h-2/5 text-white mt-2">
                      {item.name}
                    </div>
                    <div className="text-center text-gray-500 h-1/5">
                      {item.comment}
                    </div>
                    <div className=" h-2/5  flex items-center">
                      {StarRating(item.star, "lg")}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;

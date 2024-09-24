"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "@/redux/slice/themeSlice";
import FormContact from "./contact/FormContact";

import {
  faXmark,
  faBars,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(false);
  };
  const showMenu = () => {
    setIsModalOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsModalOpen(false);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <header className="w-full  sm:px-4 lg:px-24 py-5 bg-[rgba(30,29,29,0.9)] fixed z-20">
      <div className="relative  flex sm:flex md:grid grid-cols-12 items-center justify-between text-white">
        <button
          onClick={showMenu}
          className="md:hidden grid place-items-center"
        >
          {isModalOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <div className="col-span-2 logo text-2xl font-bold">
          <span className="text-orange-400">S</span>TRAVEL
        </div>

        <nav className="hidden md:grid col-span-8 nav-link">
          <ul className="grid grid-cols-7 gap-3 md:text-lg lg:text-xl">
            <li className="cursor-pointer">
              <Link href="/" passHref>
                <span onClick={handleClick}>Trang chủ</span>
              </Link>
            </li>
            <li className="cursor-pointer">
              <ScrollLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-200}
              >
                About
              </ScrollLink>
            </li>
            <li className="cursor-pointer">
              <ScrollLink
                activeClass="active"
                to="destination"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-70}
              >
                Điểm Đến
              </ScrollLink>
            </li>
            <li className="cursor-pointer">
              <ScrollLink
                activeClass="service"
                to="service"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-70}
              >
                Dịch Vụ
              </ScrollLink>
            </li>
            <li className="cursor-pointer">
              <ScrollLink
                activeClass="active"
                to="photo"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-70}
              >
                Ảnh
              </ScrollLink>
            </li>
            <li className="cursor-pointer">
              <ScrollLink
                activeClass="active"
                to="blogs"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-70}
              >
                Blogs
              </ScrollLink>
            </li>
          </ul>
        </nav>

        <div className="col-span-2 group-btn flex items-center space-x-4 justify-end sm:right-0">
          <button onClick={handleSetTheme}>
            {darkTheme ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
          <button className="bg-orange-400 px-5 py-2 rounded-xl text-white">
            Đặt ngay
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="nav-bar absolute top-full w-full left-0 bg-[rgba(51,51,51,0.75)] transition-all duration-450 ease-in-out transform scale-y-100 origin-top">
          <ul className="grid grid-cols-1 gap-3 text-lg">
            <li className="cursor-pointer bg-[rgba(21,21,21,0.75)] text-white py-2 px-2">
              <ScrollLink
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-70}
              >
                Trang chủ
              </ScrollLink>
            </li>
            <li className="cursor-pointer bg-[rgba(21,21,21,0.75)] text-white py-2 px-2">
              <ScrollLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-70}
              >
                Đặt Lịch
              </ScrollLink>
            </li>
            <li className="cursor-pointer bg-[rgba(21,21,21,0.75)] text-white py-2 px-2">
              <ScrollLink
                activeClass="active"
                to="destination"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-70}
              >
                Ưu Đãi
              </ScrollLink>
            </li>
            <li className="cursor-pointer bg-[rgba(21,21,21,0.75)] text-white py-2 px-2">
              <ScrollLink
                activeClass="active"
                to="service"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-70}
              >
                Dịch Vụ
              </ScrollLink>
            </li>
            <li className="cursor-pointer bg-[rgba(21,21,21,0.75)] text-white py-2 px-2">
              <ScrollLink
                activeClass="active"
                to="library"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-70}
              >
                Thư Viện
              </ScrollLink>
            </li>
            <li className="cursor-pointer bg-[rgba(21,21,21,0.75)] text-white py-2 px-2">
              <ScrollLink
                activeClass="active"
                to="feedback"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-70}
              >
                Đánh Giá
              </ScrollLink>
            </li>
            <li className="cursor-pointer bg-[rgba(21,21,21,0.75)] text-white py-2 px-2">
              <ScrollLink
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleClick}
                offset={-70}
              >
                Liên Hệ
              </ScrollLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;

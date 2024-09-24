"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "@/redux/slice/themeSlice";
import Link from "next/link";

function NavBar() {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const handleSetTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <header className={`fixed w-full z-10 bg-[rgba(30,29,29,0.9)] text-white`}>
      <div className="container mx-auto flex justify-between items-center p-4 ">
        <div className="text-2xl font-bold">
          <span className="text-orange-400">S</span>TRAVEL
        </div>
        <nav className="hidden sm:flex md:flex space-x-4 text-white">
          <ScrollLink
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={`cursor-pointer ${
              darkTheme ? "text-white" : ""
            } hover:text-gray-900`}
            onClick={handleClick}
          >
            Trang chủ
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="preferential"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={`cursor-pointer ${
              darkTheme ? "text-white" : ""
            } hover:text-gray-900`}
            onClick={handleClick}
          >
            Đặt Lịch
          </ScrollLink>

          <ScrollLink
            activeClass="active"
            to="sale"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={`cursor-pointer ${
              darkTheme ? "text-white" : ""
            } hover:text-gray-900`}
            onClick={handleClick}
          >
            Ưu Đãi
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={`cursor-pointer ${
              darkTheme ? "text-white" : ""
            } hover:text-gray-900`}
            onClick={handleClick}
          >
            Dịch Vụ
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="library"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={`cursor-pointer ${
              darkTheme ? "text-white" : ""
            } hover:text-gray-900`}
            onClick={handleClick}
          >
            Thư Viện
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="feedback"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={`cursor-pointer ${
              darkTheme ? "text-white" : ""
            } hover:text-gray-900`}
            onClick={handleClick}
          >
            Đánh Giá
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={`cursor-pointer ${
              darkTheme ? "text-white" : ""
            } hover:text-gray-900`}
            onClick={handleClick}
          >
            Liên Hệ
          </ScrollLink>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none ${darkTheme ? "text-white" : ""}`}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
        <div className="hidden sm:flex md:flex items-center space-x-4">
          <button
            onClick={handleSetTheme}
            className={`focus:outline-none ${darkTheme ? "text-white" : ""}`}
          >
            <FontAwesomeIcon icon={darkTheme ? faSun : faMoon} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          className={`md:hidden bg-white shadow-md ${
            darkTheme ? "bg-gray-800" : "bg-white"
          }`}
        >
          <ScrollLink
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={`block px-4 py-2 ${
              darkTheme ? "text-white" : ""
            } hover:bg-gray-100`}
            onClick={handleClick}
          >
            Trang chủ
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="preferential"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={`block px-4 py-2 ${
              darkTheme ? "text-white" : ""
            } hover:bg-gray-100`}
            onClick={handleClick}
          >
            Đặt Lịch
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="sale"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={`block px-4 py-2 ${
              darkTheme ? "text-white" : ""
            } hover:bg-gray-100`}
            onClick={handleClick}
          >
            Ưu đãi
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={`block px-4 py-2 ${
              darkTheme ? "text-white" : ""
            } hover:bg-gray-100`}
            onClick={handleClick}
          >
            Dịch Vụ
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="library"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={`block px-4 py-2 ${
              darkTheme ? "text-white" : ""
            } hover:bg-gray-100`}
            onClick={handleClick}
          >
            Thư Viện
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="feedback"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={`block px-4 py-2 ${
              darkTheme ? "text-white" : ""
            } hover:bg-gray-100`}
            onClick={handleClick}
          >
            Đánh Giá
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={`block px-4 py-2 ${
              darkTheme ? "text-white" : ""
            } hover:bg-gray-100`}
            onClick={handleClick}
          >
            Liên Hệ
          </ScrollLink>
          <div className="flex justify-center py-2">
            <button
              onClick={handleSetTheme}
              className={`focus:outline-none ${darkTheme ? "text-white" : ""}`}
            >
              <FontAwesomeIcon icon={darkTheme ? faSun : faMoon} />
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

export default NavBar;

"use client";

import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "@/redux/slice/isLoading";
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Destination from "./components/Destination";
import Service from "./components/Service";
import Photo from "./components/Photo";
import FeedBack from "./components/FeedBack";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";

function Page({ params }) {
  const { slug } = params;
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const listLocation = useSelector((state) => state.preferential.countries);
  const isLoading = useSelector((state) => state.loading.isLoading);
  // const isLoading = true;
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideLoading());
    }, 2000);

    dispatch(showLoading());

    const foundLocation = listLocation.find((item) => item.keyword === slug[0]);
    if (foundLocation) {
      setLocationData(foundLocation);
      dispatch(hideLoading());
    }
  }, [listLocation, slug, dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen  text-orange-400">
        <ReactLoading
          type="spin"
          width={50}
          height={50}
          color="#FFA502"
          className="text-orange-400"
        />
      </div>
    );
  }

  return (
    <div className={`${darkTheme ? "bg-black" : "bg-white"} `}>
      <Home data={locationData} />
      <About />
      <Destination data={locationData} />
      <Service />
      <Photo />
      <FeedBack />
      <BlogPost data={locationData} />
      <Footer />
    </div>
  );
}

export default Page;

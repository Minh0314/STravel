"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
function RenderLibrary() {
  const listCountries = useSelector((state) => state.preferential.countries);

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-10">
        {listCountries?.slice(8, 16).map((item, index) => {
          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg h-64 group"
            >
              {/* <Image
                src={item.img[2].url}
                alt={`Gallery image ${index + 1}`}
                className="relative object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                objectFit="cover"
                width={1200}
                height={1000}
                priority={true}
              /> */}

              <Image
                src={item.img[2].url}
                alt={`Gallery image ${index + 1}`}
                className="relative w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={true}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-orange-400 text-xl font-bold mb-2">
                  Ảnh Chụp
                </span>
                <span className="mb-2 text-center">
                  Những bức ảnh đẹp nhất về chuyến đi được chia sẻ tại đây
                </span>
                <button className="bg-orange-400 rounded-xl px-5 py-2 text-white">
                  Xem Thêm
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RenderLibrary;

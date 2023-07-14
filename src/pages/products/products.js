import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import Star from "../../components/star";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Mens1 from "../../assets/Kamal0729.jpg";
import Mens2 from "../../assets/Kamal0605.jpg";
import { useParams } from "react-router-dom";
import { ProductData } from "../../components/Date/ProductData";

import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { AiOutlinePlayCircle } from "react-icons/ai";
import ReactPlayer from "react-player";

const Products = () => {
  const [imageSlide, setImageSlide] = useState(0);
  const [productData, setProductData] = useState();

  const [videoplayer, setvideoPlayer] = useState(false);

  const params = useParams();

  const getProData = () => {
    return ProductData.map((prod) => {
      if (params.category === "womens") {
        return prod.product_women.map((prodD) => {
          let Altername = prodD.name?.toLowerCase().split(" ").join("-");
          if (params.id.toLowerCase() === Altername) {
            // console.log(prodD);
            setProductData(prodD);
          }
        });
      } else {
        return prod.product_mens.map((prodD) => {
          let Altername = prodD.name?.toLowerCase().split(" ").join("-");
          if (params.id.toLowerCase() === Altername) {
            // console.log(prodD);
            setProductData(prodD);
          }
        });
      }
    });
  };

  useEffect(() => {
    getProData();
  }, []);

  const LeftControl = (
    <div className="bg-gray-200 hover:outline outline-2 outline-gray-600 flex items-center justify-center rounded-full">
      <GoChevronLeft size={40} className="p-1" />
    </div>
  );
  const RightControl = (
    <div className="bg-gray-200 hover:outline outline-2 outline-gray-600 flex items-center justify-center rounded-full">
      <GoChevronRight size={40} className="p-1" />
    </div>
  );

  return (
    <div className="w-full ">
      <div className="grid grid-rows-6 md:grid-rows-4 md:grid-cols-12 md:gap-3 px-6 h-screen">
        <div className="hidden md:block md:col-span-1">
          <div className="flex flex-col items-center">
            {productData?.ImagesList.map((img, index) => {
              return (
                <img
                  className={`p-1 ${
                    index === imageSlide ? "opacity-100" : "opacity-50"
                  } hover:opacity-100 transition-all ease-in-out w-32 h-32 md:w-full md:h-full`}
                  key={index}
                  src={img}
                  width={"100%"}
                  height={"100%"}
                  onClick={() => {
                    setvideoPlayer(false);
                    setImageSlide(index);
                  }}
                />
              );
            })}
            <div
              className="relative hover:cursor-pointer group"
              onClick={() => setvideoPlayer(true)}
            >
              <img
                className={`p-1 opacity-50  group-hover:opacity-100 transition-all ease-in-out w-32 h-32 md:w-full md:h-full`}
                src={
                  "https://mandalascrubs.com/cdn/shop/products/Jogger_Pants_A_MANDALA_ECOM_CS_Top1_CeilBlue_1178_600x.jpg?v=1624829195"
                }
                width={"100%"}
                height={"100%"}
              />
              <div className=" w-5 h-5 absolute top-8 right-8 ">
                <AiOutlinePlayCircle size={25} />
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-2 md:row-span-6 md:col-span-8 ">
          {videoplayer ? (
            <video autoplay="" loop="">
              <source src="../../assets/ASHLEYPANTS.mp4" type="video/mp4" />
            </video>
          ) : (
            // <ReactPlayer
            //   url={[
            //     {
            //       src: require("../../assets/ASHLEYPANTS.mp4"),
            //       type: "video/mp4",
            //     },
            //   ]}
            //   controls
            // />
            <Carousel
              slide={false}
              indicators={false}
              leftControl={LeftControl}
              rightControl={RightControl}
            >
              {productData?.ImagesList.map((img, index) => {
                return (
                  <img
                    className={`object-contain h-full w-full `}
                    key={index}
                    src={img}
                    width={"100%"}
                    height={"100%"}
                  />
                );
              })}
            </Carousel>
          )}
          {/* <div className="w-full h-full overflow-hidden rounded-sm ">
          <img src={images[imageSlide]} width={"100%"} height={"100%"} />
        </div> */}
        </div>
        <div className="row-span-1 md:row-span-2 md:col-span-3">
          <div>
            <h4 className="text-3xl">{params?.id}</h4>
          </div>
          <div className="flex items-center my-5 ">
            {Array.from(Array(5)).map((items, index) => {
              return (
                <div key={index}>
                  <Star />
                </div>
              );
            })}
            {/* <h4 className="text-sm">(37,751 Reviews)</h4> */}
          </div>
          <div>
            <h4 className="text-2xl">{productData?.price}</h4>
          </div>
          <div className="flex item-center">
            <h4 className="text-sm p-0.5 px-3 m-1 rounded-md font-medium  border border-spacing-2 border-gray-300 text-gray-500">
              New
            </h4>
            <h4 className="text-sm p-0.5 px-3 m-1 rounded-md font-medium border border-spacing-2 border-gray-300 text-gray-500">
              Limited Edition
            </h4>
          </div>
          <div className="my-3">
            <h3 className="text-base">CLASSIC</h3>
            <div className="mt-2 flex items-center">
              <div className="w-4 h-4 rounded-full bg-black mx-2 outline outline-offset-2 outline-0 hover:outline-1 "></div>
              {/* <div className="w-5 h-5 rounded-full bg-blue-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-green-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-yellow-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-red-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-pink-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div> */}
            </div>
          </div>
          {/* Classic */}
          <div className="my-3">
            <h3 className="text-base">ICONIC</h3>
            <div className="mt-2 flex items-center">
              <div className="w-4 h-4 rounded-full bg-black mx-2 outline outline-offset-2 outline-0 hover:outline-1 "></div>
              {/* <div className="w-5 h-5 rounded-full bg-blue-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-green-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-yellow-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-red-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-pink-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div> */}
            </div>
          </div>
          {/* Injection */}
          <div className="my-3">
            <h3 className="text-base">INJECTION</h3>
            <div className="mt-2 flex items-center">
              <div className="w-4 h-4 rounded-full bg-black mx-2 outline outline-offset-2 outline-0 hover:outline-1 "></div>
              {/* <div className="w-5 h-5 rounded-full bg-blue-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-green-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-yellow-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-red-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-pink-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div> */}
            </div>
          </div>
          {/* Sizes */}
          <div className="">
            <h3 className="text-base">SIZES</h3>

            <div className="flex item-center">
              <h4 className="text-sm p-1.5 px-3 m-1 hover:bg-gray-200 hover:cursor-pointer  rounded-md font-medium  border border-spacing-2 border-gray-300 text-gray-500">
                S
              </h4>
              <h4 className="text-sm p-1.5 px-3 m-1 hover:bg-gray-200 hover:cursor-pointer  rounded-md font-medium border border-spacing-2 border-gray-300 text-gray-500">
                M
              </h4>
              <h4 className="text-sm p-1.5 px-3 m-1 hover:bg-gray-200 hover:cursor-pointer  rounded-md font-medium border border-spacing-2 border-gray-300 text-gray-500">
                L
              </h4>
              <h4 className="text-sm p-1.5 px-3 m-1 hover:bg-gray-200 hover:cursor-pointer  rounded-md font-medium border border-spacing-2 border-gray-300 text-gray-500">
                X
              </h4>
              <h4 className="text-sm p-1.5 px-3 m-1 hover:bg-gray-200 hover:cursor-pointer  rounded-md font-medium border border-spacing-2 border-gray-300 text-gray-500">
                XXL
              </h4>
            </div>
            <div className="flex flex-col items-center mt-3 ">
              <div className="bg-black text-white w-full text-center py-3 rounded-md hover:bg-gray-900 hover:cursor-pointer ">
                <p className="text-sm">ADD TO BAG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-evenly mt-14">
        <div className="flex flex-col items-center p-20">
          <div className="mb-3">
            <img
              src="https://images.ctfassets.net/5j6wpslh72e4/JY4MM2RQjWzrmNx4jPQNY/0fe7ae049eaf125d3431e93edb3accdd/FIGS_Fabric_Icons_ClassicFit.png"
              width={40}
              height={40}
            />
          </div>
          <h3 className="text-xs">CLASSIC FIT</h3>
        </div>
        <div className="w-20 h-0.5 md:w-0.5 md:h-20 bg-gray-600"></div>
        <div className="flex flex-col items-center p-20">
          <div className="mb-3">
            <img
              src="https://images.ctfassets.net/5j6wpslh72e4/BiW7KWk3KwyPSNujJXTZi/ae1fb2611eda4619745e078b30dc76ea/icon-supersoft.svg"
              width={40}
              height={40}
            />
          </div>
          <h3 className="text-xs">CLASSIC FIT</h3>
        </div>
        <div className="w-20 h-0.5 md:w-0.5 md:h-20 bg-gray-600"></div>
        <div className="flex flex-col items-center p-20">
          <div className="mb-3">
            <img
              src="https://images.ctfassets.net/5j6wpslh72e4/1bcTq6qRNPBHPsqoJOADa8/80ca4177536b7c3cf494f9e9015c5ba2/icon-pocket.svg"
              width={40}
              height={40}
            />
          </div>
          <h3 className="text-xs">3 POCKETS</h3>
        </div>
        <div className="w-20 h-0.5 md:w-0.5 md:h-20 bg-gray-600"></div>

        <div className="flex flex-col items-center p-20">
          <div className="mb-3">
            <img
              src="https://images.ctfassets.net/5j6wpslh72e4/6J3kIc4yq5lYvto7yDVBnP/f305e339b6e0f9735dd0fd6111f07c4c/icon-antiwrinkle.svg"
              width={40}
              height={40}
            />
          </div>
          <h3 className="text-xs">ANTI-WRINKLE</h3>
        </div>
      </div>
      <h4 className="text-xl px-10 mt-10 font-bold ">
        Don't Forget to Check These
      </h4>
      <div className="flex overflow-x-scroll md:overflow-x-hidden overflow-y-hidden px-10">
        {productData?.suggestions.map((sugg) => {
          return (
            <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
              <div
                className=" h-96 w-64 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${sugg.Image})`,
                }}
              ></div>
              <div className="w-64 mt-3 ">
                <h2 className="text-sm text-blue-600 font-bold cursor-pointer mb-3">
                  BEST SELLER
                </h2>
                <h2 className="text-lg text-gray-900 font-bold cursor-pointer mb-3">
                  {sugg.name}
                </h2>
                <h2 className="text-md text-gray-900 font-extrabold cursor-pointer mb-3">
                  Black
                </h2>
                <h2 className="text-md text-gray-900 font-medium cursor-pointer">
                  {sugg.price}
                </h2>
              </div>
            </div>
          );
        })}
        {/* <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
          <div
            className=" h-96 w-64  bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${Mens2})`,
            }}
          ></div>
          <div className="w-64 mt-3 ">
            <h2 className="text-sm text-blue-600 font-bold cursor-pointer mb-3">
              BEST SELLER
            </h2>
            <h2 className="text-lg text-gray-900 font-bold cursor-pointer mb-3">
              Catarina™ One-Pocket Scrub Top
            </h2>
            <h2 className="text-md text-gray-900 font-extrabold cursor-pointer mb-3">
              Black
            </h2>
            <h2 className="text-md text-gray-900 font-medium cursor-pointer">
              $38.00
            </h2>
          </div>
        </div> */}
        {/* <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
          <div
            className=" h-96 w-64  bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${Mens1})`,
            }}
          ></div>
          <div className="w-64 mt-3 ">
            <h2 className="text-sm text-blue-600 font-bold cursor-pointer mb-3">
              BEST SELLER
            </h2>
            <h2 className="text-lg text-gray-900 font-bold cursor-pointer mb-3">
              Catarina™ One-Pocket Scrub Top
            </h2>
            <h2 className="text-md text-gray-900 font-extrabold cursor-pointer mb-3">
              Black
            </h2>
            <h2 className="text-md text-gray-900 font-medium cursor-pointer">
              $38.00
            </h2>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Products;

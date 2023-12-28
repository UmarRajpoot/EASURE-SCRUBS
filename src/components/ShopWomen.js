import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../Config/URL";
import { Image } from "@chakra-ui/react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { IconButton } from "@chakra-ui/react";

const ShopWomen = () => {
  const [womenShop, setWomenShop] = useState([]);

  const getWomensProduct = async () => {
    return await axios
      .get(`${BASEURL}/Product`)
      .then((resp) => {
        // console.log(resp.data);

        setWomenShop(resp.data.response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  useEffect(() => {
    getWomensProduct();
  }, []);

  const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
    return (
      <IconButton
        opacity={isFirstItemVisible ? "0" : "1"}
        disabled={isFirstItemVisible}
        onClick={() => scrollPrev()}
        icon={<BsChevronLeft size={20} />}
        rounded={"full"}
        size={"lg"}
        m={"2"}
      />
    );
  };
  const RightArrow = () => {
    const { isLastItemVisible, scrollNext } =
      React.useContext(VisibilityContext);
    return (
      <IconButton
        opacity={isLastItemVisible ? "0" : "1"}
        disabled={isLastItemVisible}
        onClick={() => scrollNext()}
        icon={<BsChevronRight size={20} />}
        rounded={"full"}
        size={"lg"}
        m={"2"}
      />
    );
  };

  const Card_comp = ({ WTrend, index }) => {
    return (
      <Link
        to={`/products/${WTrend.productname.toLowerCase()}/women`}
        key={index.toString()}
      >
        <div className="md:py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
          <div className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center">
            <Image
              src={WTrend.productimage && WTrend.productimage[0]}
              // onLoad={() => console.log("loading")}
            />
            <div className="p-2 text-base font-bold text-gray-500 ">
              <h1>
                {WTrend.personname && WTrend?.personname[0]}
                {WTrend.personname &&
                  WTrend?.personname?.slice(1).toLowerCase()}
                -{WTrend.varientname && WTrend?.varientname?.toLowerCase()}-
                {WTrend.typename && WTrend?.typename?.toLowerCase()}-
                {WTrend.typestylename && WTrend?.typestylename[0]}
                {WTrend.typestylename &&
                  WTrend?.typestylename?.slice(1).toLowerCase()}
              </h1>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  const Arrows = () => (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "end",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }} className="mx-5">
        <Link to={"/scrubs/women"}>
          <h1 className="font-medium  mr-5 hover:underline hover:cursor-pointer">
            view all
          </h1>
        </Link>
        <LeftArrow />
        <RightArrow />
      </div>
    </div>
  );

  return (
    <div className="px-5 md:pl-32 my-10 md:my-14">
      <h3 className="text-gray-800 text-lg md:text-3xl font-bold">
        Shop Women
      </h3>
      {/* <div className="flex overflow-x-auto  overflow-y-hidden no-scrollbar w-full"> */}
      <ScrollMenu
        scrollContainerClassName="no-scrollbar"
        transitionBehavior={"smooth"}
        Header={Arrows}
      >
        {womenShop?.map((WTrend, index) => {
          if (WTrend.parentcategory === "WOMEN") {
            return <Card_comp WTrend={WTrend} index={index} />;
            // if (WTrend.trend === true || WTrend.trend === false) {
            //   // console.log(WTrend.displayImage);
            //   return (
            //     <Link
            //       to={`/products/${WTrend.productname.toLowerCase()}/women`}
            //       key={index.toString()}
            //     >
            //       <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
            //         <div className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center">
            //           <Image
            //             src={WTrend.productimage && WTrend.productimage[0]}
            //             // onLoad={() => console.log("loading")}
            //           />
            //           <div className="p-2 text-base font-bold text-gray-500 ">
            //             <h1>
            //               {WTrend.personname && WTrend?.personname[0]}
            //               {WTrend.personname &&
            //                 WTrend?.personname?.slice(1).toLowerCase()}
            //               -
            //               {WTrend.varientname &&
            //                 WTrend?.varientname?.toLowerCase()}
            //               -{WTrend.typename && WTrend?.typename?.toLowerCase()}-
            //               {WTrend.typestylename && WTrend?.typestylename[0]}
            //               {WTrend.typestylename &&
            //                 WTrend?.typestylename?.slice(1).toLowerCase()}
            //             </h1>
            //           </div>
            //         </div>
            //       </div>
            //     </Link>
            //   );
            // }
          }
        })}
        {/* <Link to={"/products/Bev-one-pocket-scrub-Top/women"}>
          <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
            <div
              className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${Women2})`,
              }}
            ></div>
          </div>
        </Link>
        <Link to={"/products/Vincent-classic-scrub-and-Top/women"}>
          <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
            <div
              className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${Women3})`,
              }}
            ></div>
          </div>
        </Link> */}
      </ScrollMenu>
      {/* </div> */}
    </div>
  );
};

export default ShopWomen;

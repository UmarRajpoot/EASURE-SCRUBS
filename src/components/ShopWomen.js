import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../Config/URL";
import { Image } from "@chakra-ui/react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { IconButton } from "@chakra-ui/react";
import { ProductState } from "../Store/Products/actions";
import { useDispatch } from "react-redux";

const ShopWomen = () => {
  const [womenShop, setWomenShop] = useState([]);

  const ShopwomenList = [
    "21044dbb-3be8-4c8c-aa36-84470d0b8bb3",
    "50e81ca6-2a68-4e47-bca2-6822bbf9eb9d",
    "e413e985-3977-463c-a83f-33cd584e9e2c",
    "36d8a10a-3ffe-4c4e-8aa8-4242dfcc3de2",
    "c8552fa8-1163-475b-8a61-d60ee247826f",
    "d8085138-a576-4070-ad7d-2c3c556b0f25",
    "3f9a826f-6694-482d-a96a-f37044198c26",
    "544a84dc-ec52-4b02-b4e7-8568e4aa8574",
  ];

  const dispatch = useDispatch();

  const getWomensProduct = async () => {
    return await axios
      .get(`${BASEURL}/Product`)
      .then((resp) => {
        // console.log(resp.data);
        dispatch(ProductState(resp.data.response));
        let temp_data = [];
        ShopwomenList.map((list_id) => {
          resp.data.response.filter((women_prod) => {
            if (women_prod.id === list_id) {
              return temp_data.push(women_prod);
            }
          });
        });
        setWomenShop(temp_data);
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

  const [onHover, setonHover] = useState("");

  const Card_comp = ({ WTrend, index }) => {
    return (
      <Link
        to={`/products/${WTrend.id}`}
        key={index.toString()}
        onMouseEnter={(e) => {
          const getIndexValue = womenShop[index];
          if (getIndexValue.id === WTrend.id) {
            setonHover(getIndexValue.id);
          }
        }}
        onMouseLeave={() => {
          // console.log("mouse leave", WTrend.id);
          setonHover("");
        }}
      >
        <div className="md:my-10 mx-3 hover:scale-100 transition-all ease-in-out duration-200 hover:drop-shadow-sm cursor-pointer w-72 h-96">
          <div className="h-full w-full rounded-lg bg-cover bg-no-repeat bg-center">
            {WTrend.productimage && onHover === WTrend.id ? (
              <Image
                src={WTrend.productimage[1]}
                // onLoad={() => console.log("loading")}
                className="h-full w-full"
              />
            ) : (
              <Image
                src={WTrend.productimage[0]}
                // onLoad={() => console.log("loading")}
                className="h-full w-full"
              />
            )}
            {/* <Image
              src={
                WTrend.productimage && onHover === WTrend.id
                  ? WTrend.productimage[1]
                  : WTrend.productimage[0]
              }
              // onLoad={() => console.log("loading")}
            /> */}
            <div className="p-2 text-base font-bold text-gray-500 ">
              <h1>
                {/* {WTrend.personname && WTrend?.personname[0]} */}
                {/* {WTrend.personname &&
                  WTrend?.personname?.slice(1).toLowerCase()} */}
                {WTrend.varientname && WTrend?.varientname?.toLowerCase()}-
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
        <Link to={"/viewall/scrubs/women"}>
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
        options={{ rootMargin: "20px" }}
      >
        {womenShop?.map((WTrend, index) => {
          if (WTrend.parentcategory === "WOMEN") {
            return (
              <Card_comp
                key={index.toString()}
                WTrend={WTrend}
                index={index.toString()}
              />
            );
          }
          return null;
        })}
      </ScrollMenu>
      {/* </div> */}
    </div>
  );
};

export default ShopWomen;

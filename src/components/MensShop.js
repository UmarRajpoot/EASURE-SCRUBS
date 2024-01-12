import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../Config/URL";
import axios from "axios";
import { Image } from "@chakra-ui/react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { IconButton } from "@chakra-ui/react";

const MensShop = () => {
  const [MensTrend, setMensTrend] = useState([]);

  const ShopmenList = [
    "7a7eb867-60d9-47f0-aa6d-96f413b7308f",
    "23e3dad3-66e8-4c51-a815-361dfda4a96c",
    "3fc48366-c37a-4075-8c09-d29272c67b99",
    "ba42e3b0-97f8-44fe-8ae2-26183baa228f",
    "0bd93b32-729c-4ddc-833e-3414514ca18c",
  ];

  const getMensTrending = async () => {
    return await axios
      .get(`${BASEURL}/Product`)
      .then((resp) => {
        // console.log(resp.data);
        let temp_data = [];
        ShopmenList.map((list_id) => {
          resp.data.response.filter((men_prod) => {
            if (men_prod.id === list_id) {
              return temp_data.push(men_prod);
            }
          });
        });
        setMensTrend(temp_data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  useEffect(() => {
    getMensTrending();
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

  const Card_comp = ({ mensT, index }) => {
    return (
      <Link
        to={`/products/${mensT.id}`}
        key={index.toString()}
        onMouseEnter={() => {
          const getIndexValue = MensTrend[index];
          if (getIndexValue.id === mensT.id) {
            setonHover(getIndexValue.id);
          }
        }}
        onMouseLeave={() => {
          // console.log("mouse leave", WTrend.id);
          setonHover("");
        }}
      >
        <div className="py-10 px-3 hover:scale-100 transition-all ease-in-out duration-200 hover:drop-shadow-sm cursor-pointer">
          <div className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center">
            {mensT.productimage && onHover === mensT.id ? (
              <Image
                src={mensT.productimage[1]}
                // onLoad={() => console.log("loading")}
                className="h-80 w-64"
              />
            ) : (
              <Image
                src={mensT.productimage[0]}
                // onLoad={() => console.log("loading")}
                className="h-80 w-64"
              />
            )}
            {/* <Image
              src={
                mensT.productimage && onHover === mensT.id
                  ? mensT.productimage[1]
                  : mensT.productimage[0]
              }
              // onLoad={() => console.log("loading")}
              className="h-80 w-64"
            /> */}
            <div className="p-2 text-base font-bold text-gray-500 ">
              <h1>
                {/* {mensT.personname && mensT?.personname[0]} */}
                {/* {mensT.personname && mensT?.personname?.slice(1).toLowerCase()} */}
                {/* {mensT.varientname !== "JOGGER" && "-"} */}
                {mensT.varientname !== "JOGGER" &&
                  mensT?.varientname?.toLowerCase()}
                -{mensT.typename && mensT?.typename?.toLowerCase()}-
                {mensT.typestylename && mensT?.typestylename[0]}
                {mensT.typestylename &&
                  mensT?.typestylename?.slice(1).toLowerCase()}
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
        <Link to={"/scrubs/men"}>
          <h1 className="font-medium underline mr-5">view all</h1>
        </Link>
        <LeftArrow />
        <RightArrow />
      </div>
    </div>
  );
  return (
    <div className="px-5 md:pl-32 my-10 md:my-14">
      <h3 className="text-gray-800 text-lg md:text-3xl font-bold">Mens Shop</h3>
      {/* <div className="flex overflow-x-auto  overflow-y-hidden no-scrollbar w-full"> */}
      <ScrollMenu
        scrollContainerClassName="no-scrollbar"
        transitionBehavior={"smooth"}
        Header={Arrows}
      >
        {MensTrend.map((mensT, index) => {
          if (mensT.parentcategory === "MEN") {
            return <Card_comp mensT={mensT} index={index} />;
          }
        })}
      </ScrollMenu>
      {/* <Link to={"/products/Lex-one-pocket-scrub-Top/mens"}>
          <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
            <div
              className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${Mens2})`,
              }}
            ></div>
          </div>
        </Link>
        <Link>
          <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
            <div
              className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${Mens3})`,
              }}-
            ></div>
          </div>
        </Link> */}
      {/* </div> */}
    </div>
  );
};

export default MensShop;

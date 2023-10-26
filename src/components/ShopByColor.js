import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../Config/URL";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { IconButton } from "@chakra-ui/react";

const ShopByColor = () => {
  const [allColors, setAllColors] = useState([]);

  const getallColors = async () => {
    return await axios
      .get(`${BASEURL}/Colors`)
      .then((resp) => {
        setAllColors(resp.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getallColors();
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

  // overflow-x-auto overflow-y-hidden no-scrollbar

  const Color_Card = ({ index, shBC }) => {
    const visibility = React.useContext(VisibilityContext);
    return (
      <Link
        to={`/collection/${shBC.name.toLowerCase()}-${shBC.colorType.toLowerCase()}-women`}
        key={index.toString()}
        tabIndex={0}
      >
        {/* <div>visible: {JSON.stringify(!!visibility.isItemVisible(index))}</div> */}
        <div className="py-3 px-3 hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer ">
          <div
            className=" h-96 w-80 rounded-lg bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${shBC.photo})`,
            }}
          ></div>
          <h5 className="text-gray-800 text-sm md:text-md font-semibold mt-2">
            {shBC.name}
          </h5>
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
      <div style={{ display: "flex" }} className="mx-5">
        <LeftArrow />
        <RightArrow />
      </div>
    </div>
  );

  return (
    <div className="px-5 md:pl-32 my-10 md:my-14 relative">
      <h3 className="text-gray-800 text-lg md:text-3xl font-bold">
        Shop By Color
      </h3>
      <ScrollMenu
        // LeftArrow={LeftArrow}
        // RightArrow={RightArrow}
        scrollContainerClassName="no-scrollbar"
        transitionBehavior={"smooth"}
        Header={Arrows}
      >
        {/* <div className="flex w-full no-scrollbar"> */}
        {allColors.map((shBC, index) => {
          return <Color_Card key={index} shBC={shBC} index={index} />;
        })}
        {/* </div> */}
      </ScrollMenu>
    </div>
  );
};

export default ShopByColor;

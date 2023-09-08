import React, { useEffect, useRef, useState } from "react";
// import { Carousel } from "flowbite-react";
import Star from "../../components/star";
import { useParams } from "react-router-dom";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { AiOutlinePlayCircle } from "react-icons/ai";
import ReactPlayer from "react-player";
import axios from "axios";
import { BASEURL } from "../../Config/URL";
import { useDispatch, useSelector } from "react-redux";
import { DrawerState } from "../../Store/Drawer/actions";
import { AddCartItem } from "../../Store/Cart/actions";
import { Box, Button, HStack, Text, useDisclosure } from "@chakra-ui/react";
import ReviewModel from "../../components/ReviewModel";
import Suggestion from "../../components/Suggestion";
import { GrStar } from "react-icons/gr";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Products = () => {
  const [imageSlide, setImageSlide] = useState(0);
  const [productData, setProductData] = useState([]);

  const [CarouselData, setCarouselData] = useState([]);

  const [allColors, setAllColors] = useState([]);
  const [allReviews, setAllReviews] = useState([]);

  const ReviewModelDis = useDisclosure();

  const Sizes = ["S", "M", "L", "XL", "XXL"];

  const [chooseSize, setchooseSize] = useState("");
  const [chooseColor, setchooseColor] = useState("");
  const [selectColor, setSelectColor] = useState("");

  const IsDrawerOpen = useSelector((state) => state.DrawerOptions.DrawerState);
  const CartItems = useSelector((state) => state.CartOptions.CartItems);

  const dispatch = useDispatch();

  const [videoplayer, setvideoPlayer] = useState(false);

  const params = useParams();
  const videoRef = useRef();

  useEffect(() => {
    if (selectColor !== "") {
      allColors.filter((filCol) => {
        if (filCol.colorcode === selectColor) {
          setchooseColor(filCol.name);
        }
      });
    }
  }, [selectColor]);

  const getAllColors = async () => {
    return await axios
      .get(`${BASEURL}/Colors`)
      .then((resp) => {
        setAllColors(resp.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllReviews = async (productID) => {
    return await axios
      .get(`${BASEURL}/Review/${productID}`)
      .then((resp) => {
        // console.log(resp.data);
        setAllReviews(resp.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const makeCarousel = (prodata) => {
    const images = prodata?.productimage.map((img) => {
      return {
        link: img,
        type: "image",
      };
    });
    setCarouselData([
      ...images,
      {
        link: prodata?.productvideo,
        type: "video",
      },
    ]);
    // setCarouselData([
    //   ...CarouselData,
    //   {
    //     link: prodata?.productvideo,
    //     type: "video",
    //   },
    // ]);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     videoRef.current.play();
  //   }, 3000);
  // }, []);

  const getProductData = async () => {
    return await axios
      .get(`${BASEURL}/Product/${params.id}`)
      .then((resp) => {
        // console.log(resp.data);
        // console.log(resp.data.response);
        getAllReviews(resp.data.response.id);
        setProductData(resp.data.response);
        makeCarousel(resp.data.response);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

  useEffect(() => {
    // getProData();
    getProductData();
    getAllColors();
  }, [params.id]);

  const colors = ["Black", "Navy-Blue", "Ceil-Blue"];

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
    <div className="w-full min-h-screen">
      <div className="flex flex-col md:flex-row px-3 min-h-screen ">
        {/* First Column */}
        <div className="w-full md:w-[8%] hidden overflow-auto md:block md:h-screen no-scrollbar">
          <div className="flex flex-row md:flex-col items-center ">
            {CarouselData?.map((data, index) => {
              if (data.type === "image") {
                return (
                  <img
                    // className={`p-1 object-contain h-full w-full`}
                    className={`p-1 ${
                      index === imageSlide ? "opacity-100" : "opacity-50"
                    } hover:opacity-100 transition-all ease-in-out w-32 h-32 md:w-full md:h-full`}
                    key={index}
                    src={data.link}
                    width={"100%"}
                    height={"100%"}
                    onClick={() => {
                      setImageSlide(index);
                    }}
                  />
                );
              } else {
                return (
                  <video
                    className="p-1"
                    ref={videoRef}
                    key={index}
                    autoPlay={true}
                    muted
                    loop
                    // controls
                    style={{ height: "100%", width: "100%" }}
                    onClick={() => {
                      setImageSlide(index);
                    }}
                  >
                    <source src={data.link} type="video/mp4" />
                  </video>
                );
              }
            })}
          </div>
        </div>
        {/* Second Column */}
        <div className="flex w-full md:w-[70%] md:mx-10 flex-col">
          <CarouselProvider
            naturalSlideWidth={150}
            naturalSlideHeight={125}
            totalSlides={CarouselData.length}
            currentSlide={imageSlide}
            className="relative"
          >
            <Slider>
              {CarouselData?.map((data, index) => {
                if (data.type === "image") {
                  return (
                    <Slide index={index}>
                      <img
                        className={`object-contain w-full h-full`}
                        key={index}
                        src={data.link}
                        width={"100%"}
                        height={"100%"}
                      />
                    </Slide>
                  );
                } else {
                  return (
                    <Slide index={index}>
                      <video
                        ref={videoRef}
                        key={index}
                        autoPlay={true}
                        playsInline
                        muted
                        loop
                        // controls
                        style={{ height: "100%", width: "100%" }}
                        src={data.link}
                      >
                        <source src={data.link} type="video/mp4" />
                      </video>
                    </Slide>
                  );
                }
              })}
            </Slider>
            {/* <div className="flex items-center justify-between absolute w-full top-0 left-0 bottom-0 right-0"> */}
            <ButtonBack className="absolute top-0 bottom-0 left-0 ">
              {LeftControl}
            </ButtonBack>
            <ButtonNext className="absolute top-0 bottom-0  right-0">
              {RightControl}
            </ButtonNext>
          </CarouselProvider>
          {/* First Mobile Column */}
          <div className="md:hidden overflow-auto flex flex-row items-center no-scrollbar my-10">
            {CarouselData?.map((data, index) => {
              if (data.type === "image") {
                return (
                  <img
                    // className={`p-1 object-contain h-full w-full`}
                    className={`p-1 ${
                      index === imageSlide ? "opacity-100" : "opacity-50"
                    } hover:opacity-100 transition-all ease-in-out w-32 h-32 md:w-full md:h-full `}
                    key={index}
                    src={data.link}
                    width={"100%"}
                    height={"100%"}
                    onClick={() => {
                      setImageSlide(index);
                    }}
                  />
                );
              } else {
                return (
                  <video
                    className="max-sm:p-2 w-32 h-32"
                    ref={videoRef}
                    key={index}
                    autoPlay
                    muted
                    loop
                    playsInline
                    // controls
                    // style={{ height: "50%", width: "50%" }}
                    onClick={() => {
                      setImageSlide(index);
                    }}
                    src={data.link}
                  >
                    <source
                      src={data.link}
                      type="video/mp4"
                      width={"100%"}
                      height={"100%"}
                    />
                  </video>
                );
              }
            })}
          </div>
        </div>
        {/* Third Column */}
        <div className=" flex flex-col w-full md:w-[20%] ">
          <div>
            <h4 className="text-3xl">
              {productData.personname && productData?.personname[0]}
              {productData.personname &&
                productData?.personname?.slice(1).toLowerCase()}
              {productData.parentcategory &&
                productData.parentcategory === "WOMEN" &&
                "-" + productData?.varientname?.toLowerCase()}
              {productData.parentcategory &&
                productData.parentcategory === "MEN" &&
                productData.varientname !== "JOGGER" &&
                "-" + productData?.varientname?.toLowerCase()}
              -{productData.typename && productData?.typename?.toLowerCase()}-
              {productData.typestylename && productData?.typestylename[0]}
              {productData.typestylename &&
                productData?.typestylename?.slice(1).toLowerCase()}
            </h4>
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
            <h4 className="text-2xl font-medium mb-5">
              ${productData?.price}.00
            </h4>
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
            <h3 className="text-base font-medium">CLASSIC</h3>
            <div className="mt-2 flex items-center">
              <div
                className={`w-5 h-5 rounded-full bg-black mx-2 ${
                  chooseColor === "BLACK" ? "outline-2" : "outline-0"
                } outline outline-offset-2 outline-0 hover:outline-1 hover:cursor-pointer`}
                onClick={() => setchooseColor("BLACK")}
              ></div>
              <div
                className={`w-5 h-5 rounded-full bg-[#000080] mr-2 ${
                  chooseColor === "NAVY-BLUE" ? "outline-2" : "outline-0"
                } outline outline-offset-2 outline-0 hover:outline-1 hover:cursor-pointer`}
                onClick={() => setchooseColor("NAVY-BLUE")}
              ></div>
              <div
                className={`w-5 h-5 rounded-full bg-[#92a1cf] mr-2 ${
                  chooseColor === "CEIL-BLUE" ? "outline-2" : "outline-0"
                } outline outline-offset-2 outline-0 hover:outline-1 hover:cursor-pointer`}
                onClick={() => setchooseColor("CEIL-BLUE")}
              ></div>
              {/* <div className="w-5 h-5 rounded-full bg-green-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-yellow-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-red-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-pink-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div> */}
            </div>
          </div>
          {/* <div className="my-3">
            <h3 className="text-base font-medium">ICONIC</h3>
            <div className="mt-2 flex items-center">
              <div className="w-5 h-5 rounded-full bg-black mx-2 outline outline-offset-2 outline-0 hover:outline-1 "></div>
              <div className="w-5 h-5 rounded-full bg-blue-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-green-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-yellow-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-red-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-pink-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
            </div>
          </div>
          <div className="my-3">
            <h3 className="text-base font-medium">INJECTION</h3>
            <div className="mt-2 flex items-center">
              <div className="w-5 h-5 rounded-full bg-black mx-2 outline outline-offset-2 outline-0 hover:outline-1 "></div>
              <div className="w-5 h-5 rounded-full bg-blue-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-green-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-yellow-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-red-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
              <div className="w-5 h-5 rounded-full bg-pink-600 mr-2 outline outline-offset-2 outline-0 hover:outline-1"></div>
            </div>
          </div> */}
          {/* {productData?.colors?.map((color, index) => {
            return (
              <div className="my-3" key={index}>
                <h3 className="text-base">{color.name}</h3>
                <div className="mt-2 flex items-center">
                  {color.colors?.map((col, xindex) => {
                    return (
                      <div
                        key={xindex}
                        style={{ backgroundColor: col }}
                        className={`w-4 h-4 rounded-full bg-[${col}] mr-2 ${
                          selectColor === col
                            ? "outline-4 outline-green-600"
                            : "outline-1"
                        } outline outline-offset-2 outline-0 hover:outline-1 hover:cursor-pointer`}
                        onClick={() => {
                          setSelectColor(col);
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            );
          })} */}

          {/* Sizes */}
          <div>
            <h3 className="text-normal font-medium my-3">SIZES</h3>

            <div className="flex item-center">
              {Sizes.map((size, index) => {
                return (
                  <button
                    key={index}
                    className={`text-sm p-1.5 px-3 m-1 ${
                      chooseSize === Sizes[index]
                        ? "bg-black text-white"
                        : "bg-transparent text-gray-500"
                    } hover:bg-black hover:text-white hover:cursor-pointer  rounded-md font-medium  border border-spacing-2 border-gray-300 `}
                    onClick={() => setchooseSize(size)}
                  >
                    {size}
                  </button>
                );
              })}

              {/* <h4 className="text-sm p-1.5 px-3 m-1 hover:bg-gray-200 hover:cursor-pointer  rounded-md font-medium  border border-spacing-2 border-gray-300 text-gray-500">
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
              </h4> */}
            </div>
            {/* <div className="flex item-center">
              {productData?.sizes?.map((size, index) => {
                return (
                  <h4
                    key={index.toString()}
                    className={`text-sm p-1.5 px-3 m-1 hover:bg-gray-100  hover:cursor-pointer rounded-md font-medium  border border-spacing-2 border-gray-300 ${
                      chooseSize === size
                        ? "hover:bg-gray-800"
                        : "text-gray-300"
                    } ${
                      chooseSize === size ? "text-gray-100" : "text-gray-600"
                    }  ${chooseSize === size ? "bg-gray-800" : "bg-gray-300"} `}
                    onClick={() => {
                      setchooseSize(size);
                    }}
                  >
                    {size}
                  </h4>
                );
              })}
            </div> */}
            <div
              className="flex flex-col items-center my-3 "
              onClick={() => {
                const item = {
                  productID: productData.id,
                  productimage: productData.productimage[0],
                  productname: productData.productname,
                  productsize: chooseSize,
                  productcolor: chooseColor,
                  productPrice: productData.price,
                  originalPrice: productData.price,
                  count: 1,
                };
                dispatch(AddCartItem(item));
                dispatch(DrawerState(!IsDrawerOpen));
                // if (chooseSize !== "" && chooseColor !== "") {
                // } else {
                //   alert("Choose Size and Color");
                // }
              }}
            >
              <div className="bg-black text-white w-full text-center py-3 rounded-md hover:bg-gray-900 hover:cursor-pointer">
                <p className="text-sm">Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features */}
      <div>
        <div className="bg-gray-100 flex flex-row items-center justify-between md:justify-evenly p-5 py-10 md:p-20 my-10">
          <div className="flex flex-col items-center">
            <div className="mb-3">
              <img
                src="https://images.ctfassets.net/5j6wpslh72e4/JY4MM2RQjWzrmNx4jPQNY/0fe7ae049eaf125d3431e93edb3accdd/FIGS_Fabric_Icons_ClassicFit.png"
                className="w-8 h-8 md:w-12 md:h-12"
              />
            </div>
            <h3 className="text-[10px] md:text-sm">CLASSIC FIT</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-3">
              <img
                src="https://images.ctfassets.net/5j6wpslh72e4/BiW7KWk3KwyPSNujJXTZi/ae1fb2611eda4619745e078b30dc76ea/icon-supersoft.svg"
                className="w-8 h-8 md:w-12 md:h-12"
              />
            </div>
            <h3 className="text-[10px] md:text-sm">RIDICULOUSLY SOFT</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-3">
              <img
                src="https://images.ctfassets.net/5j6wpslh72e4/1bcTq6qRNPBHPsqoJOADa8/80ca4177536b7c3cf494f9e9015c5ba2/icon-pocket.svg"
                className="w-8 h-8 md:w-12 md:h-12"
              />
            </div>
            <h3 className="text-[10px] md:text-sm">ANTI-WRINKLE</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-3">
              <img
                src="https://images.ctfassets.net/5j6wpslh72e4/6J3kIc4yq5lYvto7yDVBnP/f305e339b6e0f9735dd0fd6111f07c4c/icon-antiwrinkle.svg"
                className="w-8 h-8 md:w-12 md:h-12"
              />
            </div>
            <h3 className="text-[10px] md:text-sm">ANTI-MICROBIAL</h3>
          </div>
          {/* <div className="flex flex-col items-center">
            <div className="mb-3">
              <img
                src="https://images.ctfassets.net/5j6wpslh72e4/6J3kIc4yq5lYvto7yDVBnP/f305e339b6e0f9735dd0fd6111f07c4c/icon-antiwrinkle.svg"
                className="w-8 h-8 md:w-12 md:h-12"
              />
            </div>
            <h3 className="text-xs">AMAZINGLY STRETCHABLE</h3>
          </div> */}
        </div>
      </div>
      <h4 className="text-xl px-10 mt-10 font-bold ">
        Don't Forget to Check These
      </h4>
      <div className="px-3 md:px-10">
        <Suggestion productSuggestions={productData.suggestions} />
      </div>
      <div className="flex flex-col px-10">
        <ReviewModel
          isOpen={ReviewModelDis.isOpen}
          onClose={ReviewModelDis.onClose}
          productID={productData.id}
        />
        <Box w={"100%"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text fontSize={["md", "lg", "3xl"]} fontWeight={"bold"} my={"10"}>
              The Reviews Are In
            </Text>
            <Button onClick={() => ReviewModelDis.onOpen()}>
              Write a Review
            </Button>
          </Box>
          <Box
            w={"100%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            p={"2"}
          >
            {allReviews.map((review, index) => {
              return (
                <Box
                  w={["100%", "90%"]}
                  bgColor={"gray.100"}
                  p={"5"}
                  my={"2"}
                  key={index}
                >
                  <HStack my={"3"}>
                    {Array.from({ length: review.starcount }).map(
                      (star, index) => {
                        return (
                          <GrStar
                            key={index}
                            color={index === 5 ? "gray" : "black"}
                          />
                        );
                      }
                    )}
                  </HStack>
                  <Text fontSize={"lg"} fontWeight={"medium"} pb={"3"}>
                    {review.title}
                  </Text>
                  <Text fontSize={"md"} fontWeight={"normal"}>
                    {review.desc}
                  </Text>
                </Box>
              );
            })}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Products;

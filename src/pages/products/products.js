import React, { useEffect, useRef, useState } from "react";
// import { Carousel } from "flowbite-react";
import Star from "../../components/star";
import { useParams, useNavigate, Link } from "react-router-dom";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { AiOutlinePlayCircle } from "react-icons/ai";
import ReactPlayer from "react-player";
import axios from "axios";
import { BASEURL } from "../../Config/URL";
import { useDispatch, useSelector } from "react-redux";
import { DrawerState } from "../../Store/Drawer/actions";
import { AddCartItem } from "../../Store/Cart/actions";
import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
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

  const Sizes = ["XS", "S", "M", "L", "XL", "2XL"];

  const [chooseSize, setchooseSize] = useState("");
  const [chooseColor, setchooseColor] = useState("");
  const [selectColor, setSelectColor] = useState("");

  const [selectLength, setSelectLength] = useState("");

  const IsDrawerOpen = useSelector((state) => state.DrawerOptions.DrawerState);
  const CartItems = useSelector((state) => state.CartOptions.CartItems);

  const dispatch = useDispatch();

  const [videoplayer, setvideoPlayer] = useState(false);

  const params = useParams();
  const videoRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    if (selectColor !== "") {
      return allColors.filter((filCol) => {
        if (filCol.colorcode === selectColor) {
          setchooseColor(filCol.name);
        }
      });
    }
  }, [selectColor]);

  // useEffect(() => {
  //   localStorage.setItem("cartItem", JSON.stringify(CartItems));
  // }, [CartItems]);

  const getAllColors = async () => {
    return await axios
      .get(`${BASEURL}/Colors`)
      .then((resp) => {
        // console.log(resp.data.response);
        // setAllColors(resp.data.response);
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

  const [productAdded, setProductAdded] = useState(false);

  const getProductData = async () => {
    return await axios
      .get(`${BASEURL}/Product/${params.id}`)
      .then((resp) => {
        // console.log(resp.data);
        // console.log(resp.data.response);
        getAllReviews(resp.data.response?.id);
        setProductData(resp.data.response);
        makeCarousel(resp.data.response);
        setAllColors(resp.data.colors);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

  useEffect(() => {
    // getProData();
    getProductData();
    // getAllColors();
  }, [params.id]);

  // const colors = ["Black", "Navy-Blue", "Ceil-Blue"];

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
            // key={imageSlide}
          >
            <Slider>
              {CarouselData?.map((data, index) => {
                if (data.type === "image") {
                  return (
                    <Slide index={index} key={index}>
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
              {/* {productData.personname && productData?.personname[0]}
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
                productData?.typestylename?.slice(1).toLowerCase()} */}
              {productData.varientname &&
                productData?.varientname?.toLowerCase()}
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
            <h3 className="text-base font-medium">Colors</h3>
            <div className="mt-2 flex-1 flex items-center">
              {allColors.map((colors, index) => {
                return (
                  <Box
                    key={index}
                    title={colors.colors.name}
                    bgColor={colors.colors.code}
                    w={"5"}
                    h={"5"}
                    mx={"2"}
                    cursor={"pointer"}
                    rounded={"full"}
                    ring={"3"}
                    ringColor={
                      chooseColor === colors.colors.name
                        ? "blackAlpha.600"
                        : "white"
                    }
                    onClick={() => {
                      setchooseColor(colors.colors.name);
                      navigate("/products/" + colors.productId, {
                        preventScrollReset: true,
                        replace: true,
                      });
                    }}
                  ></Box>
                );
              })}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-normal font-medium my-3">SIZES</h3>

            <div className="flex item-center flex-wrap">
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
            </div>
            <Link
              to={
                productData.parentcategory === "MEN"
                  ? "/fitguide/men"
                  : "/fitguide/women"
              }
            >
              <Text cursor={"pointer"} p={"2"}>
                Fit Guide
              </Text>
            </Link>
            {productData.typestylename === "PANTS" && (
              <Box my={"3"}>
                <Text mb={"2"}>Length</Text>
                <Stack direction={"row"}>
                  <Box
                    cursor={"pointer"}
                    _hover={{
                      bgColor: "black",
                      color: "white",
                    }}
                    p={"2"}
                    rounded={"md"}
                    bgColor={selectLength === "Regular" ? "black" : "gray.300"}
                    color={selectLength === "Regular" ? "white" : "black"}
                    onClick={() => {
                      setSelectLength("Regular");
                    }}
                  >
                    <Text>Regular</Text>
                  </Box>
                  <Box
                    cursor={"pointer"}
                    _hover={{
                      bgColor: "black",
                      color: "white",
                    }}
                    p={"2"}
                    rounded={"md"}
                    bgColor={selectLength === "Petite" ? "black" : "gray.300"}
                    color={selectLength === "Petite" ? "white" : "black"}
                    onClick={() => {
                      setSelectLength("Petite");
                    }}
                  >
                    <Text>Petite</Text>
                  </Box>
                </Stack>
              </Box>
            )}
            <div
              className="flex flex-col items-center my-3 "
              onClick={() => {
                const item = {
                  productID: productData.id,
                  productimage: productData.productimage[0],
                  productname: productData.productname,
                  productsize: chooseSize,
                  productcolor: chooseColor || productData.colors.name,
                  productPrice: productData.price,
                  originalPrice: productData.price,
                  count: 1,
                };
                const checkCart = CartItems.filter(
                  (cartItem) => cartItem.productID === item.productID
                );
                if (checkCart.length === 0) {
                  dispatch(AddCartItem(item));
                  dispatch(DrawerState(!IsDrawerOpen));
                  setProductAdded(true);
                } else {
                  dispatch(DrawerState(!IsDrawerOpen));
                }
              }}
            >
              <div className="bg-black text-white w-full text-center py-3 rounded-md hover:bg-gray-900 hover:cursor-pointer">
                <p className="text-sm">Add to Cart</p>
              </div>
            </div>
            <Stack direction={"column"}>
              <Box display={"flex"} alignItems={"center"}>
                <Image src="/Images/Features/Artboard3.svg" w={"10"} h={"10"} />
                <Text>Product Fit Guarantee</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Image
                  src="/Images/Features/Artboard1.svg"
                  w={"10"}
                  h={"10"}
                  p={"1"}
                />
                <Text>Free Shipping & Returns</Text>
              </Box>
            </Stack>
            <Box>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Materials
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Our fabric blend is meticulously crafted to ensure
                    flexibility, designed specifically to move seamlessly with
                    your body. Comprising 74% Polyester, 20% Rayon, and 6%
                    Spandex, it offers both comfort and reliability.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Free Shipping & Returns
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    if you're not satisfied! We offer limitless exchanges for
                    scrubs with free shipping. Additionally, we accept returns
                    within 60 days of purchase for any reason, as long as the
                    scrubs are in their original, unworn, unwashed condition
                    with all tags attached.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </div>
        </div>
      </div>
      {/* Features */}
      <div>
        <div className="bg-gray-100 flex flex-row items-center justify-between md:justify-evenly p-5 py-10 md:p-20 my-10">
          <div className="flex flex-col items-center">
            <div className="mb-3">
              <img
                src="/Images/OurPromiseAni/ANTI-WRINKLE.gif"
                className="w-12 h-10 md:w-16 md:h-16"
              />
            </div>
            <h3 className="text-[10px] md:text-sm">ANTI-WRINKLE</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-3">
              <img
                src="/Images/OurPromiseAni/ANTI-MICROBIAL FINISH - PEWT.gif"
                className="w-12 h-10 md:w-16 md:h-16"
              />
            </div>
            <h3 className="text-[10px] md:text-sm">ANTI-MICROBIAL FINISH</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-3">
              <img
                src="/Images/OurPromiseAni/EXTREMELY SOFT - PEWT.gif"
                className="w-12 h-10 md:w-16 md:h-16"
              />
            </div>
            <h3 className="text-[10px] md:text-sm">EXTREMELY SOFT</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-3">
              <img
                src="/Images/OurPromiseAni/4-WAY STRETCH - PEWT.gif"
                className="w-12 h-10 md:w-16 md:h-16"
              />
            </div>
            <h3 className="text-[10px] md:text-sm">4-WAY STRETCH</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-3">
              <img
                src="/Images/OurPromiseAni/FADE RESISTANCE-PEWT.gif"
                className="w-12 h-10 md:w-16 md:h-16"
              />
            </div>
            <h3 className="text-[10px] md:text-sm">FADE RESISTANCE</h3>
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
      <h4 className="text-xl px-10 mt-10 font-bold ">Wear It With</h4>
      <div className="px-3 md:px-10">
        <Suggestion productSuggestions={productData?.suggestions} />
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

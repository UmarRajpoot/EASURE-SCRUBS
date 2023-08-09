import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import Star from "../../components/star";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { AiOutlinePlayCircle } from "react-icons/ai";
import ReactPlayer from "react-player";
import axios from "axios";
import { BASEURL } from "../../Config/URL";
import { useDispatch, useSelector } from "react-redux";
import { DrawerState } from "../../Store/Drawer/actions";
import { AddCartItem } from "../../Store/Cart/actions";
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import ReviewModel from "../../components/ReviewModel";
import Suggestion from "../../components/Suggestion";

const Products = () => {
  const [imageSlide, setImageSlide] = useState(0);
  const [productData, setProductData] = useState("");

  const [allColors, setAllColors] = useState([]);
  const [allReviews, setAllReviews] = useState([]);

  const ReviewModelDis = useDisclosure();

  const [chooseSize, setchooseSize] = useState("");
  const [chooseColor, setchooseColor] = useState("");
  const [selectColor, setSelectColor] = useState("");

  const IsDrawerOpen = useSelector((state) => state.DrawerOptions.DrawerState);
  const CartItems = useSelector((state) => state.CartOptions.CartItems);

  const dispatch = useDispatch();

  const [videoplayer, setvideoPlayer] = useState(false);

  const params = useParams();

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

  const getProductData = async () => {
    return await axios
      .get(`${BASEURL}/Product/${params.id}`)
      .then((resp) => {
        // console.log(resp.data);
        // console.log(resp.data.response);
        getAllReviews(resp.data.response.id);
        setProductData(resp.data.response);
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
    <div className="w-full">
      <div className="grid grid-cols-1 grid-rows-6 md:grid-rows-4 md:grid-cols-12 md:gap-3 px-6 h-screen mb-48 md:mb-2">
        <div className="hidden overflow-auto md:block md:col-span-1 md:h-screen no-scrollbar">
          <div className="flex flex-row md:flex-col items-center">
            {productData?.productimage?.map((img, index) => {
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
            {/* <div
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
              <div className=" w-6 h-6 absolute top-1/2 right-1/2 ">
                <AiOutlinePlayCircle size={25} />
              </div>
            </div> */}
          </div>
        </div>
        <div className="row-span-2 md:row-span-6 md:col-span-8">
          {videoplayer ? (
            <video
              autoPlay={true}
              controls
              style={{ height: "100%", width: "100%" }}
            >
              <source src={productData?.productvideo} type="video/mp4" />
            </video>
          ) : (
            <Carousel
              slide={false}
              indicators={false}
              leftControl={LeftControl}
              rightControl={RightControl}
            >
              {productData?.productimage?.map((img, index) => {
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
        <div className="md:hidden row-span-1 overflow-auto flex flex-row md:flex-col items-center no-scrollbar pr-10">
          {productData?.productimage?.map((img, index) => {
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
          {/* <div
            className="relative hover:cursor-pointer w-40 h-32 group bg-[url('https://mandalascrubs.com/cdn/shop/products/Jogger_Pants_A_MANDALA_ECOM_CS_Top1_CeilBlue_1178_600x.jpg?v=1624829195')] pr-10"
            onClick={() => setvideoPlayer(true)}
          >
            <img
              className={`p-1 opacity-50 group-hover:opacity-100  `}
              src={
                "https://mandalascrubs.com/cdn/shop/products/Jogger_Pants_A_MANDALA_ECOM_CS_Top1_CeilBlue_1178_600x.jpg?v=1624829195"
              }
              width={"100%"}
              height={"100%"}
            />
            <div className=" w-5 h-5 absolute top-14 right-5 ">
              <AiOutlinePlayCircle size={25} />
            </div>
          </div> */}
        </div>
        <div className=" row-span-3 md:row-span-2 md:col-span-3">
          <div>
            <h4 className="text-3xl">
              {productData.personname && productData?.personname[0]}
              {productData.personname &&
                productData?.personname?.slice(1).toLowerCase()}
              -
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
            <h3 className="text-base font-medium">CLASSIC</h3>
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
          </div>
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
      <div className="bg-gray-100 flex flex-row items-center justify-between md:justify-evenly p-5 py-10  md:p-20 my-14">
        <div className="flex flex-col items-center">
          <div className="mb-3">
            <img
              src="https://images.ctfassets.net/5j6wpslh72e4/JY4MM2RQjWzrmNx4jPQNY/0fe7ae049eaf125d3431e93edb3accdd/FIGS_Fabric_Icons_ClassicFit.png"
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </div>
          <h3 className="text-xs">CLASSIC FIT</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-3">
            <img
              src="https://images.ctfassets.net/5j6wpslh72e4/BiW7KWk3KwyPSNujJXTZi/ae1fb2611eda4619745e078b30dc76ea/icon-supersoft.svg"
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </div>
          <h3 className="text-xs">CLASSIC FIT</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-3">
            <img
              src="https://images.ctfassets.net/5j6wpslh72e4/1bcTq6qRNPBHPsqoJOADa8/80ca4177536b7c3cf494f9e9015c5ba2/icon-pocket.svg"
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </div>
          <h3 className="text-xs">3 POCKETS</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-3">
            <img
              src="https://images.ctfassets.net/5j6wpslh72e4/6J3kIc4yq5lYvto7yDVBnP/f305e339b6e0f9735dd0fd6111f07c4c/icon-antiwrinkle.svg"
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </div>
          <h3 className="text-xs">ANTI-WRINKLE</h3>
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
                  bgColor={"gray.300"}
                  p={"5"}
                  key={index}
                >
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

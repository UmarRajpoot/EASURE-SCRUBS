import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AccordionComp from "../../components/AccordionComp/AccordionComp";
import { Box, Image, Stack } from "@chakra-ui/react";
import axios from "axios";
import { BASEURL } from "../../Config/URL";

const ProductList = () => {
  const params = useParams();
  const FiltersList = ["Category", "Gender", "Size", "Color", "Review"];
  const [isOpen, setIsOpen] = useState(false);

  const [AllProducts, setAllProducts] = useState([]);

  const getProducts = async () => {
    return await axios
      .get(`${BASEURL}/Product`)
      .then((resp) => {
        // console.log(resp.data);
        setAllProducts(resp.data.response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const CardMen = ({ mensT, index }) => {
    return (
      <Link
        to={`/products/${mensT.productname.toLowerCase()}/men`}
        key={index.toString()}
      >
        <div className="px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
          <div className=" h-96 w-64 rounded-lg bg-cover bg-no-repeat bg-center">
            <Image
              src={mensT.productimage && mensT.productimage[0]}
              // onLoad={() => console.log("loading")}
            />
            <div className="p-2 text-base font-bold text-gray-500 ">
              <h1>
                {mensT.personname && mensT?.personname[0]}
                {mensT.personname && mensT?.personname?.slice(1).toLowerCase()}
                {mensT.varientname !== "JOGGER" && "-"}
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
  const CardWomen = ({ WTrend, index }) => {
    return (
      <Link
        to={`/products/${WTrend.productname.toLowerCase()}/women`}
        key={index.toString()}
      >
        <div className="px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
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

  return (
    <Stack minH={"100vh"} direction={"row"}>
      <Box w={"20%"} p={"10"} display={["none", "block"]}>
        <AccordionComp
          FiltersList={FiltersList}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Box>
      <Box
        flex={1}
        p={"5"}
        flexWrap={"wrap"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {AllProducts.map((product, index) => {
          if (product.parentcategory === params.category.toUpperCase())
            if (product.parentcategory === "MEN") {
              return <CardMen mensT={product} index={index} />;
            } else if (product.parentcategory === "WOMEN") {
              return <CardWomen WTrend={product} index={index} />;
            }
        })}
      </Box>
    </Stack>
  );
};

export default ProductList;

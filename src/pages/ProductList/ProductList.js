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

  const WomenList = [
    "3982c326-3160-463a-a8b4-8d82865e23d3",
    "e413e985-3977-463c-a83f-33cd584e9e2c",
    "544a84dc-ec52-4b02-b4e7-8568e4aa8574",
    "ea88584d-50b8-4732-aa66-c1d016d4b7d6",
    "36d8a10a-3ffe-4c4e-8aa8-4242dfcc3de2",
    "0d8bb012-74f9-4cde-894d-a5a477bb9321",
    "50e81ca6-2a68-4e47-bca2-6822bbf9eb9d",
    "6dde2c76-352b-4683-b954-f0a10ba73928",
    "604a4d77-99c2-4387-b3a1-25ac809f279c",
    "31717dc4-b7ab-42cb-91f5-0385db6175b3",
    "6e002472-8941-448c-b664-9708ae7d8165",
    "3f9a826f-6694-482d-a96a-f37044198c26",
    "c8552fa8-1163-475b-8a61-d60ee247826f",
    "f637416c-ec0b-486d-aa9c-e22c25048a61",
    "81287ebc-616c-4784-a784-67811e405f4d",
    "701f0a28-2c93-43cf-9212-d55a0ad593a9",
    "b89fa01c-5c93-44bd-91f8-89cac605f248",
    "449f50da-68c7-4168-a705-4d1e22d8bab8",
    "4bb35bc4-ea4c-4e1a-8fb7-2007c3a646e7",
    "6e5710d3-0f41-4ef5-8e29-89cc7075cd59",
    "d79a4676-0ae1-46d8-845d-ba4eda5f474a",
    "e3be9847-9ff8-4091-9e7c-2ddd19fd13b0",
    "8bbba27e-70ae-48ea-b3ac-40c3e5b6e4f7",
    "3e99340b-4d47-4f1c-a9ec-85efea5230b3",
  ];

  const getProducts = async () => {
    return await axios
      .get(`${BASEURL}/Product`)
      .then((resp) => {
        if (params.category === "women") {
          let temp_data = [];
          WomenList.map((list_id) => {
            resp.data.response.filter((women_prod) => {
              if (women_prod.id === list_id) {
                return temp_data.push(women_prod);
              }
            });
          });
          setAllProducts(temp_data);
        } else {
          setAllProducts(resp.data.response);
        }
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

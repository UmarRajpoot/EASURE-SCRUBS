import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductData } from "../../components/Date/ProductData";

const Collections = () => {
  const params = useParams();

  const [extProduct, setExtProduct] = useState([]);
  const [category, setCategory] = useState("womens");
  //   console.log(params);

  const extractProduct = () => {
    ProductData.map((prod) => {
      let Altername = prod.Color.split(" ").join("-");
      if (params.collection === Altername) {
        if (category === "womens") {
          setExtProduct(prod.product_women);
        } else {
          setExtProduct(prod.product_mens);
        }
      }
    });
  };

  useEffect(() => {
    if (params.category === "mens") {
      setCategory("mens");
    } else {
      setCategory("womens");
    }
  }, []);
  useEffect(() => {
    extractProduct();
  }, [category]);
  return (
    <div>
      <div
        className={`h-96 w-full  bg-cover bg-no-repeat bg-center ${
          params.collection === "Black"
            ? "bg-black"
            : params.collection === "Blue"
            ? "bg-blue-500"
            : params.collection === "Ceil-Blue"
            ? "bg-[#92a1cf]"
            : params.collection === "Navy"
            ? "bg-[#000080]"
            : "bg-gray-700"
        } items-center justify-center flex flex-col`}
      >
        <h2 className="text-xl md:text-4xl text-gray-300 font-medium ">
          {params.collection.split("-").join(" ")}
        </h2>
        <h3 className="text-lg md:text-3xl text-gray-300 mt-5">
          Feel the {params.collection.split("-").join(" ")}
        </h3>
      </div>
      <div className="flex my-5 items-center justify-center">
        <Link to={`/collections/Black/womens`}>
          <h2
            className={`text-sm text-gray-900 font-bold mr-4 ${
              category === "womens" ? "underline" : ""
            } underline-offset-8 underline-black cursor-pointer`}
            onClick={() => {
              setCategory("womens");
              console.log(params);
            }}
          >
            Womens
          </h2>
        </Link>
        <Link to={`/collections/Black/mens`}>
          <h2
            className={`text-sm text-gray-900 font-bold ${
              category === "mens" ? "underline" : ""
            } underline-offset-8 underline-black cursor-pointer`}
            onClick={() => {
              setCategory("mens");
            }}
          >
            Mens
          </h2>
        </Link>
      </div>

      {/*  */}
      <div className="flex overflow-x-scroll md:overflow-x-hidden overflow-y-hidden px-10 ">
        {extProduct.map((prod) => {
          return (
            <Link
              to={`/products/${prod.name.split(" ").join("-")}/${category}`}
            >
              <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
                <div
                  className=" h-96 w-64  bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${prod.productImage})`,
                  }}
                ></div>
                <div className="w-64 mt-3 ">
                  <h2 className="text-sm text-blue-600 font-bold cursor-pointer mb-3">
                    BEST SELLER
                  </h2>
                  <h2 className="text-lg text-gray-900 font-bold cursor-pointer mb-3">
                    {prod.name}
                  </h2>
                  <h2 className="text-md text-gray-900 font-extrabold cursor-pointer mb-3">
                    {prod.color}
                  </h2>
                  <h2 className="text-md text-gray-900 font-medium cursor-pointer">
                    {prod.price}
                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
        {/* <Link to={"/products/Ashley-jogger-scrub-pants"}>
          <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
            <div
              className=" h-96 w-64  bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${Women2})`,
              }}
            ></div>
            <div className="w-64 mt-3 ">
              <h2 className="text-sm text-blue-600 font-bold cursor-pointer mb-3">
                BEST SELLER
              </h2>
              <h2 className="text-lg text-gray-900 font-bold cursor-pointer mb-3">
                Ashley jogger scrub pants
              </h2>
              <h2 className="text-md text-gray-900 font-extrabold cursor-pointer mb-3">
                Black
              </h2>
              <h2 className="text-md text-gray-900 font-medium cursor-pointer">
                $38.00
              </h2>
            </div>
          </div>
        </Link>
        <Link to={"/products/Ashley-classic-scrub-and-Top"}>
          <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
            <div
              className=" h-96 w-64  bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${Women3})`,
              }}
            ></div>
            <div className="w-64 mt-3 ">
              <h2 className="text-sm text-blue-600 font-bold cursor-pointer mb-3">
                BEST SELLER
              </h2>
              <h2 className="text-lg text-gray-900 font-bold cursor-pointer mb-3">
                Ashley classic scrub and Top
              </h2>
              <h2 className="text-md text-gray-900 font-extrabold cursor-pointer mb-3">
                Black
              </h2>
              <h2 className="text-md text-gray-900 font-medium cursor-pointer">
                $38.00
              </h2>
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Collections;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../../Config/URL";

const Collection = () => {
  const params = useParams();

  const [extProduct, setExtProduct] = useState([]);
  const [category, setCategory] = useState("women");
  // console.log(params);

  const extractProduct = async () => {
    return await axios
      .get(`${BASEURL}/collection/${params.collection}`)
      .then((resp) => {
        setExtProduct(resp.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (params.collection.split("-")[2].toLowerCase() === "men") {
      setCategory("men");
    } else {
      setCategory("women");
    }
  }, []);

  // let totalLength = params.collection.split("-").length;
  // console.log(params.collection.split("-").slice(0, totalLength - 2));

  useEffect(() => {
    extractProduct();
  }, [category]);
  return (
    // Ceil-Blue
    <div>
      <div
        className={`h-96 w-full  bg-cover bg-no-repeat bg-center ${
          params.collection.split("-")[0] === "black"
            ? "bg-[#000000]"
            : params.collection
                .split("-")
                .slice(0, params.collection.split("-").length - 2)
                .toString()
                .replace(",", "-") === "navy-blue"
            ? "bg-[#000080]"
            : params.collection
                .split("-")
                .slice(0, params.collection.split("-").length - 2)
                .toString()
                .replace(",", "-") === "ceil-blue"
            ? "bg-[#92a1cf]"
            : "bg-gray-700"
        } items-center justify-center flex flex-col`}
      >
        <h2 className="text-xl md:text-4xl text-gray-300 font-medium ">
          {params.collection
            .split("-")
            .slice(0, params.collection.split("-").length - 2)}
        </h2>
        <h3 className="text-lg md:text-3xl text-gray-300 mt-5">
          Feel the{" "}
          {params.collection
            .split("-")
            .slice(0, params.collection.split("-").length - 2)}
        </h3>
      </div>
      <div className="flex my-5 items-center justify-center">
        <Link
          replace={true}
          to={`/collection/${params.collection
            .split("-")
            .slice(0, -2)
            .toString()
            .replace(",", "-")}-scrub-women`}
        >
          <h2
            className={`text-sm text-gray-900 font-bold mr-4 ${
              category === "women" ? "underline" : ""
            } underline-offset-8 underline-black cursor-pointer`}
            onClick={() => {
              setCategory("women");
            }}
          >
            Women
          </h2>
        </Link>
        {/* black-scrub-women */}
        <Link
          replace={true}
          to={`/collection/${params.collection
            .split("-")
            .slice(0, -2)
            .toString()
            .replace(",", "-")}-scrub-men`}
        >
          <h2
            className={`text-sm text-gray-900 font-bold ${
              category === "men" ? "underline" : ""
            } underline-offset-8 underline-black cursor-pointer`}
            onClick={() => {
              setCategory("men");
            }}
          >
            Men
          </h2>
        </Link>
      </div>

      <div className="flex md:flex-wrap overflow-x-scroll px-10 no-scrollbar">
        {extProduct.map((prod, index) => {
          return (
            <Link
              to={`/products/${prod.productname.toLowerCase()}/women`}
              key={index.toString()}
            >
              <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
                <div
                  className=" h-96 w-64  bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${prod.productimage[0]})`,
                  }}
                ></div>
                <div className="w-64 mt-3 ">
                  <h2 className="text-sm text-blue-600 font-bold cursor-pointer mb-3">
                    BEST SELLER
                  </h2>
                  <h2 className="text-lg text-gray-900 font-bold cursor-pointer mb-3">
                    {prod.productname}
                  </h2>
                  <h2 className="text-md text-gray-900 font-extrabold cursor-pointer mb-3">
                    {prod.colors[0].colors[0] === "#000000" && "BLACK"}
                    {prod.colors[0].colors[0] === "#000080" && "NAVY BLUE"}
                    {prod.colors[0].colors[0] === "#92a1cf" && "NAVY BLUE"}
                  </h2>
                  <h2 className="text-xl text-gray-900 font-medium cursor-pointer">
                    ${prod.price}.00
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

export default Collection;

import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASEURL } from "../Config/URL";
import { Link } from "react-router-dom";

const Suggestion = ({ productSuggestions }) => {
  const [productData, setProductData] = useState([]);

  const getProductData = async (productname) => {
    return await axios
      .get(`${BASEURL}/Product/${productname}`)
      .then((resp) => {
        return resp.data;
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

  const getAllProducts = async () => {
    if (productSuggestions !== undefined && productSuggestions !== null) {
      await axios
        .all(productSuggestions?.map((suggest) => getProductData(suggest)))
        .then((resp) => setProductData(resp))
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  useEffect(() => {
    if (productSuggestions !== undefined && productSuggestions !== null) {
      getAllProducts();
    }
  }, [productSuggestions]);

  return (
    <div className="flex overflow-x-scroll md:overflow-x-hidden overflow-y-hidden no-scrollbar">
      {productData &&
        productData?.map((suggest, index) => {
          return (
            <Link
              replace={true}
              to={`/products/${suggest.response.productname.toLowerCase()}/${suggest.response.parentcategory.toLowerCase()}`}
              key={index.toString()}
            >
              <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
                <div
                  className=" h-96 w-64  bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${suggest.response.productimage[0]})`,
                  }}
                ></div>
                <div className="w-64 mt-3 ">
                  <h2 className="text-sm text-blue-600 font-bold cursor-pointer mb-3">
                    BEST SELLER
                  </h2>
                  <h2 className="text-lg text-gray-900 font-bold cursor-pointer mb-3">
                    {suggest.response.productname}
                  </h2>
                  <h2 className="text-md text-gray-900 font-extrabold cursor-pointer mb-3">
                    {suggest.response.color}
                  </h2>
                  <h2 className="text-xl text-gray-900 font-medium cursor-pointer">
                    {suggest.response.price}
                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Suggestion;

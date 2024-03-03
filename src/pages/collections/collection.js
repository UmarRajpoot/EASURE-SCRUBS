import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../../Config/URL";
import { Image } from "@chakra-ui/react";

const Collection = () => {
  const params = useParams();

  const [extProduct, setExtProduct] = useState([]);
  const [category, setCategory] = useState("women");
  // console.log(params);

  const extractProduct = async () => {
    return await axios
      .get(`${BASEURL}/collection/${params.collection}`)
      .then((resp) => {
        // console.log(resp.data);
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
  }, [params.collection]);

  // let totalLength = params.collection.split("-").length;
  // console.log(params.collection.split("-").slice(0, totalLength - 2));

  useEffect(() => {
    extractProduct();
  }, [category]);

  const [onHover, setonHover] = useState("");

  const ProductCard = ({ Product, index }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <Link
        to={`/products/${Product.id}`}
        key={index.toString()}
        onMouseEnter={(e) => {
          const getIndexValue = extProduct[index];
          if (getIndexValue.id === Product.id) {
            setonHover(getIndexValue.id);
          }
        }}
        onMouseLeave={() => {
          // console.log("mouse leave", Product.id);
          setonHover("");
        }}
      >
        <div className="m-1 hover:scale-100 transition-all ease-in-out duration-200 hover:drop-shadow-sm cursor-pointer">
          <div className=" rounded-lg bg-cover bg-no-repeat bg-center">
            {isLoaded && Product.productimage && onHover === Product.id ? (
              <Image src={Product.productimage[1]} className="h-full w-full" />
            ) : (
              <Image
                src={Product.productimage[0]}
                onLoad={() => setIsLoaded(true)}
                className="h-full w-full"
              />
            )}
            <div className="py-3 text-sm md:text-base text-gray-500 ">
              <h1>
                {Product.varientname && Product?.varientname?.toLowerCase()}-
                {Product.typename && Product?.typename?.toLowerCase()}-
                {Product.typestylename && Product?.typestylename[0]}
                {Product.typestylename &&
                  Product?.typestylename?.slice(1).toLowerCase()}
              </h1>
            </div>
          </div>
        </div>
      </Link>
    );
  };
  return (
    // Ceil-Blue
    <div>
      <div className="relative  ">
        {/* <img src="https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Black%201.jpg?alt=media&token=52bc7761-5989-466f-a39b-a0ec430c83ab" /> */}
        {params.collection.split("-")[0] === "black" ? (
          <img src="https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Black%201.jpg?alt=media&token=52bc7761-5989-466f-a39b-a0ec430c83ab" />
        ) : params.collection
            .split("-")
            .slice(0, params.collection.split("-").length - 2)
            .toString()
            .replace(",", "-") === "navy-blue" ? (
          <img src="https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Navy%20Blue%206.jpg?alt=media&token=17c6a5cc-839f-470d-a2b2-774d3c52557a" />
        ) : // "bg-[url('https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Navy%20Blue%206.jpg?alt=media&token=17c6a5cc-839f-470d-a2b2-774d3c52557a')]"
        params.collection
            .split("-")
            .slice(0, params.collection.split("-").length - 2)
            .toString()
            .replace(",", "-") === "ceil-blue" ? (
          <img src="https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Ceil%20Blue%202.jpg?alt=media&token=60769f7f-f10b-4718-8eb0-5bfe2feb7190" />
        ) : // "bg-[url('https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Ceil%20Blue%202.jpg?alt=media&token=60769f7f-f10b-4718-8eb0-5bfe2feb7190')]"
        params.collection
            .split("-")
            .slice(0, params.collection.split("-").length - 2)
            .toString()
            .replace(",", "-") === "wine" ? (
          <img src="https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Wine%203.jpg?alt=media&token=45502092-4d36-4c9a-901b-aaa2d9434058" />
        ) : // "bg-[url('https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Wine%203.jpg?alt=media&token=45502092-4d36-4c9a-901b-aaa2d9434058')]"
        params.collection
            .split("-")
            .slice(0, params.collection.split("-").length - 2)
            .toString()
            .replace(",", "-") === "pewt" ? (
          <img src="https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Pewt%205.jpg?alt=media&token=72a021b6-d274-424f-ac05-749f7d5c6bfc" />
        ) : // "bg-[url('https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Pewt%205.jpg?alt=media&token=72a021b6-d274-424f-ac05-749f7d5c6bfc')]"
        params.collection
            .split("-")
            .slice(0, params.collection.split("-").length - 2)
            .toString()
            .replace(",", "-") === "royal-blue" ? (
          <img src="https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Royal%20Blue%204.jpg?alt=media&token=3a454bda-1603-4319-8e0d-5df65c7ef23a" />
        ) : (
          // "bg-[url('https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Royal%20Blue%204.jpg?alt=media&token=3a454bda-1603-4319-8e0d-5df65c7ef23a')]"
          "bg-gray-800"
        )}
        <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full">
          <h2 className="text-lg md:text-4xl text-gray-300 font-medium uppercase block  md:hidden ">
            {params.collection
              .split("-")
              .slice(0, params.collection.split("-").length - 2)}
          </h2>
          <h3 className="text-md md:text-3xl text-gray-300 block md:hidden ">
            Feel the{" "}
            {params.collection
              .split("-")
              .slice(0, params.collection.split("-").length - 2)}
          </h3>
        </div>
      </div>
      {/* <div
        className={`h-20 bg-contain md:h-[28rem] flex-1 md:bg-cover bg-no-repeat md:bg-center items-center justify-center flex flex-col ${
          params.collection.split("-")[0] === "black"
            ? "bg-[url('https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Black%201.jpg?alt=media&token=52bc7761-5989-466f-a39b-a0ec430c83ab')]"
            : params.collection
                .split("-")
                .slice(0, params.collection.split("-").length - 2)
                .toString()
                .replace(",", "-") === "navy-blue"
            ? "bg-[url('https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Navy%20Blue%206.jpg?alt=media&token=17c6a5cc-839f-470d-a2b2-774d3c52557a')]"
            : params.collection
                .split("-")
                .slice(0, params.collection.split("-").length - 2)
                .toString()
                .replace(",", "-") === "ceil-blue"
            ? "bg-[url('https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Ceil%20Blue%202.jpg?alt=media&token=60769f7f-f10b-4718-8eb0-5bfe2feb7190')]"
            : params.collection
                .split("-")
                .slice(0, params.collection.split("-").length - 2)
                .toString()
                .replace(",", "-") === "wine"
            ? "bg-[url('https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Wine%203.jpg?alt=media&token=45502092-4d36-4c9a-901b-aaa2d9434058')]"
            : params.collection
                .split("-")
                .slice(0, params.collection.split("-").length - 2)
                .toString()
                .replace(",", "-") === "pewt"
            ? "bg-[url('https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Pewt%205.jpg?alt=media&token=72a021b6-d274-424f-ac05-749f7d5c6bfc')]"
            : params.collection
                .split("-")
                .slice(0, params.collection.split("-").length - 2)
                .toString()
                .replace(",", "-") === "royal-blue"
            ? "bg-[url('https://firebasestorage.googleapis.com/v0/b/easure.appspot.com/o/Royal%20Blue%204.jpg?alt=media&token=3a454bda-1603-4319-8e0d-5df65c7ef23a')]"
            : "bg-gray-800"
        } `}
      >
        <h2 className="text-xl md:text-4xl text-gray-300 font-medium uppercase block  md:hidden">
          {params.collection
            .split("-")
            .slice(0, params.collection.split("-").length - 2)}
        </h2>
        <h3 className="text-lg md:text-3xl text-gray-300 mt-5  block  md:hidden">
          Feel the{" "}
          {params.collection
            .split("-")
            .slice(0, params.collection.split("-").length - 2)}
        </h3>
      </div> */}
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

      {/* className="flex md:flex-wrap overflow-x-scroll px-10 no-scrollbar" */}
      <div className="px-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {extProduct.map((prod, index) => {
          return (
            <ProductCard Product={prod} index={index} />
            // <Link to={`/products/${prod.id}`} key={index.toString()}>
            //   <div className="py-10 px-3 hover:scale-105 transition-all ease-in-out duration-200 hover:drop-shadow-xl cursor-pointer">
            //     <div
            //       className="h-auto w-auto bg-contain bg-no-repeat bg-center"
            //       style={{
            //         backgroundImage: `url(${prod.productimage[0]})`,
            //       }}
            //     ></div>
            //     <div className="w-64 mt-3 ">
            //       {/* <h2 className="text-sm text-blue-600 font-bold cursor-pointer mb-3">
            //         BEST SELLER
            //       </h2> */}
            //       <h2 className="text-lg text-gray-900 font-bold cursor-pointer mb-3">
            //         {/* {prod.productname} */}
            //         {prod.varientname && prod?.varientname?.toLowerCase()}-
            //         {prod.typename && prod?.typename?.toLowerCase()}-
            //         {prod.typestylename && prod?.typestylename[0]}
            //         {prod.typestylename &&
            //           prod?.typestylename?.slice(1).toLowerCase()}
            //       </h2>
            //       {/* <h2 className="text-md text-gray-900 font-extrabold cursor-pointer mb-3">
            //         {prod.colors[0].colors[0] === "#000000" && "BLACK"}
            //         {prod.colors[0].colors[0] === "#000080" && "NAVY BLUE"}
            //         {prod.colors[0].colors[0] === "#92a1cf" && "NAVY BLUE"}
            //       </h2> */}
            //       <h2 className="text-xl text-gray-900 font-medium cursor-pointer">
            //         ${prod.price}.00
            //       </h2>
            //     </div>
            //   </div>
            // </Link>
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

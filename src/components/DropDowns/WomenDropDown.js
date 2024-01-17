import React from "react";
import Text from "./Text";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <div className="border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
      <SimpleGrid
        columns={1}
        spacing={[5, 10]}
        w={["container.sm", "40"]}
        p={"5"}
        alignItems={"baseline"}
      >
        {/* <Box>
          <Box>
            <Link
              to="/collection/black-scrub-women"
              className="flex p-3 rounded-lg "
            >
              <Text text={"WOMEN'S HOME"} />
            </Link>
          </Box>
          <Box>
            <Link
              to="/collection/black-scrub-women"
              className="flex p-3 rounded-lg "
            >
              <Text text={"BLACK"} />
            </Link>
          </Box>
          <Box>
            <a href="#" className="flex p-3 rounded-lg ">
              <Text text={"KITS"} />
            </a>
          </Box>
          <Box>
            <a href="#" className="flex p-3 rounded-lg ">
              <Text text={"BEST SELLERS"} />
            </a>
          </Box>
          <Box>
            <a href="#" className="flex p-3 rounded-lg ">
              <Text text={"NEW ARRIVALS"} />
            </a>
          </Box>
        </Box> */}
        <Box>
          <Box>
            <div className="">
              <div className="font-semibold">Scrubs</div>
              <Box>
                <Link
                  to="/viewall/scrubs/women?filter=scrubtop"
                  className="flex p-3 rounded-lg "
                >
                  <Text text={"Scrubs Tops"} />
                </Link>
              </Box>
              <Box>
                <Link
                  to="/viewall/scrubs/women?filter=scrubpants"
                  className="flex p-3 rounded-lg "
                >
                  <Text text={"Scrub Pants"} />
                </Link>
              </Box>
              {/* <Box>
                <Link
                  to="/products/women-ashley-scrub-set/women"
                  className="flex p-3 rounded-lg "
                >
                  <Text text={"Scrub Set"} />
                </Link>
              </Box>
              <a href="#" className="p-2 flex ">
                <Text text={"Scrub Jumpsuit"} />
              </a>
              <a href="#" className="p-2 flex ">
                <Text text={"M-XL"} />
              </a>
              <a href="#" className="p-2 flex ">
                <Text text={"Maternity"} />
              </a> */}
            </div>
          </Box>
        </Box>
        {/* <Box>
          <Box>
            <div className="">
              <div className="font-semibold">Scrubs</div>
              <Box>
                <Link
                  to="/products/women-ashley-scrub-top/women"
                  className="flex p-3 rounded-lg "
                >
                  <Text text={"Scrubs Tops"} />
                </Link>
              </Box>
              <Box>
                <Link
                  to="/products/women-ashley-scrub-pants/women"
                  className="flex p-3 rounded-lg "
                >
                  <Text text={"Scrub Pants"} />
                </Link>
              </Box>
              <Box>
                <Link
                  to="/products/women-ashley-scrub-set/women"
                  className="flex p-3 rounded-lg "
                >
                  <Text text={"Scrub Set"} />
                </Link>
              </Box>
              <a href="#" className="p-2 flex ">
                <Text text={"Scrub Jumpsuit"} />
              </a>
              <a href="#" className="p-2 flex ">
                <Text text={"M-XL"} />
              </a>
              <a href="#" className="p-2 flex ">
                <Text text={"Maternity"} />
              </a>
            </div>
          </Box>
        </Box> */}
      </SimpleGrid>
    </div>
  );
};

export default DropDown;

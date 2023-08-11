import React from "react";
import Text from "./Text";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <div className="border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
      <SimpleGrid
        columns={3}
        spacing={[5, 10]}
        w={["container.sm", "container.md"]}
        p={"5"}
        alignItems={"baseline"}
      >
        <Box>
          <Box>
            <Link
              to="/collection/black-scrubs-men"
              className="flex p-3 rounded-lg "
            >
              <Text text={"MEN'S HOME"} />
            </Link>
          </Box>
          <Box>
            <Link
              to="/collection/black-scrubs-men"
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
        </Box>
        <Box>
          <Box>
            <div className="">
              <div className="font-semibold">Scrubs</div>
              <Box>
                <Link
                  to="/products/men-vincent-scrub-top/men"
                  className="flex p-3 rounded-lg "
                >
                  <Text text={"Scrubs Tops"} />
                </Link>
              </Box>
              <Box>
                <Link
                  to="/products/men-vincent-scrub-pants/men"
                  className="flex p-3 rounded-lg "
                >
                  <Text text={"Scrub Pants"} />
                </Link>
              </Box>
              <Box>
                <Link
                  to="/products/men-vincent-scrub-set/men"
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
        </Box>
        <Box>
          <Box>
            <div className="">
              <div className="font-semibold">Scrubs</div>
              <Box>
                <Link
                  to="/products/men-vincent-scrub-top/men"
                  className="flex p-3 rounded-lg "
                >
                  <Text text={"Scrubs Tops"} />
                </Link>
              </Box>
              <Box>
                <Link
                  to="/products/men-vincent-scrub-pants/men"
                  className="flex p-3 rounded-lg "
                >
                  <Text text={"Scrub Pants"} />
                </Link>
              </Box>
              <Box>
                <Link
                  to="/products/men-vincent-scrub-set/men"
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
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default DropDown;

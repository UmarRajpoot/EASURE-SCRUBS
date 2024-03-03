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
        <Box>
          <Box>
            <div className="">
              <div className="font-semibold">Scrubs</div>
              <Box>
                <Link
                  to="/viewall/scrubs/men?filter=scrubtop"
                  className="flex p-3 rounded-lg "
                >
                  <Text text={"Scrubs Tops"} />
                </Link>
              </Box>
              <Box>
                <Link
                  to="/viewall/scrubs/men?filter=scrubpants"
                  className="flex p-3 rounded-lg "
                >
                  <Text text={"Scrub Pants"} />
                </Link>
              </Box>
            </div>
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default DropDown;

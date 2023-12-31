import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  Checkbox,
} from "@chakra-ui/react";

const AccordionComp = ({ FiltersList }) => {
  return (
    <Box>
      {FiltersList.map((filter, index) => {
        return (
          <Accordion allowToggle key={index}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontSize={"sm"}>
                    {filter.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack>
                  {filter?.data &&
                    filter?.data.map((data) => {
                      return (
                        <Checkbox colorScheme="gray">{data.name}</Checkbox>
                      );
                    })}
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default AccordionComp;

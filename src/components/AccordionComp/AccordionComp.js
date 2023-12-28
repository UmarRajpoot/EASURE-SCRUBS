import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const AccordionComp = ({ FiltersList, isOpen, setIsOpen }) => {
  return (
    <Box>
      {FiltersList.map((filter, index) => {
        return (
          <Accordion allowToggle key={index}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontSize={"sm"}>
                    {filter}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>Lorem ipsum</AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default AccordionComp;

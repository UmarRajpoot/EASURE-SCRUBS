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

const FooterAccordian = ({ title, body }) => {
  return (
    <Box>
      <Accordion allowToggle>
        <AccordionItem className="border-none text-white">
          <h2>
            <AccordionButton>
              <h1 className="text-left w-full font-bold">{title}</h1>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack>{body}</Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FooterAccordian;

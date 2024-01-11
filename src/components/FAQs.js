import React from "react";
import {
  Box,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FAQs = () => {
  const order_related_questionData = [
    {
      question: "Guidelines for returns and exchanges",
      ques_detail: `No worries if you're not satisfied! We offer limitless exchanges for scrubs with
            free shipping. Additionally, we accept returns within 60 days of purchase for any
            reason, as long as the scrubs are in their original, unworn, unwashed condition
            with all tags attached.`,
    },
    {
      question: "How long does processing returns or exchanges usually take?",
      ques_detail: `Please allow 6-8 days for your return or exchange to be processed. We will
            send you an email confirmation once your refund has been completed and/or
            exchange sent out. Once your refund is complete, please allow 3-5 business
            days for the amount to appear back on your original payment method.`,
    },
    {
      question: "Who covers the cost of return shipping charges?",
      ques_detail: `Absolutely, return shipping is covered by us!
      `,
    },
    {
      question: "What is the expected delivery time for my order?",
      ques_detail: `For orders within the US, expect delivery in 3-5 business days. You'll receive an
      email with detailed tracking information once your order ships.`,
    },
    {
      question: "Which payment methods are accepted?",
      ques_detail: `We welcome payments via Visa, MasterCard, American Express, Discover,
      and PayPal.`,
    },
  ];

  const scrubs_related_questionData = [
    {
      question: "What type of material is used in this fabric?",
      ques_detail: `Our fabric blend is meticulously crafted to ensure flexibility, designed
      specifically to move seamlessly with your body. Comprising 74% Polyester,
      20% Rayon, and 6% Spandex, it offers both comfort and reliability.`,
    },
    {
      question: "Will more colors and designs be offered soon?",
      ques_detail: `As we embark on this new journey, anticipate colors and designs soon.

      If you have a specific color in mind, please email us at
      info@easurescrubs.com. Your suggestions will be reviewed by our design
      team for future releases.`,
    },
    {
      question: "Are the scrubs sized accurately for fitting?",
      ques_detail: `Navigating sizing differences in apparel due to individual body types can be
      tricky. We recommend using our fit guide, comparing your measurements for
      the best fit.

      We offer unlimited exchanges and free returns, so if unsure, order two sizes
      and return the one that doesn't fit! 
      
      Bonus tip: Orders over $50 qualify for free shipping, allowing you to try
      different sizes and return what doesn't suit you!`,
    },
    {
      question: "What is the effectiveness of fade resistance technology?",
      ques_detail: `Our scrubs endure thorough durability testing, rigorously examined before
      launch by top agencies to ensure long-term performance. Our technology
      offers more washes compared to traditional scrub materials.
      `,
    },
    {
      question: "How efficient is the 4-way stretch technology in use?",
      ques_detail: `It can expand when subjected to physical force, such as stretching or pulling,
      and then return to its original shape and size when the force is released.`,
    },
  ];

  const SelectionItem = ({ question, ques_detail }) => {
    return (
      <Accordion allowToggle w={"1/2"}>
        <AccordionItem border={0}>
          <h2>
            <AccordionButton>
              <AccordionIcon />
              <Box as="span" flex="1" textAlign="left" fontWeight={"medium"}>
                {question}
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color={"gray.600"} whiteSpace={"pre-line"}>
            {ques_detail}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  };

  const Section = ({ title, data }) => {
    return (
      <Box>
        <Text fontSize={"xl"} fontWeight={"medium"}>
          {title}
        </Text>
        <Stack>
          {data.map((ques, index) => {
            return (
              <SelectionItem
                key={index}
                question={ques.question}
                ques_detail={ques.ques_detail}
              />
            );
          })}
        </Stack>
      </Box>
    );
  };

  return (
    <Box
      p={"20"}
      display={"flex"}
      alignItems={"center"}
      //   justifyContent={"center"}
    >
      <Stack direction={["column", "row"]}>
        <Box p={"10"} w={"1/2"}>
          <Stack>
            <Link
              to={"/FAQs/#ordered_related"}
              onScroll={(e) => e.currentTarget.animate()}
            >
              <Text fontSize={"lg"} cursor={"pointer"}>
                Order related
              </Text>
            </Link>
            <Link to={"/FAQs/#scrubs_related"}>
              <Text fontSize={"lg"} cursor={"pointer"}>
                Scrubs related
              </Text>
            </Link>
          </Stack>
        </Box>
        <Stack flex={1} px={"20"} spacing={"10"}>
          <Section
            title={"Ordered related"}
            id={"ordered_related"}
            data={order_related_questionData}
          />
          <Section
            title={"Scrubs related"}
            id={"scrubs_related"}
            data={scrubs_related_questionData}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default FAQs;

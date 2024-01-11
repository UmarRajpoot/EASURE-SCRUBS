import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

const PrivacyPolicy = () => {
  const TextComp = ({ heading, children, ...props }) => {
    return (
      <Text fontSize={"sm"} {...props} color={"blackAlpha.800"}>
        {children}
      </Text>
    );
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack w={["80%", "50%"]} spacing={"5"} py={"5"}>
        <TextComp textAlign={"center"}>Privacy Policy</TextComp>
        <TextComp>
          EASURE scrubs are committed to respecting and safeguarding your
          privacy. Please read the following to understand our practices
          concerning the collection, use, and disclosure of information gathered
          online on the EASURE Scrubs website.
        </TextComp>
        <TextComp>
          We retain the right to modify, add, or remove provisions of this
          Privacy Policy at any time. Any alterations will be posted here. We
          recommend periodic checks on this page because your continued use of
          the EASURE Scrubs’ Site following any changes to this Privacy Policy
          signifies your acceptance of such modifications.
        </TextComp>
        <TextComp fontWeight={"bold"}>
          Collection and Use of Information Provided
        </TextComp>
        <TextComp>
          When registering or ordering on our website, you may be required to
          input your name, email address, mailing address, phone number, or
          credit card details. Upon registration, you'll create a unique login
          ID and password. Visiting our website is possible without
          registration; however, we collect the following information from all
          users:
        </TextComp>
        <TextComp>
          Device information (IP address, browser type and language, operating
          system) - Log data (pages viewed, time spent, clicks, domain names,
          interaction dates/times) - Purchase history - Cookies and tracking
          technologies (as described below)
        </TextComp>
        <TextComp>
          Additionally, we may obtain your personal information from a social
          media platform if you connect to our website through such services.
        </TextComp>
        <TextComp>
          When purchasing from our online store, your credit card or debit card
          details are collected by a third-party payment processor. We don't
          have access to this information.
        </TextComp>
        <TextComp fontWeight={"bold"}>How We Use Your Information</TextComp>
        <TextComp>
          The data collected may be utilized for: - Processing transactions -
          Personalizing your experience - Enhancing our website - Improving
          customer service - Administering contests, promotions, surveys, or
          website features - Marketing EASURE Products and Services
        </TextComp>
        <TextComp>
          EASURE may use your information to offer products, services, and
          promotional materials via phone, postal mail, TextComp, email, or
          other means, as allowed by law. This includes tailoring content,
          advertisements, and offers, notifying you about relevant
          products/services, providing services, or other disclosed purposes or
          with your consent.
        </TextComp>
        <TextComp fontWeight={"bold"}>
          Social Media and Third-Party Links
        </TextComp>
        <TextComp>
          Our website may feature social media widgets or links to third-party
          products/services, governed by their respective privacy policies.
          We’re not liable for these external sites’ activities or content.
        </TextComp>
        <TextComp fontWeight={"bold"}>Access to Personal Information</TextComp>
        <TextComp>
          To update, correct, or remove your personal information, email our
          Consumer Relations Department. However, these changes may not be
          immediate or retroactive.
        </TextComp>
        <TextComp fontWeight={"bold"}>Security Measures</TextComp>
        <TextComp>
          While we take precautions to ensure secure data transmission, we
          cannot guarantee total security for transmitted information. We employ
          SSL encryption for credit card data upon receipt.
        </TextComp>
        <TextComp fontWeight={"bold"}>External Links</TextComp>
        <TextComp>
          Links on the EASURE SCRUBS Site redirect to other websites. We're not
          accountable for their privacy practices or content. When leaving our
          site, review the privacy policies of each site gathering personally
          identifiable information.
        </TextComp>
        <TextComp fontWeight={"bold"}>Contact Us</TextComp>
        <TextComp>
          For further inquiries, contact info@easurescrubs.com
        </TextComp>
      </Stack>
    </Box>
  );
};

export default PrivacyPolicy;

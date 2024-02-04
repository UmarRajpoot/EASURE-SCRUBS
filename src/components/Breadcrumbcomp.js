import React, { useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate, useSearchParams } from "react-router-dom";

const Breadcrumbcomp = () => {
  const BreadcrumbItems = [
    { id: "shipping_address", name: "Shipping Address" },
    { id: "payment", name: "Payment" },
  ];

  const [searchParams] = useSearchParams();
  const step = searchParams.get("step");

  const navigate = useNavigate();

  useEffect(() => {
    if (step === null) {
      navigate("/checkout?step=shipping_address");
    }
  }, [step]);

  return (
    <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
      {BreadcrumbItems.map((bradcrumb, index) => {
        return (
          <BreadcrumbItem
            key={index}
            isCurrentPage={
              bradcrumb.id?.toLowerCase() === step?.toLowerCase() ? true : false
            }
          >
            <BreadcrumbLink
              fontSize={"sm"}
              onClick={() => {
                navigate(`/checkout?step=${bradcrumb.id}`);
              }}
            >
              {bradcrumb.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbcomp;

import React, { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
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
    return;
  }, [step]);

  return (
    <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
      {BreadcrumbItems.map((bradcrumb, index) => {
        return (
          <BreadcrumbItem
            key={index}
            isCurrentPage={
              bradcrumb.id?.toLowerCase() !== step?.toLowerCase() ? true : false
            }
            onClick={() => {
              if (bradcrumb.id?.toLowerCase() === step?.toLowerCase()) {
                navigate(`/checkout?step=${bradcrumb.id}`, { replace: true });
              }
            }}
          >
            <BreadcrumbLink fontSize={"sm"}>{bradcrumb.name}</BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbcomp;
